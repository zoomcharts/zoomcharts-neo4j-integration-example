import { auraStyle, nodeStyle, createAurasArr } from './settings';

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
        let data = this.model.getData(); 
        let res = {
            nodes: [],
            links: []
        };
        let existingNodes = {};

        data.then(record => {
            record.forEach(r => {
                let start = r.get('p').segments[0].start.properties;
                let end = r.get('p').segments[0].end.properties;
                let relationship = r.get('p').segments[0].relationship.properties;

                // links
                res.links.push({
                    id: relationship.id,
                    from: start.id,
                    to: end.id,
                    type: relationship.type
                });

                // store all nodes
                if (!existingNodes[start.id]) {
                    existingNodes[start.id] = true;
                    res.nodes.push({
                        id: start.id,
                        age: start.age,
                        name: start.name,
                        loaded: start.loaded,
                        auras: createAurasArr(start.auras)
                    });
                }

                if (!existingNodes[end.id]) {
                    existingNodes[end.id] = true;
                    res.nodes.push({
                        id: end.id,
                        age: end.age,
                        name: end.name,
                        loaded: end.loaded,
                        auras: createAurasArr(end.auras)
                    });
                };
            });

            // 
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
            data: [{ preloaded: data }],
            auras: auraStyle,
            style: nodeStyle,
            legend: {
                enabled: true,
                padding: 6,
                marker: { size: 22 },
                maxLineSymbols: 12
            },
            navigation: { initialNodes: ["m-1"], mode: "focusnodes" },
            theme: NetChart.themes.dark
        }

        // render chart object
        this.view.renderChart(options);
    }
}