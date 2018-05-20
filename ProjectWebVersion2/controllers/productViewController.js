var express = require('express');

var router = express.Router();
var productViewRepo=require('../repos/productViewRepo');

router.get('/', (req, res) => {
    var ID = req.query.ID;
        productViewRepo.loadAll().then(rows => {
            var vm = {
                sanpham: rows
            };
            res.render('productView/index',vm);
        });
});

module.exports = router;