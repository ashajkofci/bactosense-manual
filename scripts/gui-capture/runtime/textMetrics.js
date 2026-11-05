.pragma library
// Read-only layout metrics of every visible text item, for the text overflow check
// (text_overflow.py). Logged beside each capture; nothing in the GUI is changed.
//   input:  the captured root item
//   output: [{type, text, x, y, width, height, paintedWidth, paintedHeight, ..., ancestors}]
//           in the root's logical coordinates; ancestors run from the parent outwards.

function typeName(item) { return item.toString().split("(")[0] }

function effectiveOpacity(item, root) {
    var opacity = 1
    for (var node = item; node && node !== root; node = node.parent) opacity *= node.opacity
    return opacity
}

function ancestors(item, root) {
    var rows = []
    for (var node = item.parent; node && rows.length < 10; node = node.parent) {
        var point = node.mapToItem(root, 0, 0)
        rows.push({type: typeName(node), name: node.objectName || "", x: point.x, y: point.y,
                   width: node.width, height: node.height, clip: node.clip === true,
                   flickable: node.contentY !== undefined && node.flicking !== undefined})
        if (node === root) break
    }
    return rows
}

function collect(root) {
    var rows = []
    function walk(item, depth) {
        if (!item || depth > 30 || !item.visible) return
        // Only Qt Quick Text items have fontSizeMode and a font; TextInput/TextEdit scroll their own
        // content, and some components expose text/paintedWidth properties of their own.
        if (item.fontSizeMode !== undefined && item.font !== undefined && item.paintedWidth !== undefined
                && item.text !== undefined && item.text !== null
                && item.text.toString() !== "" && item.width >= 0 && effectiveOpacity(item, root) > 0.01) {
            var point = item.mapToItem(root, 0, 0)
            rows.push({type: typeName(item), name: item.objectName || "", text: item.text.toString().slice(0, 120),
                       x: point.x, y: point.y, width: item.width, height: item.height,
                       paintedWidth: item.paintedWidth, paintedHeight: item.paintedHeight,
                       contentWidth: item.contentWidth, implicitWidth: item.implicitWidth,
                       pixelSize: item.font.pixelSize, minimumPixelSize: item.minimumPixelSize,
                       fontSizeMode: item.fontSizeMode, wrapMode: item.wrapMode, elide: item.elide,
                       truncated: item.truncated === true, lineCount: item.lineCount,
                       maximumLineCount: item.maximumLineCount,
                       nbrLinesMax: item.nbrLinesMax !== undefined ? item.nbrLinesMax : null,
                       hasWidthMax: item.hasWidthMax !== undefined ? item.hasWidthMax : null,
                       horizontalAlignment: item.horizontalAlignment, verticalAlignment: item.verticalAlignment,
                       state: item.state || "", ancestors: ancestors(item, root)})
        }
        var children = item.children || []
        for (var i = 0; i < children.length; ++i) walk(children[i], depth + 1)
    }
    walk(root, 0)
    return rows
}
