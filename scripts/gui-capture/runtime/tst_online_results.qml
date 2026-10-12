import QtQuick 2.12
import QtQuick.Window 2.12
import QtTest 1.2
import "qrc:/models" as Models

TestCase {
    id: capture
    name: "OnlineResultsCapture"
    when: windowShown
    visible: true
    width: 800; height: 480
    property var ui: null
    property var http: Models.HTTPRequestController
    property var socket: Models.WebSocketController
    property var requests: []
    readonly property var screen: ui ? findChild(ui,"screenLoader").item : null
    readonly property var modal: ui ? findChild(ui,"modalLoader").item : null
    readonly property string screenSource: ui ? findChild(ui,"screenLoader").source.toString() : ""
    readonly property string outputRoot: decodeURIComponent(Qt.resolvedUrl("../../../output/gui-capture/online-results/native").toString().replace(/^file:\/\//,""))
    SignalSpy { id: signedIn; target: capture.http; signalName: "loggedIn" }
    SignalSpy { id: statusLoaded; target: capture.http; signalName: "statusReceived" }
    SignalSpy { id: settingsLoaded; target: capture.http; signalName: "settingsReceived" }
    SignalSpy { id: resultsLoaded; target: capture.http; signalName: "dataReceived" }
    SignalSpy { id: connected; target: capture.socket; signalName: "open" }
    Connections {
        target: NetworkRequests
        onSent: {
            var value=body.toString()
            verify(value.length===0,"Capture must submit no settings, RPC or hardware request")
            requests.push({path:path,body:value})
        }
    }
    Window {
        id: renderWindow
        title: "BactoSense Online result documentation capture"
        width: 800; height: 480; visible: true
        flags: Qt.Window | Qt.WindowStaysOnTopHint
    }
    function receive(spy,request){spy.clear();request();tryCompare(spy,"count",1,15000)}
    function findType(item,type,hidden) {
        if(!item)return null
        if((hidden || item.visible) && item.toString().indexOf(type)===0)return item
        var children=item.children || []
        for(var i=0;i<children.length;++i){var found=findType(children[i],type,hidden);if(found)return found}
        return null
    }
    function findText(item,text,type) {
        if(!item)return null
        if(item.visible && item.text===text && (!type || item.toString().indexOf(type)===0))return item
        var children=item.children || []
        for(var i=0;i<children.length;++i){var found=findText(children[i],text,type);if(found)return found}
        return null
    }
    function render() {
        renderWindow.raise();renderWindow.requestActivate()
        ui.opacity=0.999;wait(20);ui.opacity=1
        verify(waitForRendering(ui,5000),"Current production Cocoa frame must render")
    }
    function click(item){verify(item!==null && item.visible,"Missing production control");render();mouseClick(item,item.width/2,item.height/2);wait(350)}
    function bounds(item){var point=item.mapToItem(ui,0,0);return [point.x,point.y,item.width,item.height]}
    function tree(item,objects,depth) {
        if(!item || depth>18)return
        if(item.visible && item.width>0 && item.height>0){
            var b=bounds(item)
            objects.push({type:item.toString().split("(")[0],name:item.objectName || "",text:item.text ? item.text.toString():"",
                x:b[0],y:b[1],width:b[2],height:b[3],source:item.source ? item.source.toString():"",state:item.state || ""})
        }
        var children=item.children || []
        for(var i=0;i<children.length;++i)tree(children[i],objects,depth+1)
    }
    function save(locale,state) {
        wait(300);render()
        var objects=[];tree(ui,objects,0)
        console.log("ONLINE_RESULT_TREE "+locale+" "+state+" "+JSON.stringify(objects))
        var done=false
        ui.grabToImage(function(result){done=result.saveToFile(outputRoot+"/"+locale+"/"+state+".png")},Qt.size(1600,960))
        tryVerify(function(){return done},10000,state)
    }
    function initTestCase() {
        Models.System.saved_port_web=":"+Integration.port
        receive(signedIn,function(){http.login("admin","")})
        receive(statusLoaded,function(){http.status()})
        receive(settingsLoaded,function(){http.settings()})
        receive(resultsLoaded,function(){http.getData()})
        Models.Protocols.setBucket("auto")
        Models.Data.current_date_filter_bucket=""
        Models.Data.removeAllKeyFilters();Models.Data.resetDatesAndIndex()
        receive(connected,function(){socket.openSocket()})
    }
    function test_results_data() {
        return [{tag:"en",index:0,name:"en-US"},{tag:"de",index:2,name:"de-DE"},{tag:"fr",index:1,name:"fr-FR"},
                {tag:"it",index:3,name:"it-IT"},{tag:"es",index:4,name:"es-ES"}]
    }
    function test_results(row) {
        Models.System.language_index=row.index;Models.System.mode="auto"
        Models.System.hasShownOnlineModePrompt=true
        Models.System.cloudModalSuppressUntil=new Date(Date.now()+86400000)
        Models.System.updateModalSuppressUntil=new Date(Date.now()+86400000)
        Translator.selectLanguage(row.name);Models.Dico.updateString()
        var component=Qt.createComponent("qrc:/UILoader.qml")
        compare(component.status,Component.Ready,component.errorString())
        ui=component.createObject(renderWindow.contentItem);verify(ui!==null,component.errorString())
        findChild(ui,"navigationHost").modalSource=""
        findChild(ui,"navigationHost").navigateTo("qrc:/controllers/globalScreens/SingleResultScreen.qml",true)
        tryVerify(function(){return screenSource.indexOf("SingleResultScreen.qml")>=0},10000)
        var plot=findType(screen,"ResultPrimaryPlotView",true)
        verify(plot!==null,"Real result plot must be instantiated")
        var selected=-1;var fallback=-1
        for(var i=0;i<Models.Data.filtered_vars.length;++i){
            var candidate=Models.Data.filtered_vars[i]
            if(candidate.mode!=="auto" || candidate.gateType!=="TCC" || !candidate.fl1Fl2Url)continue
            Models.Data.data_index=i;wait(60)
            if(plot.dataModel.hasNeighborContextPlot){
                if(fallback<0)fallback=i
                if(plot.dataModel.hasAlarm){selected=i;break}
            }
        }
        if(selected<0)selected=fallback
        verify(selected>=0,"Shipped Online TCC record needs genuine neighboring results")
        Models.Data.data_index=selected;wait(400)
        var result=JSON.parse(JSON.stringify(Models.Data.filtered_vars[selected]))
        verify(result.mode==="auto" && result.gateType==="TCC")
        verify(plot.visible && plot.dataModel.neighborContextPoints.length>=3)
        var plotMouse=findType(plot,"QQuickMouseArea")
        var status=findType(screen,"StatusIndicator")
        var evidence={locale:row.tag,selectedResult:result,index:selected,mode:Models.System.mode,bucket:Models.Protocols.getBucket(),
            source:screenSource,plotBounds:bounds(plot),plotMouseAreaBounds:bounds(plotMouse),
            canvasBounds:bounds(findChild(plot,"neighborContextCanvas")),neighbors:plot.dataModel.neighborContextPoints,
            status:{bounds:bounds(status),title:status.title,level:status.level,hasAlarm:plot.dataModel.hasAlarm,
                hasWarning:plot.dataModel.hasWarning,primaryActionText:status.primaryActionText,secondaryActionText:status.secondaryActionText}}
        save(row.tag,"online-result-detail")
        if(plot.dataModel.hasAlarm){
            click(status)
            tryVerify(function(){return modal!==null && findChild(ui,"modalLoader").source.toString().indexOf("ModalAlarms.qml")>=0},5000)
            var statusObjects=[];tree(modal,statusObjects,0)
            evidence.status.popupSource=findChild(ui,"modalLoader").source.toString()
            evidence.status.popupObjects=statusObjects
            click(findChild(modal,"alarmModalCloseButton"))
            tryVerify(function(){return modal===null},5000)
        }
        click(findChild(ui,"resultPrimaryModuleInfo"))
        tryVerify(function(){return modal!==null && findChild(ui,"metricsPlotPreview")!==null},5000)
        var preview=findChild(ui,"metricsPlotPreview")
        var previewImage=findType(preview,"QQuickImage")
        verify(previewImage!==null,"The real metrics preview image must exist")
        tryCompare(previewImage,"status",Image.Ready,15000)
        save(row.tag,"online-result-metrics")
        evidence.metricsPlotBounds=bounds(preview);evidence.metricsPlotSource=previewImage.source.toString();evidence.metricsPlotReady=true
        click(preview)
        tryVerify(function(){return modal!==null && findChild(ui,"zoomImage")!==null},5000)
        var zoom=findChild(ui,"zoomImage");tryCompare(zoom,"status",Image.Ready,15000)
        save(row.tag,"online-result-dotplot")
        evidence.dotplotBounds=bounds(zoom);evidence.dotplotSource=zoom.source.toString();evidence.dotplotReady=true
        click(findChild(modal,"modalCloseButton"))
        tryVerify(function(){return modal===null},5000)
        compare(Models.Data.filtered_vars[Models.Data.data_index].timestamp,result.timestamp)
        click(plotMouse)
        tryVerify(function(){return screenSource==="qrc:/controllers/autoScreens/AutoMainScreen.qml"},10000)
        evidence.plotTouchDestination=screenSource
        var selector=findChild(ui,"autoChartTimeSelector")
        verify(selector!==null,"Actual Online chart time selector must exist")
        selector.selectAllData();selector.timeClicked(3)
        var model=findChild(ui,"autoFullChartModel");var view=findChild(ui,"autoFullChartView")
        tryVerify(function(){return model.dataLength>3 && view.activeMeasurementSeriesKeys.length>0},10000)
        var flickable=findChild(ui,"autoFullChartFlickable")
        flickable.contentX=Math.max(model.lastResultPosition*flickable.contentWidth-view.desiredWidth,0)
        wait(700);save(row.tag,"online-chart-after-touch")
        evidence.chart={points:model.dataLength,series:view.activeMeasurementSeriesKeys,minDate:model.minDate,maxDate:model.maxDate}
        evidence.requests=requests
        console.log("ONLINE_RESULT_EVIDENCE "+JSON.stringify(evidence))
    }
}
