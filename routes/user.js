const express = require('express');

const router = express.Router();

const Member = require('../models/member');

router.get('/login', async (req, res) => {
    res.render('pages/login');
});

router.post('/login', async (req, res) => {
    
});

module.exports = router;