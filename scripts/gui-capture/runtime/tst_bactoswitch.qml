import QtQuick 2.12
import QtQuick.Window 2.12
import QtTest 1.2
import "textMetrics.js" as TextMetrics
import "qrc:/models" as Models

// BactoSwitch manual screens in the unchanged production GUI. The fixture is in
// bactoswitch_capture.py; this harness only navigates, reads bounds and grabs frames.
TestCase {
    id: capture
    name: "BactoSwitchCapture"
    when: windowShown
    visible: true
    width: 800
    height: 480
    property var ui: null
    property var http: Models.HTTPRequestController
    property var socket: Models.WebSocketController
    property var requests: []
    property string localeCode: "en"
    readonly property var screen: ui ? findChild(ui,"screenLoader").item : null
    readonly property string screenSource: ui ? findChild(ui,"screenLoader").source.toString() : ""
    readonly property string outputRoot: decodeURIComponent(Qt.resolvedUrl("../../../output/gui-capture/bactoswitch/native")
                                                          .toString().replace(/^file:\/\//,""))
    SignalSpy { id: signedIn; target: capture.http; signalName: "loggedIn" }
    SignalSpy { id: statusLoaded; target: capture.http; signalName: "statusReceived" }
    SignalSpy { id: settingsLoaded; target: capture.http; signalName: "settingsReceived" }
    SignalSpy { id: resultsLoaded; target: capture.http; signalName: "dataReceived" }
    SignalSpy { id: connected; target: capture.socket; signalName: "open" }
    Connections {
        target: NetworkRequests
        onSent: {
            var value=body.toString()
            verify(!(path.indexOf("/api/settings")===0 && value.length>0),"No settings save is allowed: "+path)
            verify(path.indexOf("/api/run")!==0 && path.indexOf("/api/clear")!==0 && path.indexOf("/api/reset")!==0
                   && path.indexOf("/api/sosd")!==0 && path.indexOf("/api/io")!==0,"No hardware action is allowed: "+path)
            requests.push({path:path,body:value})
        }
    }
    // Cocoa stops drawing fully occluded windows; keep this window exposed while it runs.
    Window {
        id: renderWindow
        title: "BactoSwitch manual capture"
        width: 800; height: 480
        visible: true
        flags: Qt.Window | Qt.WindowStaysOnTopHint
    }

    function receive(spy,request) { spy.clear();request();tryCompare(spy,"count",1,15000) }
    function render() {
        renderWindow.raise();renderWindow.requestActivate()
        ui.opacity=0.999;wait(20);ui.opacity=1
        verify(waitForRendering(ui,5000),"Cocoa rendering is required")
    }
    function navigate(path) {
        findChild(ui,"navigationHost").modalSource=""
        findChild(ui,"navigationHost").navigateTo("qrc:/controllers/"+path,true)
        tryVerify(function(){return screenSource.indexOf(path)>=0 && screen!==null},10000,path)
        wait(600);render()
    }
    function findText(item,text,type) {
        if(!item)return null
        if(item.visible && item.text!==undefined && item.text.toString()===text
           && (!type || item.toString().indexOf(type)===0))return item
        var children=item.children || []
        for(var i=0;i<children.length;++i){var found=findText(children[i],text,type);if(found)return found}
        return null
    }
    function click(item) {
        verify(item!==null && item.visible,"Missing production control")
        render();mouseClick(item,item.width/2,item.height/2);wait(500)
    }
    function tree(item,objects,depth) {
        if(!item || depth>20)return
        if(item.visible && item.width>0 && item.height>0){
            var point=item.mapToItem(ui,0,0)
            objects.push({type:item.toString().split("(")[0],name:item.objectName || "",
                text:item.text!==undefined && item.text!==null ? item.text.toString():"",
                x:point.x,y:point.y,width:item.width,height:item.height,
                source:item.source ? item.source.toString():"",checked:item.checked===true,
                enabled:item.enabled!==false,color:item.color ? item.color.toString():""})
        }
        var children=item.children || []
        for(var i=0;i<children.length;++i)tree(children[i],objects,depth+1)
    }
    function snapshot(state) {
        render();wait(250)
        var objects=[];tree(ui,objects,0)
        console.log("BACTOSWITCH_TREE "+localeCode+" "+state+" "+JSON.stringify(objects))
        console.log("CAPTURE_TEXT "+localeCode+"/"+state+" "+JSON.stringify(TextMetrics.collect(ui)))
        var complete=false
        ui.grabToImage(function(result){complete=result.saveToFile(outputRoot+"/"+localeCode+"/"+state+".png")},Qt.size(1600,960))
        tryVerify(function(){return complete},10000,"Native BactoSwitch image "+state)
    }
    function createUi(row) {
        localeCode=row.tag
        Models.System.language_index=row.index
        Models.System.mode="auto"
        Models.System.hasShownOnlineModePrompt=true
        Models.System.cloudModalSuppressUntil=new Date(Date.now()+86400000)
        Models.System.updateModalSuppressUntil=new Date(Date.now()+86400000)
        Translator.selectLanguage(row.name);Models.Dico.updateString()
        presentBactoSwitch(0,802)
        if(ui)ui.destroy()
        var component=Qt.createComponent("qrc:/UILoader.qml")
        compare(component.status,Component.Ready,component.errorString())
        ui=component.createObject(renderWindow.contentItem)
        verify(ui!==null,component.errorString())
        wait(400)
    }
    // The fixture's BactoSwitch status (private Redis, served by /api/status), re-applied to the
    // in-memory status model so a state change such as the single open valve shows at once.
    function presentBactoSwitch(valves,flow) {
        Models.Status.vars.sosd_connected="1"
        Models.Status.vars.sosd_setup_mounted_valve_count="4"
        Models.Status.vars.sosd_status_global="0"
        Models.Status.vars.sosd_status_valve_output_state=String(valves)
        Models.Status.vars.sosd_measure_flow_mlpermin=String(flow)
        Models.Status.varsChanged()
    }
    function initTestCase() {
        Models.System.saved_port_web=":"+Integration.port
        receive(signedIn,function(){http.login("admin","")})
        receive(statusLoaded,function(){http.status()})
        receive(settingsLoaded,function(){http.settings()})
        Models.Protocols.setBucket("auto")
        receive(resultsLoaded,function(){http.getData()})
        receive(connected,function(){socket.openSocket()})
        compare(http.level,0)
        // Bactoserver v3 publishes the detection result; it must come from the server, not this harness.
        verify(Models.Status.isBactoSwitchConnected,"The private server must report a connected BactoSwitch")
        verify(Models.Status.vars.sosd_setup_mounted_valve_count==="4","The private server must report four valves")
    }
    function cleanupTestCase() {
        console.log("BACTOSWITCH_REQUESTS "+JSON.stringify(requests))
    }
    function test_screens_data() {
        return [{tag:"en",index:0,name:"en-US"},{tag:"de",index:2,name:"de-DE"},{tag:"fr",index:1,name:"fr-FR"},
                {tag:"it",index:3,name:"it-IT"},{tag:"es",index:4,name:"es-ES"}]
    }
    function test_screens(row) {
        createUi(row)
        navigate("settingsScreens/SettingsMenuHomeScreen.qml")
        snapshot("settings-menu")
        navigate("settingsScreens/SettingsMenuAutoModeSettingsScreen.qml")
        snapshot("online-mode-settings-menu")
        navigate("settingsScreens/SettingsSosdConfig.qml")
        snapshot("sample-lines")
        navigate("settingsScreens/SettingsTestSosd.qml")
        presentBactoSwitch(0,802)
        tryVerify(function(){return findText(ui,"802")!==null},5000,"Fixture flow must be shown")
        snapshot("control-panel-all-open")
        // Teaching state in the in-memory status model only: valve 4 open, single-line flow.
        presentBactoSwitch(7,326)
        tryVerify(function(){return findText(ui,"326")!==null},5000,"Single-line flow must be shown")
        snapshot("control-panel-single-valve")
    }
    function findContains(item,text,type) {
        if(!item)return null
        if(item.visible && item.text!==undefined && item.text!==null && item.text.toString().indexOf(text)>=0
           && (!type || item.toString().indexOf(type)===0))return item
        var children=item.children || []
        for(var i=0;i<children.length;++i){var found=findContains(children[i],text,type);if(found)return found}
        return null
    }
    function clickName(name) { click(findChild(ui,name)) }
    function linesPeriod() {
        // The real Filter results OK action, restricted to the fixture's BactoSwitch period.
        Models.Protocols.setBucket("auto")
        Models.Data.setRangeFilter(new Date(2026,1,27,0,0),new Date(2026,2,25,6,0))
        wait(300)
    }
    // "1 Month" in the display settings, scrolled so the month ends at the last line measurement.
    function showLinesMonth() {
        Models.System.selectedChartTimeSpan=2
        navigate("autoScreens/AutoMainScreen.qml")
        presentBactoSwitch(0,802)
        var model=findChild(ui,"autoFullChartModel"), flickable=findChild(ui,"autoFullChartFlickable")
        tryVerify(function(){return model.dataLength>3},10000,"Chart data")
        // The chart opens on the newest gate type (CBC); show the lines' TCC series as a user would.
        if(model.selectedChartData_c.indexOf("TCC")<0){
            click(findChild(ui,"autoChartTimeSelector"))
            click(findText(ui,"TCC"))
            click(findText(ui,Models.Dico.text.Close) || findContains(ui,"Close"))
            tryVerify(function(){return model.selectedChartData_c.indexOf("TCC")>=0},5000,"TCC series shown")
        }
        var first=model.chartValues.timestamps[0], now=model.currentDate.getTime()
        var end=new Date(2026,2,25,12,0).getTime()
        flickable.contentX=Math.max(Math.min((end-first)/(now-first)*flickable.contentWidth-flickable.width,
                                             flickable.contentWidth-flickable.width),0)
        wait(500)
    }
    function rightmostActionButton() {
        var best=null
        for(var i=0;i<5;++i){var b=findChild(ui,"actionBarButton"+i);if(b && b.visible && (!best || b.x>best.x))best=b}
        return best
    }
    function test_measure_data() { return test_screens_data() }
    function test_measure(row) {
        createUi(row)
        navigate("globalScreens/HomeScreen.qml")
        snapshot("home-online")
        linesPeriod()
        showLinesMonth()
        snapshot("plot-lines")
        click(findChild(ui,"autoChartTimeSelector"))
        snapshot("display-settings")
        click(findText(ui,Models.Dico.text.Close) || findContains(ui,"Close"))
        snapshot("plot-start")
        clickName("actionBarButton3")
        presentBactoSwitch(0,802)
        tryVerify(function(){return screenSource.indexOf("AutoInstructionWizardScreen.qml")>=0},10000,"Start opens the wizard")
        wait(400)
        snapshot("wizard-protocols")
        var protocol=findContains(ui,"BactoSwitch")
        verify(protocol!==null,"The BactoSwitch protocol must be listed while it is connected")
        click(protocol)
        snapshot("wizard-protocol-selected")
        console.log("BACTOSWITCH_EVIDENCE "+JSON.stringify({locale:localeCode,protocolText:protocol.text.toString()}))
        click(rightmostActionButton())
        snapshot("wizard-interval")
    }
    function test_results_data() { return test_screens_data() }
    function test_results(row) {
        createUi(row)
        linesPeriod()
        navigate("globalScreens/ResultListScreen.qml")
        snapshot("results-list")
        click(findChild(ui,"resultRow0"))
        tryVerify(function(){return screenSource.indexOf("SingleResultScreen.qml")>=0},10000,"A row opens its details")
        wait(400)
        snapshot("result-details")
        navigate("globalScreens/ResultListScreen.qml")
        clickName("actionBarButton0")
        tryVerify(function(){return screenSource.indexOf("ResultListConfigScreen.qml")>=0},10000,"Filter opens Filter results")
        wait(400)
        snapshot("filter-results")
        clickName("actionBarButton1")
        tryVerify(function(){return findChild(ui,"modalLoader").source.toString().indexOf("ModalChooseSosdStream")>=0},5000,"Line selector")
        wait(300)
        click(findText(ui,"Unnamed line 1"))
        snapshot("select-line")
        var modalItem=findChild(ui,"modalLoader").item
        // Confirm is the right-hand button of the line selector.
        click(findText(modalItem,Models.Dico.text.Confirm) || findContains(modalItem,"onfirm"))
        tryVerify(function(){return Models.Data.hasKeyFilter("streamId")},5000,"Line filter applied")
        clickName("actionBarButton3")
        tryVerify(function(){return screenSource.indexOf("ResultListScreen.qml")>=0},10000,"OK returns to the list")
        wait(400)
        snapshot("results-filtered")
        showLinesMonth()
        snapshot("plot-filtered")
    }
    function test_plc_data() { return test_screens_data() }
    function test_plc(row) {
        createUi(row)
        navigate("settingsScreens/SettingsAlarmsScreen.qml")
        var key=Object.keys(Models.Settings.tempAlarms)[0]
        Models.Settings.tempAlarms[key].useSOSDStream=true
        Models.Settings.tempAlarms[key].streamId=1
        Models.Settings.tempAlarmsChanged()
        navigate("settingsScreens/SettingsAlarmsScreen.qml")
        snapshot("alarm-line")
        var inputs=Models.Settings.tempDigitalInputs
        var first=Object.keys(inputs.digitalInputs)[0]
        inputs.digitalInputsEnabled=true
        inputs.digitalInputs[first].enabled=true
        inputs.digitalInputs[first].autoArgs.protocol="sosd_auto"
        // The gate set the wizard proposes for this protocol; the input's TCC set is invalid for it.
        inputs.digitalInputs[first].autoArgs.gates="icc_default"
        inputs.digitalInputs[first].autoArgs.streamId=0
        Models.Settings.tempDigitalInputsChanged()
        navigate("settingsScreens/SettingsDigitalInputsScreen.qml")
        tryVerify(function(){return findContains(ui,"#1","InputField")!==null},5000,"The Line box must be shown for the BactoSwitch protocol")
        snapshot("digital-inputs-line")
        // Unsaved scheduler draft: measurements every 30 minutes, cycling through the active lines.
        inputs.digitalInputs[first].autoMode=true
        inputs.digitalInputs[first].autoInterval=30
        Models.Settings.tempDigitalInputsChanged()
        navigate("settingsScreens/SettingsDigitalInputsScreen.qml")
        snapshot("digital-inputs-scheduler")
        navigate("settingsScreens/SettingsDigitalOutputsScreen.qml")
        snapshot("digital-outputs")
        // The source toggle is enabled only with the Modbus service on; GUI model only.
        Models.Settings.vars.serviceModbus=true
        Models.Settings.varsChanged()
        navigate("settingsScreens/SettingsDigitalInputSourceScreen.qml")
        var modbus=findContains(ui,"Modbus")
        verify(modbus!==null,"Modbus TCP source")
        click(modbus)
        tryVerify(function(){return Models.Settings.tempDigitalInputs.digitalInputSource===1},5000,"Unsaved Modbus TCP source")
        snapshot("digital-input-source")
    }
    // Planning pass: one frame and control tree per remaining screen.
    function test_explore_data() { return test_screens_data() }
    function test_explore(row) {
        createUi(row)
        var screens=["globalScreens/HomeScreen.qml","autoScreens/AutoMainScreen.qml","globalScreens/ResultListScreen.qml",
                     "globalScreens/ResultListConfigScreen.qml","settingsScreens/SettingsAlarmsScreen.qml",
                     "settingsScreens/SettingsDigitalInputsScreen.qml","settingsScreens/SettingsDigitalOutputsScreen.qml",
                     "settingsScreens/SettingsDigitalInputSourceScreen.qml"]
        for(var i=0;i<screens.length;++i){
            navigate(screens[i])
            presentBactoSwitch(0,802)
            snapshot("explore-"+screens[i].split("/")[1].replace(".qml","").toLowerCase())
        }
    }
}
