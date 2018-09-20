import {
    url,
    auth,
    query
} from './config';

let nodesArr = [];

export default class Model {

    constructor() { }

    // get data from graph db
    getData(callback) {

        var req = new XMLHttpRequest();
        req.onload = function (e) {
            var response = JSON.parse(req.responseText);
            if (response.errors && response.errors.length) {
                alert(response.errors[0].message);
            }
            else {
                callback(response.results[0].data);
            }
        };
        req.open("post", url + "db/data/transaction/commit");
        req.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        req.setRequestHeader("X-Ajax-Browser-Auth", "true");
        req.setRequestHeader("Authorization", auth);
        req.send(JSON.stringify({
            "statements": [
                {
                    "statement": query,
                    "resultDataContents": [
                        "graph"
                    ],
                    "includeStats": false
                }
            ]
        }));
    }
}