const connection = require('../config/connection.js');
const db_orm = require('../config/orm.js');

const orm = new db_orm(connection, 'burgers_db');

module.exports =