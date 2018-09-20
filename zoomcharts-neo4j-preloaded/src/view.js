import { NetChart } from "@dvsl/zoomcharts" 

export default class View {

    constructor() { }

    renderChart(options) {
        var t = new NetChart(options);
    }
}