import QtQuick 2.12
import QtQuick.Controls 2.5
import "qrc:/views/manual" as Manual

// A desktop host for the same reader installed in SettingsUserManualScreen.
// The integrated Support & Service flow is exercised by tst_capture.qml.
ApplicationWindow {
    id: window
    title: qsTr("BactoSense manual preview")
    width: 800
    height: 480
    minimumWidth: 680
    minimumHeight: 400
    visible: true
    color: "#dceaf4"
    Manual.ManualReader {
        id: reader
        bundleUrl: "qrc:/manual/" + ((typeof ManualPreviewLocale === "string" && ManualPreviewLocale) || selectedLocale) + "/"
        anchors.fill: parent
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
