var express = require('express');

var router = express.Router();
var productDetailRepo = require('../repos/productDetailRepo');
var IDSearch;
var color;
var DL;
router.get('/:id/:id', (req, res) => {
    color=req.url.substr(+req.url.lastIndexOf('/')+1);
    res.redirect(`/product-detail/${IDSearch}`);
})

router.get('/:id', (req, res) => {
    DL = req.query.DungLuong;
    IDSearch = req.params.id;
    console.log(req.query.DanhGia);
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
    var p12 = productDetailRepo.SPCungLoai(IDSearch);
    var p13=productDetailRepo.SPCungNSX(IDSearch);
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

    Promise.all([p1, p3, p4, p5, p6, p7, p8, p9, p10, pStar1, pStar2, pStar3, pStar4, pStar5, p11,p12,p13])
        .then(([p1Rows, p3Rows, p4Rows, p5Rows, p6Count, p7Rows, p8Rows, p9Count, p10Rate, ps1, ps2, ps3, ps4, ps5, p11Rows,p12Rows,p13Rows]) => {
            var numbersColor = [];
            var arrDungLuong = [];
            arrMau  = new Set();
            for (i = 1; i <= p11Rows.length; i++) {         
                if(arrMau.has(p11Rows[i-1].MaMau)) continue;
                arrMau.add(p11Rows[i-1].MaMau);
                numbersColor.push({
                    value: i,
                    color: p11Rows[i-1],
                    isCurentColor: i === +color,
                    id: p11Rows[i-1].ID,
                    IDSearch: IDSearch,
                });
                j++;
            }
            setDungLuong = new Set();
            var j=1;
            for(i=1;i<=p11Rows.length;i++)
            {
                if(p11Rows[i-1].MaMau==numbersColor[+color-1].color.MaMau)
                {
                    if(setDungLuong.has(p11Rows[i-1].DungLuong)) continue;
                    setDungLuong.add(p11Rows[i-1].DungLuong);
                    arrDungLuong.push({
                        value: j,
                        id: p11Rows[i-1].ID,
                        DungLuong: p11Rows[i-1].DungLuong,
                        isCurentDL: j === +DL,
                    });
                    j++;
                }
            }
            var SP = [];
            for(i=1;i<=p11Rows.length;i++)
            {
                if(p11Rows[i-1].ID===arrDungLuong[DL-1].id) SP.push({
                    Gia: p11Rows[i-1].Gia,
                    LuotXem: p11Rows[i-1].LuotXem,
                    LuotMua:p11Rows[i-1].LuotMua,
                })
            }
            console.log(SP);
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
                SPCungLoai: p12Rows,
                SP: SP,
                SPCungNSX: p13Rows
            };
            res.render('productDetail/index', vm);
        });
});



module.exports = router;