var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('infoAccount/index');
});

module.exports = router;