var express = require('express');

var router = express.Router();
var productDetailRepo=require('../repos/productDetailRepo');

router.get('/', (req, res) => {
    
    res.render('productDetail/index');
});




module.exports = router;