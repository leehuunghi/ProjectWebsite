var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('product-view/index');
});

module.exports = router;