var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('packageDetail/index');
});

module.exports = router;