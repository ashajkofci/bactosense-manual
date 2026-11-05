import QtQuick 2.12
import QtQuick.Window 2.12
import QtTest 1.2
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
        if(ui)ui.destroy()
        var component=Qt.createComponent("qrc:/UILoader.qml")
        compare(component.status,Component.Ready,component.errorString())
        ui=component.createObject(renderWindow.contentItem)
        verify(ui!==null,component.errorString())
        wait(400)
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
        verify(Models.Settings.vars.sosdEnabled===true,"Fixture must enable the BactoSwitch")
        verify(Models.Status.vars.sosd_connected==="1","Fixture must present a connected BactoSwitch")
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
        tryVerify(function(){return findText(ui,"802")!==null},5000,"Fixture flow must be shown")
        snapshot("control-panel-all-open")
        // Teaching state in the in-memory status model only: valve 4 open, single-line flow.
        Models.Status.vars.sosd_status_valve_output_state=8
        Models.Status.vars.sosd_measure_flow_mlpermin=326
        Models.Status.varsChanged()
        wait(300)
        snapshot("control-panel-single-valve")
    }
}
