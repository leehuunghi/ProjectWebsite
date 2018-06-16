var express = require('express');

var router = express.Router();
var productDetailRepo = require('../repos/productDetailRepo');
var IDSearch;
var IDCT;


router.get('/:id', (req, res) => {
    IDSearch = req.params.id;
    res.redirect('/product-detail');
});


router.get('/', (req, res) => {
    var color = req.query.color;
    var DL = req.query.DungLuong;
    if (!color) {
        color = 1;
    }
    if (!DL) {
        DL = 1;
    }
    var p1 = productDetailRepo.loadSanPham(IDSearch);
    // var p2 = productDetailRepo.loadSanPhamct(IDSearch);
    var p3 = productDetailRepo.countDanhGia(IDSearch);
    var p4 = productDetailRepo.moTa(IDSearch);
    var p5 = productDetailRepo.moTaXemThem(IDSearch);
    var p6 = productDetailRepo.demMoTaThem(IDSearch);
    var p7 = productDetailRepo.thongSo(IDSearch);
    var p8 = productDetailRepo.thongSoThem(IDSearch);
    var p9 = productDetailRepo.demthongSoThem(IDSearch);
    var pStar1 = productDetailRepo.progressRate(IDSearch, 1);
    var pStar2 = productDetailRepo.progressRate(IDSearch, 2);
    var pStar3 = productDetailRepo.progressRate(IDSearch, 3);
    var pStar4 = productDetailRepo.progressRate(IDSearch, 4);
    var pStar5 = productDetailRepo.progressRate(IDSearch, 5);
    var p11 = productDetailRepo.loadSanPhamCT(IDSearch);
    var numbers = [];
    var star;

    productDetailRepo.slide(IDSearch).then(c => {
        for (var i = 1; i <= c[0].SoHinhSlide; i++) {
            numbers.push({
                value: i,
                ID: IDSearch,
                active: i === 1
            });
        }
    });

    p10 = productDetailRepo.loadSanPham(IDSearch).then(sp => {
        var temp = (sp[0].Rate * 10) % 10;
        if (temp > 5) {
            star = (sp[0].Rate * 10 - temp) / 10 + 1;
        }
        else star = (sp[0].Rate * 10 - temp) / 10;
        return star;
    })

    Promise.all([p1, p3, p4, p5, p6, p7, p8, p9, p10, pStar1, pStar2, pStar3, pStar4, pStar5, p11])
        .then(([p1Rows, p3Rows, p4Rows, p5Rows, p6Count, p7Rows, p8Rows, p9Count, p10Rate, ps1, ps2, ps3, ps4, ps5, p11Rows]) => {
            var numbersColor = [];
            var arrDungLuong = [];
            arrMau = new Set();
            console.log(p11Rows);
            for (i = 1; i <= p11Rows.length; i++) {
                if(p11Rows[i-1].MaMau==p11Rows[+color-1].MaMau)
                {
                    console.log(i);
                    arrDungLuong.push({
                        value: i,
                        id: p11Rows[i-1].ID,
                        DungLuong: p11Rows[i-1].DungLuong,
                        isCurentDL: i === +DL,
                    });
                }
                
                if(arrMau.has(p11Rows[i-1].MaMau)) continue;
                arrMau.add(p11Rows[i-1].MaMau);
                numbersColor.push({
                    value: i,
                    color: p11Rows[i-1],
                    isCurentColor: i === +color,
                    id: p11Rows[i-1].ID,
                });
                
            }
            console.log(DL);
            console.log(arrDungLuong);
            var vm = {
                sanPhamDetail: p1Rows,
                // sanPham_Gia: p2Rows,
                soDanhGia: p3Rows,
                moTa: p4Rows,
                normal: p4Rows.GhiChu === "",
                moTaThem: p5Rows,
                slide: numbers,
                hasMore: p6Count[0].sum > 3,
                thongso: p7Rows,
                thongsothem: p8Rows,
                hasMoreThongSo: p9Count[0].tong > 5,
                StarRate: p10Rate,
            isLogged: req.session.isLogged,
                rate1: ps1,
                rate2: ps2,
                rate3: ps3,
                rate4: ps4,
                rate5: ps5,
                numbersColor: numbersColor,
                arrDungLuong: arrDungLuong,
            };
            res.render('productDetail/index', vm);
        });
});

router.post('/', (req, res) => {

});

module.exports = router;