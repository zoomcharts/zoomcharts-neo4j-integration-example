import { nodeStyle } from './settings';

export default class Controller {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    setView() {
        this.projectNode();
    }

    // project nodes and links array for netchart
    projectNode() {
        let data = this.model.getData((d) => {
            let rawData = d;
            let res = {
                nodes: [],
                links: []
            };

            let existingNodes = {};
            let existingLinks = {};

            for (let i = 0; i < rawData.length; i++) {
                let graph = rawData[i].graph;

                for (let j = 0; j < graph.nodes.length; j++) {
                    let node = graph.nodes[j];
                    if (existingNodes[node.id])
                        continue;

                    existingNodes[node.id] = true;
                    res.nodes.push({
                        id: node.id,
                        loaded: true,
                        extra: node
                    });
                }

                for (let j = 0; j < graph.relationships.length; j++) {
                    let link = graph.relationships[j];
                    if (existingLinks[link.id])
                        continue;

                    existingLinks[link.id] = true;
                    res.links.push({
                        id: link.id,
                        from: link.startNode,
                        to: link.endNode,
                        extra: link
                    });
                }
            }
            this.createChart(res);
        });
    }

    // create netchart
    createChart(data) {

        // chart options
        let options = {
            container: "demo",
            area: {
                height: 600,
                style: { fillColor: "rgba(14,33,40,0.9)" }
            },
            data: { preloaded: data },
            style: nodeStyle,
            legend: {
                enabled: true,
                padding: 6,
                marker: { size: 22 },
                maxLineSymbols: 12
            },
            navigation: { initialNodes: ["11041"], mode: "focusnodes" },
            theme: NetChart.themes.dark
        }

        // render chart object
        this.view.renderChart(options);
    }

}