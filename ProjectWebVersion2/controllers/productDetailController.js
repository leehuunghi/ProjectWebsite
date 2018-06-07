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
    var p6=productDetailRepo.demMoTaThem(IDSearch);
    var p7=productDetailRepo.thongSo(IDSearch);
    var p8=productDetailRepo.thongSoThem(IDSearch);
    var p9=productDetailRepo.demthongSoThem(IDSearch);
    var numbers = [];

    productDetailRepo.slide(IDSearch).then(c => {
        for (var i = 1; i <= c[0].SoHinhSlide; i++) {
            numbers.push({
                value: i,
                ID: IDSearch,
                active: i===1
            });
        }
    });

    Promise.all([p1, p2, p3,p4,p5,p6,p7,p8,p9]).then(([p1Rows, p2Rows,p3Rows,p4Rows,p5Rows,p6Count,p7Rows,p8Rows,p9Count]) => {
        var vm = {
            sanPhamDetail: p1Rows,
            sanPham_Gia: p2Rows,
            soDanhGia: p3Rows,
            moTa: p4Rows,
            normal: p4Rows.GhiChu==="",
            moTaThem: p5Rows,
            slide: numbers,
            hasMore: p6Count[0].sum > 3,
            thongso: p7Rows,
            thongsothem: p8Rows,
            hasMoreThongSo: p9Count[0].tong > 5,
        };
        res.render('productDetail/index', vm);
    });
});

module.exports = router;