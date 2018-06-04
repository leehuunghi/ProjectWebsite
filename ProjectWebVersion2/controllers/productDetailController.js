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
    var p3=productDetailRepo.countDanhGia(IDSearch);
    var p4=productDetailRepo.moTa(IDSearch);
    var p5=productDetailRepo.moTaXemThem(IDSearch);

    Promise.all([p1, p2, p3,p4,p5]).then(([p1Rows, p2Rows,p3Rows,p4Rows,p5Rows]) => {
        var vm = {
            sanPhamDetail: p1Rows,
            sanPham_Gia: p2Rows,
            soDanhGia: p3Rows,
            moTa: p4Rows,
            normal: p4Rows.GhiChu==="",
            moTaThem: p5Rows
        };
        res.render('productDetail/index', vm);
    });
});

module.exports = router;