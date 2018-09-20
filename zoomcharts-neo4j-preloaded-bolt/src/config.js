import { v1 as neo4j } from "neo4j-driver/lib/browser/neo4j-web";

let username = 'neo4j';
let password = 'xxx';
let host = 'bolt://localhost:7687';

export let driver = neo4j.driver(host, neo4j.auth.basic(username, password));
