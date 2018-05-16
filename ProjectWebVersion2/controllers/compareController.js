var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('compare/index');
});

module.exports = router;