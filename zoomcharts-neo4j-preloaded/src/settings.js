export let nodeStyle = {
    nodeStyleFunction(node) {
        node.label = node.id;
    },
    linkStyleFunction(link) {
        link.fromDecoration = "circle";
        link.toDecoration = "arrow";
    },
    node: {
        radius: 30,
        imageCropping: true,
        shadowBlur: 15,
        shadowColor: "#262626",
        fillColor: "rgba(44,233,233,0.8)"
    },
    nodeHovered: {
        shadowColor: "white",
        shadowBlur: 15,
    },
    nodeSelected: {
        lineColor: null
    },
    selection: {
        fillColor: null,
        lineColor: null
    },
    nodeFocused: {
        fillColor: "white",
        lineColor: null,
        shadowColor: "white",
        shadowBlur: 10
    }
};

