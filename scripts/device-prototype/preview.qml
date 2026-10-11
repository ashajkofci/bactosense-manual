import QtQuick 2.12
import QtQuick.Controls 2.5
import QtQuick.Layouts 1.12
import "../../../gui/views/manual" as Manual

// A desktop host for the same reader installed in SettingsUserManualScreen.
// The integrated Support & Service flow is exercised by tst_capture.qml.
ApplicationWindow {
    id: window
    title: "BactoSense English manual preview"
    width: 800
    height: 480
    minimumWidth: 680
    minimumHeight: 400
    visible: true
    color: "#dceaf4"
    header: ToolBar {
        height: 54
        background: Rectangle { color: "#343d45" }
        Label { anchors.centerIn: parent; text: "BactoSense · User manual (English)"; color: "#ffffff"; font.pixelSize: 22 }
    }
    Manual.ManualReader {
        id: reader
        anchors.fill: parent
        anchors.margins: 16
        onSearchRequested: {
            searchField.text = query
            searchDialog.open()
            searchField.forceActiveFocus()
        }
    }
    Dialog {
        id: searchDialog
        title: "Search the English manual"
        anchors.centerIn: parent
        width: Math.min(560, window.width - 40)
        modal: true
        standardButtons: Dialog.Ok | Dialog.Cancel
        onAccepted: reader.search(searchField.text)
        TextField {
            id: searchField
            width: parent.width
            placeholderText: "For example: cartridge, cleaning or scheduling"
            font.pixelSize: 18
            onAccepted: searchDialog.accept()
        }
    }
}
