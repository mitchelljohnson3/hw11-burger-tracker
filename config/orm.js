class orm {
    constructor() {
        this.connection = require('./connection.js');
    }

    db_query(query, values, formatted) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                query,
                values,
                (err, results) => {
                    if (err) {
                        reject(err);
                    }
                    if(formatted) {
                        resolve(this.format(results));
                    } else {
                        resolve(results);
                    }
                }
            );
        });
    }

    format(data) {
        return data.map(object => {
            const newObj = {};
            const keys = Object.keys(object);
            const values = Object.values(object);
            for (let i = 0; i < keys.length; i++) {
                newObj[keys[i]] = values[i];
            }
            return newObj;
        });
    }

    selectAll(table_name) {
        const query = 'select * from ??';
        const values = [table_name];
        return this.db_query(query, values, true);
    }

    insertOne(table_name, what, where) {
        const query = 'insert into ?? (??) values(?)';
        const values = [table_name, where, what];
        return this.db_query(query, values, false);
    }

    updateOne(table_name, what, where, id) {
        const query = 'update ?? set ?? = ? where ??.id = ?';
        const values = [table_name, where, what, table_name, id];
        return this.db_query(query, values, false);
    }
}

module.exports = orm;