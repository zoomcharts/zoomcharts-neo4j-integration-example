export let nodeStyle = {
    nodeStyleFunction(node) {
        node.aura = node.data.auras;
        node.image = "https://zoomcharts.com/dvsl/data/net-chart/friend-net/" + node.id + ".png";
        node.label = node.id;//node.data.name;
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

export let auraStyle = {
    cellSize: 10,
    overlap: true,
    enabled: true,
    defaultStyle: {
        showInLegend: true,
        shadowBlur: 35
    },
    style: {
        "Sales": {
            fillColor: "rgba(254,248,17,0.6)",
            shadowColor: "rgba(254,248,17,0.6)",
        },
        "Administration": {
            fillColor: "rgba(53,135,136,0.3)",
            shadowColor: "rgba(53,135,136,0.7)",
        },
        "Board": {
            fillColor: "rgba(111,82,184,0.6)",
            shadowColor: "rgba(111,82,184,0.6)",
        },
        "HR": {
            fillColor: "rgba(38,164,182,0.7)",
            shadowColor: "rgba(38,164,182,0.7)",
        },
        "IT": {
            fillColor: "rgba(39,156,254,0.7)",
            shadowColor: "rgba(39,156,254,0.7)",
        },
        "Accounting": {
            fillColor: "rgba(255,255,255,0.8)",
            shadowColor: "rgba(255,255,255,0.8)",
        },
        "Marketing": {
            fillColor: "rgba(176,220,11,0.3)",
            shadowColor: "rgba(176,220,11,0.3)",
        }
    }
};

export let createAurasArr = (auras) => {
    var aurasArr = auras.split(',');
    if (aurasArr.length > 1) {
        return aurasArr
    }
    return aurasArr.join();
}
