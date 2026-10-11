import QtQuick 2.12
import QtTest 1.2
import "qrc:/models" as Models
import "qrc:/views" as Views
import "qrc:/views/singleComponents" as Components

// Render the real production controls and toolbar component, including rare
// status states. The catalog crops their real pixels; no substitute UI is drawn.
TestCase {
    id: capture
    name: "ManualGuiIcons"
    when: windowShown
    visible: true
    width: 800
    height: 900
    property string outputRoot: "/Users/adrianshajkofci/Documents/git/bactosense-manual/output/gui-capture/icons"
    property var http: Models.HTTPRequestController
    SignalSpy { id: signedIn; target: capture.http; signalName: "loggedIn" }

    function initTestCase() {
        Models.System.saved_port_web = ":" + Integration.port
        Models.System.language_index = 0
        Translator.selectLanguage("en-US")
        Models.Dico.updateString()
        signedIn.clear()
        http.login("admin", "")
        tryCompare(signedIn, "count", 1, 15000)
    }
    function tree(item, result, depth, ancestor) {
        if (!item || depth > 15) return
        var group = item.objectName || ancestor
        if (item.visible && item.width > 0 && item.height > 0) {
            var point = item.mapToItem(stage, 0, 0)
            result.push({type:item.toString().split("(")[0],name:item.objectName || "",group:group,
                text:item.text ? item.text.toString() : "",x:point.x,y:point.y,
                width:item.width,height:item.height,source:item.source ? item.source.toString() : "",
                state:item.state || ""})
        }
        var children = item.children || []
        for (var i=0; i<children.length; ++i) tree(children[i], result, depth+1, group)
    }
    function save(name) {
        wait(300)
        verify(waitForRendering(stage))
        var objects=[]; tree(stage,objects,0,"")
        console.log("ICON_CAPTURE_TREE " + name + " " + JSON.stringify(objects))
        var complete=false
        stage.grabToImage(function(result) {
            complete = result.saveToFile(outputRoot + "/" + name + ".png")
        }, Qt.size(stage.width*2,stage.height*2))
        tryVerify(function(){return complete},10000,name)
        console.log("ICON_CAPTURE_SAVED " + name)
    }
    Rectangle {
        id:stage
        width:800
        height:900
        color:Views.StyleUI.gray_50
        property bool controlsVisible: true

        Repeater {
            model: [
                {name:"home-button", kind:"toolbar", key:"home", label:""},
                {name:"back-button", kind:"toolbar", key:"back", label:""},
                {name:"edit-gate-button", kind:"edit", key:"edit", label:""},
                {name:"system-settings-button",kind:"menu",key:"instrument",label:"System settings"},
                {name:"maintenance-button",kind:"menu",key:"maintenance",label:"Maintenance"},
                {name:"special-import-export-button",kind:"menu",key:"export",label:"Special export / import"},
                {name:"network-button",kind:"menu",key:"network",label:"Network"},
                {name:"date-time-button",kind:"menu",key:"time",label:"Date & Time"},
                {name:"demo-mode-button",kind:"menu",key:"demo",label:"Demo mode"},
                {name:"factory-reset-button",kind:"menu",key:"factory",label:"Factory reset"},
                {name:"gate-settings-button",kind:"menu",key:"gate_settings",label:"Gate settings"},
                {name:"system-info-button",kind:"menu",key:"info",label:"System info"},
                {name:"intervention-info-button",kind:"menu",key:"intervention_info",label:"Intervention info"},
                {name:"intervention-log-button",kind:"menu",key:"intervention_log",label:"Intervention log"}
            ]
            delegate: Item {
                id:cell
                objectName:modelData.name
                width:200
                height:160
                x:index%4*200
                y:Math.floor(index/4)*160
                visible:stage.controlsVisible
                Components.MenuButtonView {
                    x:10;y:6;width:180;height:148
                    source_icon:Views.IconsUI.menubtn_urls[modelData.key] || Views.IconsUI.menubtn_urls.maintenance
                    text:modelData.label
                    levelMax:3
                    visible:modelData.kind==="menu"
                }
                Components.ToolBarButton {
                    x:60;y:50;width:80;height:60
                    state:modelData.key
                    levelMax:3
                    visible:modelData.kind==="toolbar"
                }
                Components.ImageIconBtn {
                    x:80;y:60;width:40;height:40
                    useOutlinedStyle:true
                    modalStyle:true
                    radius:3
                    icon_idle_url:Views.IconsUI.edit_urls.re
                    icon_pressed_url:Views.IconsUI.edit_urls.pr
                    visible:modelData.kind==="edit"
                }
            }
        }
        Repeater {
            model: [
                {name:"demo-mode-status",type:"demo"},
                {name:"critical-error-status",type:"critical"},
                {name:"noncritical-error-status",type:"noncritical"},
                {name:"alarm-status",type:"alarm"},
                {name:"cartridge-almost-expired-status",type:"expiry",source:Views.IconsUI.tb_cartridge_almost_expired},
                {name:"process-running-status",type:"spinner"},
                {name:"cartridge-almost-empty-status",type:"cartridge",source:Views.IconsUI.tb_cartridge_warning},
                {name:"cartridge-level-status",type:"cartridge",source:Views.IconsUI.tb_cartridge_full},
                {name:"cartridge-not-ready-status",type:"cartridge",source:Views.IconsUI.tb_cartridge_notready},
                {name:"cartridge-expired-status",type:"expiry",source:Views.IconsUI.tb_cartridge_expired},
                {name:"service-required-status",type:"service"},
                {name:"cartridge-empty-status",type:"cartridge",source:Views.IconsUI.tb_cartridge_empty}
            ]
            delegate: Components.ToolBarCenter {
                objectName:modelData.name
                x:80;y:index*60;width:640;height:60
                visible:!stage.controlsVisible
                mode:"Manual"
                status:"idle"
                username:"Admin"
                screenVisible:false
                simulationMode:modelData.type==="demo"
                isServiceRequired:modelData.type==="service"
                isRunning:modelData.type==="spinner"
                hasAlarm:modelData.type==="alarm"
                hasError:modelData.type==="critical" || modelData.type==="noncritical"
                severity:modelData.type==="critical" ? "critical" : "non-critical"
                cartridge_icon:modelData.type==="cartridge" ? modelData.source : ""
                cartridgeTime_icon:modelData.type==="expiry" ? modelData.source : ""
            }
        }
        Repeater {
            model:[
                {name:"noncritical-error-event",severity:"non-critical",eventName:"MixerInflationError"},
                {name:"critical-error-event",severity:"critical",eventName:"CartridgeMissingError"},
                {name:"errors-cleared-event",severity:"cleared",eventName:"ErrorsCleared"}
            ]
            delegate:Components.ListItemError {
                objectName:modelData.name
                x:4;y:720+index*60;width:792;height:60
                visible:!stage.controlsVisible
                currentIndex:0
                errorData:({timestamp:1791720000,name:modelData.eventName,count:1,severity:modelData.severity})
            }
        }
    }
    function test_controls() {
        stage.controlsVisible=true
        stage.height=640
        save("controls-atlas")
    }
    function test_status() {
        stage.controlsVisible=false
        stage.height=900
        save("status-atlas")
    }
}
