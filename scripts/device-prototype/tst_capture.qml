import QtQuick 2.12
import "../../../gui/test/integration" as Integration

Integration.UserManualWorkflowTestCase {
    name: "DeviceManualPrototype"
    captureDirectory: decodeURIComponent(Qt.resolvedUrl("../../output/device-prototype/screenshots").toString().replace(/^file:\/\//, ""))
    function test_consultEnglishManual_data() {
        return [{ tag: "admin", username: "admin", role: 0 }, { tag: "basic", username: "basic", role: 2 }]
    }
    function test_consultEnglishManual(row) { consultManual(row) }
}
