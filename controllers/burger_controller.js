const express = require('express');
const router = express.Router();

const bg = require('../models/burger.js');
const burger = new bg();

router.get('/', (req, res) => {
    burger.getAll()
    .then((data) => {
        res.render('index', { data });
    })
});

router.post('/', (req, res) => {
    burger.create(req.body.burger_name)
    .then((results) => {
        res.redirect('/');
    });
});

router.post('/:id', (req, res) => {
    burger.devour(req.params.id)
    .then((results) => {
        res.redirect('/');
    });
});

module.exports.router = router;