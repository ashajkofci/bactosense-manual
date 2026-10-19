import QtQuick 2.12
import QtQuick.Controls 2.5
import "qrc:/services" as Services
import "qrc:/views/manual" as Manual
import "qrc:/views/globalViews" as Views

// A desktop host for the same reader installed in SettingsUserManualScreen.
// The integrated Support & Service flow is exercised by tst_capture.qml.
ApplicationWindow {
    id: window
    title: qsTr("BactoSense manual preview")
    width: 800
    height: 480
    minimumWidth: 800
    minimumHeight: 480
    visible: true
    color: "#dceaf4"
    Views.ToolBarView {
        id: toolbar
        anchors { top: parent.top; left: parent.left }
        state: "back_with_feedback"
        consultingManual: true
        btn_level_max: [3, 3, 3]
        onBackWithFeedBackPressed: if (!reader.goBack()) window.close()
        onHomePressed: window.close()
        onClicked: window.close()
        onLogout: window.close()
    }
    Manual.ManualReader {
        id: reader
        preferredLocale: (typeof ManualPreviewLocale === "string" && ManualPreviewLocale) || Services.System.locale.name
        anchors { top: toolbar.bottom; left: parent.left; right: parent.right; bottom: parent.bottom }
        anchors.margins: 16
        onSearchRequested: {
            keyboard.setSource("qrc:/views/singleComponents/ModalKeyboard.qml", {
                text: query, state: "full_empty"
            })
        }
    }
    Loader {
        id: keyboard
        objectName: "previewKeyboard"
        anchors.fill: parent
        z: 20
        onLoaded: item.headerText = qsTr("Search the manual")
    }
    Connections {
        target: keyboard.item
        onClosed: keyboard.source = ""
        onFinish: {
            var query = text
            keyboard.source = ""
            reader.search(query)
        }
    }
}
