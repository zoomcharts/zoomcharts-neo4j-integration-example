import { nodeStyle } from './settings';

export default class Controller {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    setView() {
        this.setUpChart();
    }

    // setup chart object
    setUpChart() {

        let _that = this;

        // chart options
        let options = {
            container: "demo",
            area: {
                height: 600,
                style: { fillColor: "rgba(14,33,40,0.9)" }
            },
            data: {
                dataFunction(nodeList, success, error) {

                    // 
                    _that.model.getData(nodeList, (d) => {
                        success(_that.projectNode(nodeList, d));
                    });
                }
            },
            style: nodeStyle,
            legend: {
                enabled: true,
                padding: 6,
                marker: { size: 22 },
                maxLineSymbols: 12
            },
            navigation: { initialNodes: ["11041"], mode: "manual" },
            theme: NetChart.themes.dark
        }

        // render chart object
        this.renderChart(options);
    }

    // project nodes and links array for netchart
    projectNode(nodeList, d) {
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
                    loaded: nodeList.indexOf(node.id) > -1,
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
        return res;
    }

    // create netchart
    renderChart(options) {

        // render chart object
        this.view.renderChart(options);
    }

}