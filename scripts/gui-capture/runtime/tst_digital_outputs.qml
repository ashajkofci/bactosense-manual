import QtQuick 2.12
import QtQuick.Window 2.12
import QtTest 1.2
import "qrc:/models" as Models

TestCase {
    id: capture
    name: "DigitalOutputsCapture"
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
    readonly property string outputRoot: decodeURIComponent(Qt.resolvedUrl("../../../output/gui-capture/digital-output/native")
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
                   && path.indexOf("/api/reset")!==0,"No hardware or error-clear action is allowed")
            requests.push({path:path,body:value})
        }
    }
    Window {
        id: renderWindow
        title: "BactoSense digital-output documentation capture"
        width: 800; height: 480
        visible: true
        flags: Qt.Window | Qt.WindowStaysOnTopHint
    }
    function receive(spy,request) {
        spy.clear();request();tryCompare(spy,"count",1,15000)
    }
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
        verify(waitForRendering(ui,5000),"Actual Cocoa rendering is required")
    }
    function click(item) {
        verify(item!==null && item.visible,"Missing production control")
        render();mouseClick(item,item.width/2,item.height/2);wait(300)
    }
    function clickMenu(suffix) {
        var menu=findType(screen,"MenuView")
        verify(menu!==null,"Production menu must be visible")
        var model=menu.menuButtonModel
        var index=-1
        for(var i=0;i<model.count;++i)if(model.get(i).screen.indexOf(suffix)>=0){index=i;break}
        verify(index>=0,"Missing production menu target "+suffix)
        click(findChild(ui,"menuButton"+index))
        tryVerify(function(){return screenSource.indexOf(suffix)>=0},10000,suffix)
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
    function initTestCase() {
        Models.System.saved_port_web=":"+Integration.port
        receive(signedIn,function(){http.login("admin","")})
        receive(statusLoaded,function(){http.status()})
        receive(settingsLoaded,function(){http.settings()})
        receive(resultsLoaded,function(){http.getData()})
        Models.Protocols.setBucket("manual")
        Models.Data.removeAllKeyFilters();Models.Data.resetDates()
        receive(connected,function(){socket.openSocket()})
        compare(http.level,0,"Use the shipped disposable Admin account")
    }
    function test_lower_list_data() {
        return [{tag:"en",index:0,name:"en-US"},{tag:"de",index:2,name:"de-DE"},
                {tag:"fr",index:1,name:"fr-FR"},{tag:"it",index:3,name:"it-IT"},
                {tag:"es",index:4,name:"es-ES"}]
    }
    function test_lower_list(row) {
        Models.System.language_index=row.index
        Models.System.mode="manual"
        Models.System.cloudModalSuppressUntil=new Date(Date.now()+86400000)
        Models.System.updateModalSuppressUntil=new Date(Date.now()+86400000)
        Translator.selectLanguage(row.name);Models.Dico.updateString()
        var component=Qt.createComponent("qrc:/UILoader.qml")
        compare(component.status,Component.Ready,component.errorString())
        ui=component.createObject(renderWindow.contentItem)
        verify(ui!==null,component.errorString())
        findChild(ui,"navigationHost").navigateTo("qrc:/controllers/globalScreens/HomeScreen.qml",true)
        tryVerify(function(){return screenSource.indexOf("HomeScreen.qml")>=0},10000)
        wait(400)
        // Show both shipped output assignments by enabling Alarm 2 only in the
        // unsaved form. The original API settings and all output values stay intact.
        Models.Settings.initializeTempAlarms()
        Models.Settings.tempAlarms["Alarm 2"].enabled=true
        Models.Settings.updateTempAlarms()
        Models.Settings.setEnabledAlarms()
        compare(Models.Settings.enabledAlarms.length,2)
        var settings=findProperty(ui,"label",Models.Dico.text.Settings,"HomeBarActionButton")
        click(settings)
        tryVerify(function(){return screenSource.indexOf("SettingsMenuHomeScreen.qml")>=0},10000)
        clickMenu("SettingsMenuAutoModeSettingsScreen.qml")
        clickMenu("SettingsDigitalOutputsScreen.qml")
        var list=findType(screen,"QQuickListView")
        verify(list!==null,"Production digital-output ListView must exist")
        compare(list.contentY,0)
        // Scroll through actual input events; do not position rows or draw a substitute.
        for(var i=0;i<12 && !list.atYEnd;++i){
            render();mouseWheel(list,200,list.height/2,0,-480);wait(250)
        }
        tryVerify(function(){return list.atYEnd && !list.moving},5000,"Real list must settle at its lower end")
        compare(list.contentY,286)
        compare(Models.Settings.hasTempDigitalOutputsChanges(),false)
        wait(300);render()
        var objects=[];tree(ui,objects,0)
        console.log("DIGITAL_OUTPUTS_TREE "+row.tag+" "+JSON.stringify(objects))
        console.log("DIGITAL_OUTPUTS_EVIDENCE "+JSON.stringify({locale:row.tag,screen:screenSource,
            scroll:{input:"mouseWheel",contentY:list.contentY,contentHeight:list.contentHeight,viewportHeight:list.height},
            unsavedAlarmEnable:{key:"Alarm 2",enabled:true},digitalOutputs:Models.Settings.tempDigitalOutputs,
            enabledAlarms:Models.Settings.enabledAlarms,alarms:Models.Settings.tempAlarms,requests:requests}))
        var complete=false
        ui.grabToImage(function(result){complete=result.saveToFile(outputRoot+"/"+row.tag+"/digital-outputs-lower.png")},Qt.size(1600,960))
        tryVerify(function(){return complete},10000,"Native output-row capture")
    }
}
