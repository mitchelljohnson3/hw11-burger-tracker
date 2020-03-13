class orm {
    constructor() {
        this.connection = require('./connection.js');
    }

    db_query(query, values) {
        return new Promise(resolve, reject) {
            this.connection.query(
                query,
                values,
                (err, results) {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            )
        }
    }

    selectAll(table_name) {
        const query = 'select * from ??';
        const values = [table_name];
        return this.db_query(query, values);
    }

    insertOne(table_name, what, where) {
        const query = 'insert into ?? (??) values(??)';
        const values = [table_name, where, what];
        return this.db_query(query, values);
    }

    updateOne(table_name, what, where, id) {
        const query = 'update ?? set ?? = ?? where id = ??';
        const values = [table_name, where, what, id];
        return this.db_query(query, values);
    }
}

module.exports = orm;