import QtQuick 2.12
import QtQuick.Window 2.12
import QtTest 1.2
import "qrc:/models" as Models

TestCase {
    id: capture
    name: "ActivationNavigationCapture"
    when: windowShown
    visible: true
    width: 800
    height: 480
    property var ui: null
    property string localeCode: "en"
    property var http: Models.HTTPRequestController
    property var socket: Models.WebSocketController
    property var requestRecords: []
    property string routeName: "bootstrap"
    readonly property var screen: ui ? findChild(ui, "screenLoader").item : null
    readonly property var modal: ui ? findChild(ui, "modalLoader").item : null
    readonly property string screenSource: ui ? findChild(ui, "screenLoader").source.toString() : ""
    property string outputRoot: decodeURIComponent(Qt.resolvedUrl("../../../output/gui-capture/activation/native")
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
            verify(!(path==="/api/settings" && value.indexOf("scientificPackageOptionKey")>=0),
                   "No activation request may be submitted")
            verify(path.indexOf("/api/run")!==0 && path.indexOf("/api/clear")!==0,
                   "Navigation must not execute measurement, maintenance or clearing")
            requestRecords.push({path:path,body:value,route:routeName})
        }
    }
    Window {
        id: renderWindow
        title: "BactoSense activation and navigation capture"
        width:800; height:480
        visible:true
        flags:Qt.Window | Qt.WindowStaysOnTopHint
    }

    function receive(spy, request) {
        spy.clear(); request(); tryCompare(spy,"count",1,15000)
    }
    function localeRows() {
        return [{tag:"en",index:0,name:"en-US"},{tag:"de",index:2,name:"de-DE"},
                {tag:"fr",index:1,name:"fr-FR"},{tag:"it",index:3,name:"it-IT"},
                {tag:"es",index:4,name:"es-ES"}]
    }
    function createUi(row) {
        localeCode=row.tag
        Models.System.mode="manual"
        Models.System.language_index=row.index
        Models.System.cloudModalSuppressUntil=new Date(Date.now()+86400000)
        Models.System.updateModalSuppressUntil=new Date(Date.now()+86400000)
        Translator.selectLanguage(row.name)
        Models.Dico.updateString()
        if(ui)ui.destroy()
        var component=Qt.createComponent("qrc:/UILoader.qml")
        compare(component.status,Component.Ready,component.errorString())
        ui=component.createObject(renderWindow.contentItem)
        verify(ui!==null,component.errorString())
        // Initial setup is the only direct navigation; every documented route
        // below is opened through real production mouse handlers.
        findChild(ui,"navigationHost").navigateTo("qrc:/controllers/globalScreens/HomeScreen.qml",true)
        tryVerify(function(){return screenSource.indexOf("HomeScreen.qml")>=0},10000)
        wait(500)
    }
    function findType(item,type) {
        if(!item)return null
        if(item.toString().indexOf(type)===0 && item.visible)return item
        var children=item.children || []
        for(var i=0;i<children.length;++i){var found=findType(children[i],type);if(found)return found}
        return null
    }
    function findProperty(item, property, value, type) {
        if(!item)return null
        if(item.visible && item[property]!==undefined && item[property]===value
           && (!type || item.toString().indexOf(type)===0))return item
        var children=item.children || []
        for(var i=0;i<children.length;++i){var found=findProperty(children[i],property,value,type);if(found)return found}
        return null
    }
    function renderFrame(item) {
        renderWindow.raise();renderWindow.requestActivate()
        ui.opacity=0.999;wait(20);ui.opacity=1
        verify(waitForRendering(ui,5000),"The native Cocoa window must render")
    }
    function clickItem(item) {
        verify(item!==null,"Missing real clickable production object")
        verify(item.visible,"Hidden production control")
        renderFrame(item)
        mouseClick(item,item.width/2,item.height/2)
        wait(350)
    }
    function clickName(name) {clickItem(findChild(ui,name))}
    function clickHomeAction(text) {
        var item=findProperty(ui,"label",text,"HomeBarActionButton")
        verify(item!==null,"Home action missing: "+text)
        clickItem(item)
    }
    function goHome() {
        if(modal!==null){
            var cancel=findProperty(modal,"text",Models.Dico.text.Cancel,"ModalZoomButton")
            if(!cancel)cancel=findProperty(modal,"text",Models.Dico.text.No)
            verify(cancel!==null,"Only cancellation is allowed for unexpected modals")
            clickItem(cancel)
        }
        if(screenSource.indexOf("globalScreens/HomeScreen.qml")<0)
            clickItem(findType(ui,"ToolBarCenter"))
        tryVerify(function(){return screenSource.indexOf("globalScreens/HomeScreen.qml")>=0},10000)
    }
    function openSettings() {
        goHome()
        clickHomeAction(Models.Dico.text.Settings)
        tryVerify(function(){return screenSource.indexOf("SettingsMenuHomeScreen.qml")>=0},10000)
    }
    function menuView() {
        var view=findType(screen,"MenuView")
        verify(view!==null,"No production MenuView at "+screenSource)
        return view
    }
    function menuEntries() {
        var model=menuView().menuButtonModel
        var entries=[]
        for(var i=0;i<model.count;++i){
            var row=model.get(i)
            var control=findChild(ui,"menuButton"+i)
            var button=findType(control,"MenuButtonView")
            var point=control.mapToItem(ui,0,0)
            entries.push({index:i,text:row.text,screen:row.screen || "",bucket:row.bucket || "",
                levelMax:row.level_max===undefined?2:row.level_max,disabled:button.disabled,
                bounds:[point.x,point.y,control.width,control.height]})
        }
        return entries
    }
    function menuIndex(suffix) {
        var entries=menuEntries()
        for(var i=0;i<entries.length;++i)if(entries[i].screen.indexOf(suffix)>=0)return i
        fail("No real menu target "+suffix+" at "+screenSource+": "+JSON.stringify(entries))
        return -1
    }
    function record(name, detail) {
        var objects=[];tree(ui,objects,0)
        var evidence={name:name,locale:localeCode,role:http.level,mode:Models.System.mode,
            screen:screenSource,header:screen ? screen.ib_text : "",actions:screen ? screen.ab_texts : [],
            scientificPackage:Models.Settings.hasScientificPackage,
            managementPackage:Models.Settings.hasManagementPackage,
            detail:detail || {},objects:objects}
        if(findType(screen,"MenuView"))evidence.menu=menuEntries()
        console.log("NAVIGATION_EVIDENCE "+JSON.stringify(evidence))
    }
    function clickMenu(suffix, bucket) {
        var model=menuView().menuButtonModel
        var index=-1
        for(var i=0;i<model.count;++i){
            if(model.get(i).screen.indexOf(suffix)>=0 && (!bucket || model.get(i).bucket===bucket)){index=i;break}
        }
        verify(index>=0,"Missing menu target "+suffix+" bucket "+(bucket || ""))
        var entry=menuEntries()[index]
        var before=screenSource
        clickName("menuButton"+index)
        if(entry.disabled)compare(screenSource,before,"Restricted real mouse click must not navigate")
        else tryVerify(function(){return screenSource.indexOf(suffix)>=0},10000,suffix)
        return entry
    }
    function tree(item,result,depth) {
        if(!item || depth>18)return
        if(item.visible && item.width>0 && item.height>0){
            var point=item.mapToItem(ui,0,0)
            result.push({type:item.toString().split("(")[0],name:item.objectName || "",
                text:item.text ? item.text.toString():"",label:item.label ? item.label.toString():"",
                x:point.x,y:point.y,width:item.width,height:item.height,
                source:item.source ? item.source.toString():"",state:item.state || "",
                disabled:item.disabled===undefined?null:item.disabled,
                selected:item.selected===undefined?null:item.selected,
                levelMax:item.levelMax===undefined?null:item.levelMax})
        }
        var children=item.children || []
        for(var i=0;i<children.length;++i)tree(children[i],result,depth+1)
    }
    function save(name) {
        wait(350);renderFrame(ui)
        var objects=[];tree(ui,objects,0)
        console.log("ACTIVATION_TREE "+localeCode+"/"+name+" "+JSON.stringify(objects))
        var complete=false
        ui.grabToImage(function(result){complete=result.saveToFile(outputRoot+"/"+localeCode+"/"+name+".png")},Qt.size(1600,960))
        tryVerify(function(){return complete},10000,name)
        record(name,{capture:name})
    }
    function initTestCase() {
        Models.System.saved_port_web=":"+Integration.port
        Models.System.language_index=0
        receive(signedIn,function(){http.login("admin","")})
        receive(statusLoaded,function(){http.status()})
        receive(settingsLoaded,function(){http.settings()})
        receive(resultsLoaded,function(){http.getData()})
        Models.Protocols.setBucket("manual")
        Models.Data.removeAllKeyFilters();Models.Data.resetDates()
        receive(connected,function(){socket.openSocket()})
        verify(Models.Status.isV3,"Current Scientific Package requires V3")
        verify(!Models.Settings.hasScientificPackage,"No Scientific licence activation during capture")
        verify(Models.Settings.hasManagementPackage,"Keep the shipped Management demo flag for role/audit navigation")
        Models.System.mode="manual"
    }
    function test_activation_data(){return localeRows()}
    function test_activation(row) {
        routeName="activation"
        receive(signedIn,function(){http.login("admin","")})
        createUi(row)
        save("activation-home")
        openSettings();save("settings-menu")
        clickMenu("SettingsMenuSystemSettingsScreen.qml");save("system-settings-menu")
        var upgrade=clickMenu("SettingsUpgrades.qml")
        verify(!upgrade.disabled,"Admin must be able to open actual Upgrades menu")
        save("scientific-package-upgrades")
        var button=findType(screen,"SmallButton")
        verify(button!==null,"Missing production Upgrade button")
        clickItem(button)
        tryVerify(function(){return modal!==null && findChild(ui,"keyboardInput")!==null},10000)
        compare(findChild(ui,"keyboardInput").text,"")
        verify(findChild(ui,"keyboardConfirm").disabled,"Empty key must not be submitted")
        save("scientific-package-activation-key")
        clickItem(findProperty(modal,"text",Models.Dico.text.Cancel,"ModalZoomButton"))
        tryVerify(function(){return modal===null},10000)
        openSettings();clickMenu("SettingsMenuSystemSettingsScreen.qml")
        clickMenu("SettingsCloudScreen.qml")
        verify(!screen.isRegistered,"Cloud enrolment must stay absent")
        save("bactocloud-settings")
        record("activation-network-requests",{requests:requestRecords})
    }
    function test_navigation_data(){return localeRows()}
    function test_navigation(row) {
        routeName="navigation"
        receive(signedIn,function(){http.login("admin","")})
        createUi(row)
        var mainTargets=["SettingsMenuAutoModeSettingsScreen.qml","SettingsMenuMaintenanceScreen.qml",
            "SettingsMenuLogsScreen.qml","SettingsGateSettingsScreen.qml",
            "SettingsSystemInfoScreen.qml","SettingsInterventionInfoScreen.qml"]
        for(var i=0;i<mainTargets.length;++i){
            openSettings();var main=clickMenu(mainTargets[i]);record("settings/"+mainTargets[i],{clicked:main})
            if(mainTargets[i]==="SettingsGateSettingsScreen.qml"){
                clickName("actionBarButton1")
                tryVerify(function(){return screenSource.indexOf("GateWizardScreen.qml")>=0},10000)
                record("settings/gates/new",{installedCartridge:Models.Status.vars.cartridgeType,template:Models.Settings.gates_to_edit,saveNotClicked:true})
            }
        }
        var systemTargets=["SettingsNetworkScreen.qml","SettingsDateTimeScreen.qml",
            "SettingsSystemConfig.qml","SettingsSystemServiceScreen.qml","SettingsUserManagementScreen.qml",
            "SettingsUpgrades.qml","SettingsCloudScreen.qml"]
        for(i=0;i<systemTargets.length;++i){
            openSettings();clickMenu("SettingsMenuSystemSettingsScreen.qml")
            var system=clickMenu(systemTargets[i]);record("system/"+systemTargets[i],{clicked:system})
            if(systemTargets[i]==="SettingsSystemConfig.qml"){
                var label=findProperty(screen,"text",qsTranslate("SettingsSystemConfig","Advanced user management mode"),"CustomText")
                verify(label!==null,"Current Advanced user management label must exist")
                var management=null
                for(var c=0;c<screen.children.length;++c){
                    var candidate=screen.children[c]
                    if(candidate.toString().indexOf("CheckBoxButton")===0 && Math.abs(candidate.y-label.y)<5)management=candidate
                }
                verify(management!==null,"Find the production management checkbox next to its label")
                var originalSelected=management.selected
                clickItem(label)
                compare(management.selected,!originalSelected)
                record("system/configuration/advanced-user-management-unsaved",{saveLabel:screen.ab_texts[0],hasNext:false})
                clickItem(label)
                compare(management.selected,originalSelected)
            }
            if(systemTargets[i]==="SettingsDateTimeScreen.qml"){
                clickName("actionBarButton1")
                tryVerify(function(){return screenSource.indexOf("SettingsTimeSync.qml")>=0},10000)
                record("system/date-time/time-synchronization")
            }
        }
        var maintenanceTargets=["SettingsSelfCheckScreen.qml","SettingsTestOutputsScreen.qml","ExportAllFolderNameScreen.qml"]
        for(i=0;i<maintenanceTargets.length;++i){
            openSettings();clickMenu("SettingsMenuMaintenanceScreen.qml")
            var maintenance=clickMenu(maintenanceTargets[i]);record("maintenance/"+maintenanceTargets[i],{clicked:maintenance})
            if(maintenanceTargets[i]==="ExportAllFolderNameScreen.qml"){
                tryVerify(function(){return Models.System.list_usb.length>0},10000)
                Models.System.usb_index=0
                clickName("actionBarButton2")
                tryVerify(function(){return screenSource.indexOf("ImportConfigScreen.qml")>=0},10000)
                record("maintenance/special-export/import-settings")
            }
        }
        openSettings();clickMenu("SettingsMenuAutoModeSettingsScreen.qml")
        var onlineTest=clickMenu("SettingsTestOutputsScreen.qml");record("online-settings/test-outputs",{clicked:onlineTest})
        var logTargets=["SettingsErrorLogScreen.qml","SettingsWarningLogScreen.qml","SettingsAlarmLogScreen.qml",
            "SettingsLoginAttemptsScreen.qml","SettingsAuditTrailScreen.qml"]
        for(i=0;i<logTargets.length;++i){
            openSettings();clickMenu("SettingsMenuLogsScreen.qml")
            var log=clickMenu(logTargets[i]);record("logs/"+logTargets[i],{clicked:log,restricted:log.disabled})
        }
        for(i=0;i<2;++i){
            openSettings();clickMenu("SettingsMenuLogsScreen.qml")
            var bucket=i===0?"manual":"auto"
            var result=clickMenu("ResultListScreen.qml",bucket)
            record("logs/results/"+bucket,{clicked:result,actualBucket:Models.Protocols.getBucket()})
        }
        goHome();clickHomeAction(Models.Dico.text.Measure)
        tryVerify(function(){return screenSource.indexOf("ManualMeasurementWizardScreen.qml")>=0},10000)
        record("home/manual-measurement-wizard")
        var prime=findProperty(screen,"protocol_key","prime_no_clean","ListItemProtocol")
        verify(prime!==null,"The shipped real Prime protocol must be available")
        clickItem(prime)
        record("home/manual-wizard/select-prime",{protocol:Models.Protocols.getNext()})
        clickName("actionBarButton2")
        compare(screen.state,"infoMaintenance")
        record("home/manual-wizard/prime-instructions",{protocol:Models.Protocols.getNext(),startNotClicked:true})
        goHome();clickHomeAction(Models.Dico.text.Results)
        tryVerify(function(){return screenSource.indexOf("ResultListScreen.qml")>=0},10000)
        record("home/results/manual",{actualBucket:Models.Protocols.getBucket()})
        goHome();clickHomeAction(Models.Dico.text.Mode)
        tryVerify(function(){return screenSource.indexOf("ModeSelectionScreen.qml")>=0},10000)
        record("home/mode-selection")
        clickItem(findProperty(screen,"mode","auto","ThemedButton"))
        compare(Models.System.mode,"auto")
        clickName("actionBarButton0")
        tryVerify(function(){return screenSource.indexOf("HomeScreen.qml")>=0},10000)
        if(modal!==null)clickItem(findProperty(modal,"text",Models.Dico.text.No,"ModalZoomButton"))
        record("home/online",{schedulerRunning:Models.Settings.vars.autoMode})
        clickHomeAction(Models.Dico.text.Start)
        tryVerify(function(){return screenSource.indexOf("AutoInstructionWizardScreen.qml")>=0},10000)
        record("home/online-measurement-wizard")
        clickName("actionBarButton1")
        compare(screen.state,"schedule")
        record("home/online-wizard/scheduler",{startNotClicked:true})
        goHome();clickHomeAction(Models.Dico.text.Results)
        tryVerify(function(){return screenSource.indexOf("ResultListScreen.qml")>=0},10000)
        record("home/results/online",{actualBucket:Models.Protocols.getBucket()})
        goHome();clickHomeAction(Models.Dico.text.Mode)
        clickItem(findProperty(screen,"mode","manual","ThemedButton"))
        compare(Models.System.mode,"manual")
        clickName("actionBarButton0")
        record("navigation-network-requests",{requests:requestRecords})
    }
    function test_roles_data(){return localeRows()}
    // Focused follow-up for the two menu facts added after EN/DE completed.
    // A fresh full navigation/role capture already includes these checks.
    function test_additional_data(){return localeRows()}
    function test_additional(row) {
        routeName="additional"
        receive(signedIn,function(){http.login("admin","")})
        createUi(row)
        openSettings();clickMenu("SettingsGateSettingsScreen.qml")
        clickName("actionBarButton1")
        tryVerify(function(){return screenSource.indexOf("GateWizardScreen.qml")>=0},10000)
        record("settings/gates/new",{installedCartridge:Models.Status.vars.cartridgeType,template:Models.Settings.gates_to_edit,saveNotClicked:true})
        receive(signedIn,function(){http.login("advanced","")})
        createUi(row);compare(http.level,1)
        openSettings();clickMenu("SettingsMenuMaintenanceScreen.qml")
        verify(menuEntries().every(function(entry){return entry.screen.indexOf("SettingsTestOutputsScreen.qml")<0}),
               "Maintenance Test outputs tile is hidden from Advanced")
        record("advanced/maintenance-menu")
        record("additional-network-requests",{requests:requestRecords})
    }
    function test_roles(row) {
        routeName="roles"
        receive(signedIn,function(){http.login("basic","")})
        createUi(row)
        compare(http.level,2)
        openSettings();record("basic/settings-menu")
        var menu=menuEntries()
        verify(menu.every(function(entry){return entry.screen.indexOf("SettingsMenuSystemSettingsScreen.qml")<0
            && entry.screen.indexOf("SettingsMenuMaintenanceScreen.qml")<0}),"Basic must use current limited menu")
        var change=clickMenu("SettingsUserManagementScreen.qml");record("basic/change-password",{clicked:change})
        tryVerify(function(){return Models.Users.vars.length>0},10000)
        var basicUser=-1
        for(var u=0;u<Models.Users.vars.length;++u)if(Models.Users.vars[u].username==="basic")basicUser=u
        verify(basicUser>=0,"The disposable Basic account must exist")
        clickName("userRow"+basicUser);clickName("actionBarButton3")
        tryVerify(function(){return screenSource.indexOf("SettingsUserDetailsScreen.qml")>=0},10000)
        clickItem(findProperty(screen,"text",qsTranslate("SettingsUserDetailsScreen","Change PIN"),"SmallButton"))
        record("basic/change-password/edit/change-pin")
        openSettings();var cartridge=clickMenu("SettingsCartridgeChangeScreenNew.qml")
        record("basic/cartridge-change",{clicked:cartridge})
        openSettings();clickMenu("SettingsMenuLogsScreen.qml");clickMenu("SettingsErrorLogScreen.qml")
        verify(!findChild(ui,"actionBarButton2").disabled,"Idle BactoSense permits Basic error clearing")
        record("basic/error-list-clear-permission")
        receive(signedIn,function(){http.login("advanced","")})
        createUi(row);compare(http.level,1)
        openSettings();record("advanced/settings-menu")
        clickMenu("SettingsMenuMaintenanceScreen.qml");record("advanced/maintenance-menu")
        verify(menuEntries().every(function(entry){return entry.screen.indexOf("SettingsTestOutputsScreen.qml")<0}),
               "Maintenance Test outputs tile is hidden from Advanced")
        openSettings()
        clickMenu("SettingsMenuSystemSettingsScreen.qml");record("advanced/system-settings-menu")
        var restricted=clickMenu("SettingsUpgrades.qml")
        verify(restricted.disabled,"Upgrades requires Admin or Service")
        record("advanced/upgrades-restricted",{clicked:restricted})
        restricted=clickMenu("SettingsSystemServiceScreen.qml")
        verify(restricted.disabled,"System services requires Admin or Service")
        record("advanced/system-services-restricted",{clicked:restricted})
        openSettings();clickMenu("SettingsMenuLogsScreen.qml")
        restricted=clickMenu("SettingsAuditTrailScreen.qml")
        verify(restricted.disabled,"Audit trail requires Admin or Service")
        record("advanced/audit-trail-restricted",{clicked:restricted})
        receive(signedIn,function(){http.login("admin","")})
        createUi(row)
        openSettings();clickMenu("SettingsMenuSystemSettingsScreen.qml");clickMenu("SettingsUserManagementScreen.qml")
        tryVerify(function(){return Models.Users.vars.length>0},10000)
        clickName("actionBarButton0")
        tryVerify(function(){return screenSource.indexOf("SettingsConfigurationScreen.qml")>=0},10000)
        record("admin/users/settings")
        openSettings();clickMenu("SettingsMenuSystemSettingsScreen.qml");clickMenu("SettingsUserManagementScreen.qml")
        tryVerify(function(){return Models.Users.vars.length>0},10000)
        var ownUser=-1
        for(var i=0;i<Models.Users.vars.length;++i)if(Models.Users.vars[i].username==="admin")ownUser=i
        verify(ownUser>=0,"The real disposable admin account must exist")
        clickName("userRow"+ownUser)
        clickName("actionBarButton3")
        tryVerify(function(){return screenSource.indexOf("SettingsUserDetailsScreen.qml")>=0},10000)
        record("admin/users/edit")
        var pin=findProperty(screen,"text",qsTranslate("SettingsUserDetailsScreen","Change PIN"),"SmallButton")
        verify(pin!==null,"Current translated Change PIN control must exist")
        clickItem(pin);record("admin/users/edit/change-pin")
        record("role-network-requests",{requests:requestRecords})
    }
}
