var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('search/index');
});

module.exports = router;