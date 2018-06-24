var express = require('express');
var searchRepo = require('../repos/searchRepo');
var router = express.Router();

router.get('/', (req, res) => {
    var loai = req.query.LoaiSP;
    var keyword = req.query.keyword;
    var nsx = req.query.nsx;
    var danhgia = req.query.danhgia;

    var moneymin= req.query.moneymin;
    var moneymax=req.query.moneymax;

    var p1 = searchRepo.nsx();
    var p2 = searchRepo.nsxMore();
    var p3 = searchRepo.search(keyword);
    var p5 = searchRepo.searchNSX(nsx);
    var p6 = searchRepo.searchDanhGia(danhgia);
    var p7 = searchRepo.khoangGia(moneymin, moneymax);

    if ((keyword === undefined || keyword == "") && (loai === undefined || loai == "")
        && (nsx === undefined || nsx == "") && (danhgia === undefined || danhgia == "")
        && (moneymin === undefined || moneymin == "") && (moneymax === undefined || moneymax == "")) {
        res.render('search/searchEmpty')
    }
    else {
        if (keyword != null) {

            Promise.all([p1, p2, p3]).then(([p1Rows, p2Rows, p3Rows]) => {
                for (var j = 0; j < p3Rows.length; j++) {
                    var temp = (p3Rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        p3Rows[j].Rate = (p3Rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        p3Rows[j].Rate = (p3Rows[j].Rate * 10 - temp) / 10
                    }
                }

                var vm = {
                    nsx: p1Rows,
                    hasMoreNSX: p2Rows.length > 0,
                    nsxMore: p2Rows,
                    countSearch: p3Rows.length,
                    textSearch: keyword,
                    sanphamSearch: p3Rows
                };
                res.render('search/index', vm);
            });
        }

        if (loai != null) {
            if (loai === "DienThoaiDiDong") loai = "Điện thoại di động";
            if (loai === "MayTinhBang") loai = "Máy tính bảng";
            var p4 = searchRepo.searchLoaiSP(loai);
            Promise.all([p1, p2, p4]).then(([p1Rows, p2Rows, p4Rows]) => {
                for (var j = 0; j < p4Rows.length; j++) {
                    var temp = (p4Rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        p4Rows[j].Rate = (p4Rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        p4Rows[j].Rate = (p4Rows[j].Rate * 10 - temp) / 10
                    }
                }

                var vm = {
                    nsx: p1Rows,
                    hasMoreNSX: p2Rows.length > 0,
                    nsxMore: p2Rows,
                    countSearch: p4Rows.length,
                    textSearch: loai,
                    sanphamSearch: p4Rows
                };
                res.render('search/index', vm);
            });
        }

        if (nsx != null) {

            Promise.all([p1, p2, p5]).then(([p1Rows, p2Rows, p5Rows]) => {
                for (var j = 0; j < p5Rows.length; j++) {
                    var temp = (p5Rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        p5Rows[j].Rate = (p5Rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        p5Rows[j].Rate = (p5Rows[j].Rate * 10 - temp) / 10
                    }
                }

                var vm = {
                    nsx: p1Rows,
                    hasMoreNSX: p2Rows.length > 0,
                    nsxMore: p2Rows,
                    countSearch: p5Rows.length,
                    textSearch: nsx,
                    sanphamSearch: p5Rows
                };
                res.render('search/index', vm);
            });
        }

        if (danhgia != null) {
            Promise.all([p1, p2, p6]).then(([p1Rows, p2Rows, p6Rows]) => {
                for (var j = 0; j < p6Rows.length; j++) {
                    var temp = (p6Rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        p6Rows[j].Rate = (p6Rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        p6Rows[j].Rate = (p6Rows[j].Rate * 10 - temp) / 10
                    }
                }

                danhgia = 'ít nhất ' + danhgia + ' sao';
                var vm = {
                    nsx: p1Rows,
                    hasMoreNSX: p2Rows.length > 0,
                    nsxMore: p2Rows,
                    countSearch: p6Rows.length,
                    textSearch: danhgia,
                    sanphamSearch: p6Rows
                };
                res.render('search/index', vm);
            });
        }

        if (moneymin!=null && moneymax != null)
        {
            Promise.all([p1, p2, p7]).then(([p1Rows, p2Rows, p7Rows]) => {
                for (var j = 0; j < p7Rows.length; j++) {
                    var temp = (p7Rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        p7Rows[j].Rate = (p7Rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        p7Rows[j].Rate = (p7Rows[j].Rate * 10 - temp) / 10
                    }
                }
                var gia='khoảng giá '+ moneymin+'VNĐ đến '+moneymax+'VNĐ';
                var vm = {
                    nsx: p1Rows,
                    hasMoreNSX: p2Rows.length > 0,
                    nsxMore: p2Rows,
                    countSearch: p7Rows.length,
                    textSearch: gia,
                    sanphamSearch: p7Rows
                };
                res.render('search/index', vm);
            });
        }

    }

});

router.post('/', (req, res) => {
    res.redirect(`/search?moneymin=${req.body.from}&&moneymax=${req.body.to}`);
});


module.exports = router;