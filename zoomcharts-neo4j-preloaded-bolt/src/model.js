import { driver } from './config';

let nodesArr = [];

export default class Model {

    constructor() { }

    // get data from graph db
    getData() {

        let session = driver.session();

        return session
            .run('MATCH p=()-[r:RELATED]->() RETURN p')
            .then(result => {
                session.close();
                return result.records;
            }).catch(error => {
                session.close();
                throw error;
            });
    }
}