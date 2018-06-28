var express = require('express');
var searchRepo = require('../repos/searchRepo');
var router = express.Router();
var config = require('../config/config');

router.get('/', (req, res) => {

    var page = req.query.page;
    
    if (!page) {
        page = 1;
    }
    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;

    var loai = req.query.LoaiSP;
    var keyword = req.query.keyword;
    var nsx = req.query.nsx;
    var danhgia = req.query.danhgia;

    var moneymin= req.query.moneymin;
    var moneymax=req.query.moneymax;
    var minscreen=req.query.minscreen;
    var maxscreen=req.query.maxscreen;
    var cmrmin=req.query.cmrmin;
    var cmrmax=req.query.cmrmax;
    var cmrtruocmin=req.query.cmrtruocmin;
    var cmrtruocmax=req.query.cmrtruocmax;
    var pinmin=req.query.pinmin;
    var pinmax=req.query.pinmax;
    var ram=req.query.ram;

    var p=searchRepo.count();
    var p1 = searchRepo.nsx();
    var p2 = searchRepo.nsxMore();
    var p3 = searchRepo.search(keyword);
    var p5 = searchRepo.searchNSX(nsx);
    var p6 = searchRepo.searchDanhGia(danhgia);
    var p7 = searchRepo.khoangGia(moneymin, moneymax);
    var p8=searchRepo.Screen(minscreen,maxscreen);
    var p9=searchRepo.CMRSau(cmrmin,cmrmax);
    var p10=searchRepo.CMRTruoc(cmrtruocmin,cmrtruocmax);
    var p11=searchRepo.DungLuongPin(pinmin,pinmax);
    var p12=searchRepo.BoNho(ram);

    if ((keyword === undefined || keyword == "") && (loai === undefined || loai == "")
        && (nsx === undefined || nsx == "") && (danhgia === undefined || danhgia == "")
        && (moneymin === undefined || moneymin == "") && (moneymax === undefined || moneymax == "")
        && (minscreen === undefined || minscreen == "") && (maxscreen === undefined || maxscreen == "")
        && (cmrmin === undefined || cmrmin == "") && (cmrmax === undefined || cmrmax == "")
        && (cmrtruocmin === undefined || cmrtruocmax == "") && (cmrtruocmin === undefined || cmrtruocmax == "")
        && (pinmin === undefined || pinmin == "") && (pinmax === undefined || pinmax == "")
        && (ram === undefined || ram == "")) {
        res.render('search/searchEmpty')
    }
    else {
        if (keyword != null) {

            Promise.all([p1, p2, p3,p]).then(([p1Rows, p2Rows, p3Rows,countRows]) => {
                for (var j = 0; j < p3Rows.length; j++) {
                    var temp = (p3Rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        p3Rows[j].Rate = (p3Rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        p3Rows[j].Rate = (p3Rows[j].Rate * 10 - temp) / 10
                    }

                }
                var total = countRows[0].total;
                var nPages = total / config.PRODUCTS_PER_PAGE;
                console.log(nPages);
                if (total % config.PRODUCTS_PER_PAGE > 0) {
                    nPages++;
                }
            
                var prePage=+page-1;
                var nextPage=+page+1;
                var numbers = [];
                for (i = 1; i <= nPages; i++) {
                    numbers.push({
                        value: i,
                        isCurPage: i === +page,
                    });
                }

                var vm = {
                    page_numbers: numbers,
                    prePage:prePage,
                    nextPage:nextPage,
                    nsx: p1Rows,
                    hasMoreNSX: p2Rows.length > 0,
                    nsxMore: p2Rows,
                    countSearch: p3Rows.length,
                    textSearch: keyword,
                    sanphamSearch: p3Rows
                };
                console.log(vm.page_numbers);
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

        if (minscreen!=null && maxscreen != null)
        {
            Promise.all([p1, p2, p8]).then(([p1Rows, p2Rows, p8Rows]) => {
                for (var j = 0; j < p8Rows.length; j++) {
                    var temp = (p8Rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        p8Rows[j].Rate = (p8Rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        p8Rows[j].Rate = (p8Rows[j].Rate * 10 - temp) / 10
                    }
                }
                var screen='kích thước màn hình '+ minscreen+'" đến '+maxscreen+'"';
                var vm = {
                    nsx: p1Rows,
                    hasMoreNSX: p2Rows.length > 0,
                    nsxMore: p2Rows,
                    countSearch: p8Rows.length,
                    textSearch: screen,
                    sanphamSearch: p8Rows
                };
                res.render('search/index', vm);
            });
        }
        
        if (cmrmin!=null && cmrmax != null)
        {
            Promise.all([p1, p2, p9]).then(([p1Rows, p2Rows, p9Rows]) => {
                for (var j = 0; j < p9Rows.length; j++) {
                    var temp = (p9Rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        p9Rows[j].Rate = (p9Rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        p9Rows[j].Rate = (p9Rows[j].Rate * 10 - temp) / 10
                    }
                }
                var camera='độ phân giải camera sau '+ cmrmin+'MP đến '+cmrmax+'MP';
                var vm = {
                    nsx: p1Rows,
                    hasMoreNSX: p2Rows.length > 0,
                    nsxMore: p2Rows,
                    countSearch: p9Rows.length,
                    textSearch: camera,
                    sanphamSearch: p9Rows
                };
                res.render('search/index', vm);
            });
        }

        if (cmrtruocmin!=null && cmrtruocmax != null)
        {
            Promise.all([p1, p2, p10]).then(([p1Rows, p2Rows, p10Rows]) => {
                for (var j = 0; j < p10Rows.length; j++) {
                    var temp = (p10Rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        p10Rows[j].Rate = (p10Rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        p10Rows[j].Rate = (p10Rows[j].Rate * 10 - temp) / 10
                    }
                }
                var camera='độ phân giải camera trước '+ cmrtruocmin+'MP đến '+cmrtruocmax+'MP';
                var vm = {
                    nsx: p1Rows,
                    hasMoreNSX: p2Rows.length > 0,
                    nsxMore: p2Rows,
                    countSearch: p10Rows.length,
                    textSearch: camera,
                    sanphamSearch: p10Rows
                };
                res.render('search/index', vm);
            });
        }
        if (pinmin!=null && pinmax != null)
        {
            Promise.all([p1, p2, p11]).then(([p1Rows, p2Rows, p11Rows]) => {
                for (var j = 0; j < p11Rows.length; j++) {
                    var temp = (p11Rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        p11Rows[j].Rate = (p11Rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        p11Rows[j].Rate = (p11Rows[j].Rate * 10 - temp) / 10
                    }
                }
                var pin='dung lượng pin từ '+ pinmin+'mAh đến '+pinmax+'mAh';
                var vm = {
                    nsx: p1Rows,
                    hasMoreNSX: p2Rows.length > 0,
                    nsxMore: p2Rows,
                    countSearch: p11Rows.length,
                    textSearch: pin,
                    sanphamSearch: p11Rows
                };
                res.render('search/index', vm);
            });
        }

        if (ram != null) {

            Promise.all([p1, p2, p12]).then(([p1Rows, p2Rows, p12Rows]) => {
                for (var j = 0; j < p12Rows.length; j++) {
                    var temp = (p12Rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        p12Rows[j].Rate = (p12Rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        p12Rows[j].Rate = (p12Rows[j].Rate * 10 - temp) / 10
                    }
                }
                var textram='dung lượng '+ram+'GB';
                var vm = {
                    nsx: p1Rows,
                    hasMoreNSX: p2Rows.length > 0,
                    nsxMore: p2Rows,
                    countSearch: p12Rows.length,
                    textSearch: textram,
                    sanphamSearch: p12Rows
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