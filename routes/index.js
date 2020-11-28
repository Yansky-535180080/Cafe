const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    // res.render('pages/index');
    res.render('pages/index.ejs', {layout: false});
});

module.exports = router;