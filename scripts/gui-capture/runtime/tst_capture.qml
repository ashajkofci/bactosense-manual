import QtQuick 2.12
import QtQuick.Window 2.12
import QtTest 1.2
import "qrc:/models" as Models

TestCase {
    id: capture
    name: "ManualGuiCapture"
    when: windowShown
    visible: true
    width: 800
    height: 480
    property var ui: null
    property string localeCode: "en"
    property string outputRoot: decodeURIComponent(Qt.resolvedUrl("../../../output/gui-capture/native")
                                                 .toString().replace(/^file:\/\//,""))
    property var http: Models.HTTPRequestController
    property var socket: Models.WebSocketController
    readonly property var screen: ui ? findChild(ui, "screenLoader").item : null
    readonly property var modal: ui ? findChild(ui, "modalLoader").item : null
    SignalSpy { id: signedIn; target: capture.http; signalName: "loggedIn" }
    SignalSpy { id: statusLoaded; target: capture.http; signalName: "statusReceived" }
    SignalSpy { id: settingsLoaded; target: capture.http; signalName: "settingsReceived" }
    SignalSpy { id: resultsLoaded; target: capture.http; signalName: "dataReceived" }
    SignalSpy { id: connected; target: capture.socket; signalName: "open" }
    SignalSpy { id: timezoneTreeLoaded; target: capture.http; signalName: "timezoneTreeReceived" }
    SignalSpy { id: timezoneCurrentLoaded; target: capture.http; signalName: "timezoneCurrentReceived" }
    // Cocoa stops drawing fully occluded windows. Keep this temporary capture
    // window exposed while the manual/browser review runs in parallel.
    Window {
        id: renderWindow
        title: "BactoSense manual capture"
        width:800;height:480
        visible:true
        flags:Qt.Window | Qt.WindowStaysOnTopHint
    }

    function receive(spy, request) {
        spy.clear(); request(); tryCompare(spy, "count", 1, 15000)
    }
    function localeRows() {
        return [{tag:"en",index:0,name:"en-US"}, {tag:"fr",index:1,name:"fr-FR"},
                {tag:"de",index:2,name:"de-DE"}, {tag:"it",index:3,name:"it-IT"},
                {tag:"es",index:4,name:"es-ES"}]
    }
    function createUi(row) {
        localeCode = row.tag
        Models.System.language_index = row.index
        Models.System.cloudModalSuppressUntil=new Date(Date.now()+86400000)
        Models.System.updateModalSuppressUntil=new Date(Date.now()+86400000)
        Translator.selectLanguage(row.name)
        Models.Dico.updateString()
        if (ui) ui.destroy()
        var component = Qt.createComponent("qrc:/UILoader.qml")
        compare(component.status, Component.Ready, component.errorString())
        ui = component.createObject(renderWindow.contentItem)
        verify(ui !== null, component.errorString())
        wait(300)
    }
    function navigate(path) {
        findChild(ui,"navigationHost").modalSource = ""
        findChild(ui,"navigationHost").navigateTo("qrc:/controllers/" + path, true)
        tryVerify(function(){return screen !== null}, 10000, path)
        wait(550)
        renderFrame(ui)
    }
    function click(name, parent) {
        var item = findChild(parent || ui, name)
        verify(item !== null, "Missing control " + name)
        verify(item.visible, "Hidden control " + name)
        renderFrame(item)
        mouseClick(item,item.width/2,item.height/2)
        wait(650)
    }
    function tree(item, result, depth) {
        if (!item || depth > 15) return
        if (item.visible && item.width > 0 && item.height > 0) {
            var point = item.mapToItem(ui,0,0)
            result.push({type:item.toString().split("(")[0],name:item.objectName || "",
                text:item.text ? item.text.toString() : "",x:point.x,y:point.y,
                width:item.width,height:item.height,source:item.source ? item.source.toString():"",
                state:item.state || ""})
        }
        var children = item.children || []
        for (var i=0;i<children.length;++i) tree(children[i],result,depth+1)
    }
    function findType(item,type) {
        if(!item)return null
        if(item.toString().indexOf(type)===0)return item
        var children=item.children || []
        for(var i=0;i<children.length;++i){
            var found=findType(children[i],type)
            if(found)return found
        }
        return null
    }
    function renderFrame(item) {
        // A static Qt Quick window need not produce another frame unless dirty.
        // Restore the exact opacity before the renderer runs, requesting a fresh
        // frame without changing the image being captured.
        ui.opacity=0.999
        ui.opacity=1
        verify(waitForRendering(item),"The real capture window did not render")
    }
    function save(name) {
        wait(300)
        renderFrame(ui)
        var objects=[]; tree(ui,objects,0)
        console.log("CAPTURE_TREE " + localeCode + "/" + name + " " + JSON.stringify(objects))
        var complete=false
        ui.grabToImage(function(result){
            complete=result.saveToFile(outputRoot+"/"+localeCode+"/"+name+".png")
        },Qt.size(1600,960))
        tryVerify(function(){return complete},10000,name)
        console.log("CAPTURE_SAVED " + localeCode + "/" + name)
    }
    function initTestCase() {
        Models.System.saved_port_web = ":" + Integration.port
        Models.System.language_index=0
        receive(signedIn,function(){http.login("admin","")})
        receive(statusLoaded,function(){http.status()})
        receive(settingsLoaded,function(){http.settings()})
        receive(resultsLoaded,function(){http.getData()})
        receive(timezoneTreeLoaded,function(){http.getTimezoneTree()})
        receive(timezoneCurrentLoaded,function(){http.getTimezoneCurrent()})
        verify(Models.System.timezone_tree.Europe !== undefined, "Real timezone tree must load")
        Models.Protocols.setBucket("manual")
        Models.Data.removeAllKeyFilters();Models.Data.resetDates()
        receive(connected,function(){socket.openSocket()})
    }
    function test_generic_data(){return localeRows()}
    function test_generic(row) {
        createUi(row)
        Models.System.mode="manual"
        Models.Protocols.setBucket("manual")
        var states=[
          ["home","globalScreens/HomeScreen.qml"],
          ["settings-menu","settingsScreens/SettingsMenuHomeScreen.qml"],
          ["mode-chooser","settingsScreens/ModeSelectionScreen.qml"],
          ["system-services","settingsScreens/SettingsSystemServiceScreen.qml"],
          ["digital-inputs","settingsScreens/SettingsDigitalInputsScreen.qml"],
          ["analog-outputs","settingsScreens/SettingsAnalogOutputsScreen.qml"],
          ["digital-outputs","settingsScreens/SettingsDigitalOutputsScreen.qml"],
          ["test-outputs","settingsScreens/SettingsTestOutputsScreen.qml"],
          ["export-all","globalScreens/ExportAllFolderNameScreen.qml"],
          ["import-config","globalScreens/ImportConfigScreen.qml"],
          ["alarms","settingsScreens/SettingsAlarmsScreen.qml"],
          ["network","settingsScreens/SettingsNetworkScreen.qml"],
          ["date-time","settingsScreens/SettingsDateTimeScreen.qml"],
          ["time-sync","settingsScreens/SettingsTimeSync.qml"],
          ["results-list","globalScreens/ResultListScreen.qml"],
          ["gates-list","settingsScreens/SettingsGateSettingsScreen.qml"],
          ["intervention","settingsScreens/SettingsInterventionScreen.qml"],
          ["intervention-info","settingsScreens/SettingsInterventionInfoScreen.qml"],
          ["errors-list","settingsScreens/SettingsErrorLogScreen.qml"],
          ["warnings-list","settingsScreens/SettingsWarningLogScreen.qml"],
          ["self-check","settingsScreens/SettingsSelfCheckScreen.qml"],
          ["system-info","settingsScreens/SettingsSystemInfoScreen.qml"],
          ["login","globalScreens/LoginScreen.qml"]
        ]
        for(var i=0;i<states.length;++i){
            navigate(states[i][1])
            if(states[i][0]==="system-services"){
                // Ordinary instrument defaults in an unsaved production form.
                screen.port_web=":80";screen.port_modbus=":502"
            }
            if(states[i][0]==="digital-inputs"){
                Models.Settings.tempDigitalInputs.digitalInputsEnabled=true
                var inputs=Models.Settings.tempDigitalInputs[screen.digitalInputsType]
                for(var inputKey in inputs)inputs[inputKey].enabled=false
                var input=screen.currentInput
                input.enabled=true;input.autoMode=true;input.autoInterval=60
                input.autoArgs.name="Water sample"
                input.autoArgs.protocol="analysis_water"
                input.autoArgs.gates="icc_default"
                Models.Settings.updateTempDigitalInputs()
                wait(300)
                verify(screen.areGatesValid(), "Prepared digital input must use valid ICC gates")
            }
            if(states[i][0]==="export-all"){
                tryVerify(function(){return Models.System.list_usb.length>0},10000,
                          "Product USB hardware fixture must populate the list")
                verify(modal===null,"USB listing must not show an error modal")
                Models.System.usb_index=0
                Models.System.folderName="BactoSense-export"
                Models.System.isCustomFolderName=true
            }
            if(states[i][0]==="self-check"){
                verify(screen.latestResult.success===true,
                       "Shipped self-check fixture must be displayed")
            }
            save(states[i][0])
        }
        navigate("settingsScreens/SettingsAlarmsScreen.qml")
        var alarm=Models.Settings.tempAlarms[screen.alarmsKeys[screen.currentIndex]]
        alarm.source="Cartridge Remaining";alarm.condition="<";alarm.threshold=0.2
        Models.Settings.updateTempAlarms()
        screen.showCheckList(screen.metricsAndComputationKeys,
              Models.Settings.tempAlarms[screen.alarmsKeys[screen.currentIndex]].source)
        wait(300)
        var sourcesGrid=findType(modal,"QQuickGridView")
        verify(sourcesGrid!==null,"Missing actual source grid")
        sourcesGrid.positionViewAtIndex(modal.list.length-1,GridView.End)
        wait(300);save("alarm-sources")
        navigate("settingsScreens/SettingsInterventionScreen.qml")
        screen.expandValveType=true
        wait(700);save("intervention-valve")
        var errors=Models.Errors.filtered_vars
        console.log("FIXTURE_ERRORS " + JSON.stringify(errors))
        var capturedErrors={}
        for(i=0;i<errors.length;++i){
            if(!capturedErrors[errors[i].name] &&
               (errors[i].name==="CartridgeMissingError" || errors[i].name==="MixerInflationError"
                || errors[i].name==="ErrorsCleared")){
                Models.Errors.data_index=i
                navigate("settingsScreens/SettingsSingleErrorScreen.qml")
                save("error-detail-"+errors[i].name)
                capturedErrors[errors[i].name]=true
            }
        }
        verify(capturedErrors.MixerInflationError,"Need genuine E15 non-critical teaching example")
        var warnings=Models.Warnings.filtered_vars
        console.log("FIXTURE_WARNINGS " + JSON.stringify(warnings))
        if(warnings.length){
            var warningIndex=-1
            for(i=0;i<warnings.length;++i){
                var resultIndex=Models.Data.getIndex(warnings[i].bucket,warnings[i].measurementId)
                if(warnings[i].name==="HighOffsetSSC" && resultIndex>=0
                   && Models.Data[warnings[i].bucket].vars[resultIndex].fl1SscPath) {
                    warningIndex=i;break
                }
            }
            verify(warningIndex>=0,"Need genuine W04 teaching example")
            Models.Warnings.data_index=warningIndex
            navigate("settingsScreens/SettingsSingleWarningScreen.qml")
            save("warning-detail")
        }
    }
    function test_scientific_data(){return localeRows()}
    function test_scientific(row) {
        createUi(row)
        Models.System.mode="manual"
        Models.Protocols.setBucket("manual")
        Models.Data.removeAllKeyFilters();Models.Data.resetDates()
        var index=-1
        for(var i=0;i<Models.Data.filtered_vars.length;++i){
            if(Models.Data.filtered_vars[i].gateType==="ICC" && Models.Data.filtered_vars[i].warnings
               && Models.Data.filtered_vars[i].warnings.length) { index=i;break }
        }
        verify(index>=0,"Demo manual archive needs an ICC record")
        Models.Data.data_index=index
        console.log("FIXTURE_RESULT " + JSON.stringify(Models.Data.filtered_vars[index]))
        navigate("globalScreens/SingleResultScreen.qml")
        save("result-detail")
        click("resultPrimaryModuleInfo")
        tryVerify(function(){return modal!==null},5000)
        save("result-metrics")
        click("metricsPlotPreview")
        tryVerify(function(){return modal!==null && findChild(ui,"zoomImage")!==null},5000)
        var image=findChild(ui,"zoomImage")
        tryCompare(image,"status",Image.Ready,15000)
        save("result-dotplot")
        var zoomModel=findChild(ui,"modalZoomModel")
        verify(zoomModel!==null,"Missing production plot model")
        if(zoomModel.hasSsc){
            click("zoomNextPlot")
            tryCompare(findChild(ui,"zoomImage"),"status",Image.Ready,15000)
            save("result-ssc-plot")
        }
        click("zoomNextPlot")
        tryCompare(findChild(ui,"zoomImage"),"status",Image.Ready,15000)
        save("result-histogram")
        navigate("settingsScreens/SettingsGateSettingsScreen.qml")
        var templateKey="tcc_template"
        Models.Settings.gates_to_edit=templateKey
        Models.Settings.setTempGates(Models.Settings.gateTemplate[templateKey])
        verify(Models.Settings.tempGates.gates.tcc.points.length===4,
               "TCC teaching gate must have four genuine template vertices")
        navigate("globalScreens/GateWizardScreen.qml")
        save("gate-name")
        click("actionBarButton2")
        tryVerify(function(){return findChild(ui,"gateEditor")!==null},5000)
        save("gate-polygon")
        click("actionBarButton1")
        tryVerify(function(){return modal!==null},5000)
        wait(700);save("gate-preview")
        findChild(ui,"navigationHost").modalSource=""
        click("actionBarButton2")
        save("gate-hna")
        navigate("settingsScreens/SettingsGateSettingsScreen.qml")
        Models.Settings.gates_to_edit="icc_template"
        Models.Settings.setTempGates(Models.Settings.gateTemplate.icc_template)
        navigate("globalScreens/GateWizardScreen.qml")
        click("actionBarButton2")
        save("icc-gate-polygon")
        Models.Protocols.setBucket("auto");Models.System.mode="auto"
        Models.Data.current_date_filter_bucket=""
        Models.Data.removeAllKeyFilters();Models.Data.resetDates();Models.Data.updateChartValues()
        Models.System.selectedChartTimeSpan=3
        navigate("autoScreens/AutoMainScreen.qml")
        var timeSelector=findChild(ui,"autoChartTimeSelector")
        verify(timeSelector!==null,"Missing chart time selector")
        timeSelector.selectAllData()
        timeSelector.timeClicked(3)
        var chartModel=findChild(ui,"autoFullChartModel")
        var chartView=findChild(ui,"autoFullChartView")
        tryVerify(function(){return chartModel.dataLength>3 && chartModel.visibleSeriesKeys.length>0
                            && chartView.activeMeasurementSeriesKeys.length>0},10000,
                  "Real archive series must populate the online chart")
        wait(750)
        var chartFlickable=findChild(ui,"autoFullChartFlickable")
        verify(chartFlickable!==null,"Missing production chart date scroller")
        chartFlickable.contentX=Math.max(chartModel.lastResultPosition*chartFlickable.contentWidth
                                       -chartView.desiredWidth,0)
        wait(750)
        verify(chartModel.minDate.getTime()<=chartModel.chartValues.timestamps[chartModel.dataLength-1],
               "Chart must display the archive dates")
        console.log("FIXTURE_CHART " + JSON.stringify({series:chartView.activeMeasurementSeriesKeys,
                    points:chartModel.dataLength,timeSpan:chartModel.selectedChartTimeSpan,
                    minDate:chartModel.minDate,maxDate:chartModel.maxDate}))
        save("auto-dashboard")
        timeSelector.expand=true
        wait(1400)
        save("auto-chart-expanded")
    }
    function cleanupTestCase(){if(ui)ui.destroy()}
}
