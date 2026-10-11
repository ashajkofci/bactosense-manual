import QtQuick 2.12
import QtQuick.Window 2.12
import QtTest 1.2
import "qrc:/models" as Models

TestCase {
    id: capture
    name: "SchedulerCapture"
    when: windowShown
    visible: true
    width: 800
    height: 480
    property var ui: null
    property var http: Models.HTTPRequestController
    property var socket: Models.WebSocketController
    property var requests: []
    readonly property var screen: ui ? findChild(ui,"screenLoader").item : null
    readonly property string screenSource: ui ? findChild(ui,"screenLoader").source.toString() : ""
    readonly property string outputRoot: decodeURIComponent(Qt.resolvedUrl("../../../output/gui-capture/scheduler/native")
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
            verify(!(path==="/api/settings" && value.length>0),"No settings save is allowed")
            verify(path.indexOf("/api/run")!==0 && path.indexOf("/api/clear")!==0
                   && path.indexOf("/api/reset")!==0,"No hardware action is allowed")
            requests.push({path:path,body:value})
        }
    }
    Window {
        id: renderWindow
        title: "BactoSense advanced scheduler documentation capture"
        width: 800; height: 480
        visible: true
        flags: Qt.Window | Qt.WindowStaysOnTopHint
    }
    function receive(spy,request) { spy.clear();request();tryCompare(spy,"count",1,15000) }
    function findProperty(item,property,value,type) {
        if(!item)return null
        if(item.visible && item[property]!==undefined && item[property]===value
           && (!type || item.toString().indexOf(type)===0))return item
        var children=item.children || []
        for(var i=0;i<children.length;++i){var found=findProperty(children[i],property,value,type);if(found)return found}
        return null
    }
    function findType(item,type) {
        if(!item)return null
        if(item.visible && item.toString().indexOf(type)===0)return item
        var children=item.children || []
        for(var i=0;i<children.length;++i){var found=findType(children[i],type);if(found)return found}
        return null
    }
    function render() {
        renderWindow.raise();renderWindow.requestActivate()
        ui.opacity=0.999;wait(20);ui.opacity=1
        verify(waitForRendering(ui,5000),"Cocoa rendering is required")
    }
    function click(item) {
        verify(item!==null && item.visible,"Missing production control")
        render();mouseClick(item,item.width/2,item.height/2);wait(300)
    }
    function tree(item,objects,depth) {
        if(!item || depth>18)return
        if(item.visible && item.width>0 && item.height>0){
            var point=item.mapToItem(ui,0,0)
            objects.push({type:item.toString().split("(")[0],name:item.objectName || "",
                text:item.text ? item.text.toString():"",x:point.x,y:point.y,width:item.width,height:item.height,
                source:item.source ? item.source.toString():"",state:item.state || ""})
        }
        var children=item.children || []
        for(var i=0;i<children.length;++i)tree(children[i],objects,depth+1)
    }
    function snapshot(locale,state) {
        render();wait(200)
        var objects=[];tree(ui,objects,0)
        console.log("SCHEDULER_TREE "+locale+" "+state+" "+JSON.stringify(objects))
        var complete=false
        ui.grabToImage(function(result){complete=result.saveToFile(outputRoot+"/"+locale+"/"+state+".png")},Qt.size(1600,960))
        tryVerify(function(){return complete},10000,"Native scheduler image")
    }
    function initTestCase() {
        Models.System.saved_port_web=":"+Integration.port
        receive(signedIn,function(){http.login("admin","")})
        receive(statusLoaded,function(){http.status()})
        receive(settingsLoaded,function(){http.settings()})
        receive(resultsLoaded,function(){http.getData()})
        Models.Protocols.setBucket("auto")
        receive(connected,function(){socket.openSocket()})
        compare(http.level,0)
    }
    function test_scheduler_data() {
        return [{tag:"en",index:0,name:"en-US",sample:"Routine monitoring"},
                {tag:"de",index:2,name:"de-DE",sample:"Routinekontrolle"},
                {tag:"fr",index:1,name:"fr-FR",sample:"Surveillance de routine"},
                {tag:"it",index:3,name:"it-IT",sample:"Monitoraggio di routine"},
                {tag:"es",index:4,name:"es-ES",sample:"Control rutinario"}]
    }
    function test_scheduler(row) {
        Models.System.language_index=row.index
        Models.System.mode="auto"
        Models.System.cloudModalSuppressUntil=new Date(Date.now()+86400000)
        Models.System.updateModalSuppressUntil=new Date(Date.now()+86400000)
        Translator.selectLanguage(row.name);Models.Dico.updateString()
        // Teaching fixture in the unsaved form; production resources stay unchanged.
        var args=JSON.parse(JSON.stringify(Models.Settings.vars.autoArgs))
        args.name=row.sample
        args.protocol="analysis_water_backflush"
        args.gates="icc_default"
        Models.Settings.tempAutoArgs=args
        var weekly={rules:[{id:"manual-example",name:row.sample,
            protocol:args.protocol,gates:args.gates,useSOSD:false,sosdStreamId:0,
            intervalMinutes:60,intervalOffsetMinutes:0,fromHour:8,toHour:16,weekdays:[0,1,2,3,4]}]}
        // Next initializes the draft from the in-memory settings model. This
        // fixture changes that model only, never the API's saved settings.
        Models.Settings.vars.weeklyAutoSchedule=weekly
        Models.Settings.vars.autoInterval=0
        Models.Settings.tempWeeklyAutoSchedule=weekly
        var component=Qt.createComponent("qrc:/UILoader.qml")
        compare(component.status,Component.Ready,component.errorString())
        ui=component.createObject(renderWindow.contentItem)
        verify(ui!==null,component.errorString())
        Models.Protocols.setBucket("auto")
        Models.Protocols.updateString()
        Models.Protocols.setNextProtocol(args.protocol)
        Models.Protocols.setNewName(row.sample)
        Models.Protocols.setNewGates(args.gates)
        findChild(ui,"navigationHost").navigateTo("qrc:/controllers/globalScreens/HomeScreen.qml",true)
        tryVerify(function(){return screenSource.indexOf("HomeScreen.qml")>=0},10000)
        wait(400)
        click(findProperty(ui,"label",Models.Dico.text.Start,"HomeBarActionButton"))
        tryVerify(function(){return screenSource.indexOf("AutoInstructionWizardScreen.qml")>=0},10000)
        click(findChild(ui,"actionBarButton1"))
        compare(screen.state,"schedule")
        var mode=findType(screen,"ScheduleModeView")
        verify(mode!==null && mode.isAdvancedMode,"The prepared weekly draft opens the real editor")
        click(findChild(ui,"actionBarButton0"))
        verify(!mode.isAdvancedMode)
        snapshot(row.tag,"advanced-scheduler-select")
        click(findChild(ui,"scheduleAdvancedMode"))
        verify(mode.isAdvancedMode)
        snapshot(row.tag,"advanced-scheduler-rule")
        var fields=findType(findType(screen,"WeeklyScheduleEditorView"),"QQuickFlickable")
        verify(fields!==null,"Real custom-fields scroll area")
        render();mouseWheel(fields,fields.width/2,fields.height/2,0,-240);wait(400)
        snapshot(row.tag,"advanced-scheduler-range")
        // This is the actual production preview request; it does not save a schedule.
        click(findChild(ui,"actionBarButton3"))
        tryVerify(function(){return mode.isPreviewMode},15000,"Server-generated schedule preview")
        var entry=findProperty(screen,"text","08:00 "+row.sample,"ThemedButton")
        if(entry===null)entry=findType(findType(screen,"WeeklyScheduleEditorView"),"ThemedButton")
        click(entry)
        snapshot(row.tag,"advanced-scheduler-preview")
        console.log("SCHEDULER_EVIDENCE "+JSON.stringify({locale:row.tag,screen:screenSource,
            fixture:Models.Settings.tempWeeklyAutoSchedule,preview:mode.getWeeklyAutoSchedule(),
            requests:requests,scheduleSaved:false,startClicked:false}))
    }
}
