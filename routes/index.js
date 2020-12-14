const express = require('express');

const Menu = require('../models/menu');

const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index');
});

router.get('/menu', async (req, res) => {
    Menu.find({}).exec((error, data) => {
        if (error) {
            throw error;
        }
        else {
            res.render('pages/menu', {menus: data});
            console.log(JSON.stringify(data));
        }
    });
});

module.exports = router;