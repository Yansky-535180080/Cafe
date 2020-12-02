const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index');
});

router.get('/menu', async (req, res) => {
    res.render('pages/menu');
});

module.exports = router;