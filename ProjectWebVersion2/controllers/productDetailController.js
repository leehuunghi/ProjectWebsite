var express = require('express');

var router = express.Router();
var productDetailRepo = require('../repos/productDetailRepo');
var IDSearch;


router.get('/:id', (req, res) => {
    IDSearch=req.params.id;
    res.redirect('/product-detail');
});

router.get('/', (req, res) => {
    var p1=productDetailRepo.loadSanPham(IDSearch);
    var p2=productDetailRepo.loadSanPhamct(IDSearch);

    Promise.all([p1, p2]).then(([p1Rows, p2Rows]) => {
        var vm = {
            sanPhamDetail: p1Rows,
            sanPham_Gia: p2Rows
        };
        res.render('productDetail/index', vm);
    });

    // productDetailRepo.loadTenSanPham(IDSearch).then(rows => {
    //     var vm = {
    //         sanPhamDetail: rows
    //     };
    //     res.render('productDetail/index', vm);
    // });
});





module.exports = router;