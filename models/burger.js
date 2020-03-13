class burger {
    constructor() {
        this.db_orm = require('../config/orm.js');
        this.orm = new this.db_orm();
    }

    getAll() {
        return this.orm.selectAll('burgers');
    }

    create(burger_name) {
        return this.orm.insertOne('burgers', burger_name, 'burger_name');
    }

    devour(id) {
        return this.orm.updateOne('burgers', true, 'devoured', id);
    }
}

module.exports = burger;