
let username = 'neo4j';
let password = 'xxx';
let enc = window.btoa([username, password].join(':'));

export let auth = `Basic ${enc}`;
export let url = 'https://path/to/';
export let query = nodeList => {
    return `MATCH (n) OPTIONAL MATCH (n)-[r]-(b) WHERE id(n) in [${nodeList}] RETURN n, r,b`;
}


