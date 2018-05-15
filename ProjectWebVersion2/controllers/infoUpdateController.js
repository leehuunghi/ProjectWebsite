var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('infoUpdate/index');
});

module.exports = router;