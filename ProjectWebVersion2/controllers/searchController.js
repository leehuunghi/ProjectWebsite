var express = require('express');
var searchRepo = require('../repos/searchRepo');
var router = express.Router();

router.get('/', (req, res) => {
    var loai = req.query.LoaiSP;
    var keyword = req.query.keyword;
    var nsx = req.query.nsx;
    if ((keyword === undefined || keyword == "") && (loai === undefined || loai == "")
            && (nsx === undefined || nsx == "")) {
        res.render('search/searchEmpty')
    }
    else {
        if (keyword != null) {

            searchRepo.search(keyword).then(rows => {
                for (var j = 0; j < rows.length; j++) {
                    var temp = (rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        rows[j].Rate = (rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        rows[j].Rate = (rows[j].Rate * 10 - temp) / 10
                    }
                }

                var vm = {
                    countSearch: rows.length,
                    textSearch: keyword,
                    sanphamSearch: rows
                };
                res.render('search/index', vm);
            });
        }

        if (loai != null) {
            if (loai === "DienThoaiDiDong") loai = "Điện";
            if (loai === "MayTinhBang") loai = "Máy";
            searchRepo.searchLoaiSP(loai).then(rows => {
                for (var j = 0; j < rows.length; j++) {
                    var temp = (rows[j].Rate * 10) % 10;
                    if (temp > 5) {

                        rows[j].Rate = (rows[j].Rate * 10 - temp) / 10 + 1

                    }
                    else {
                        rows[j].Rate = (rows[j].Rate * 10 - temp) / 10
                    }
                }

                var vm = {
                    countSearch: rows.length,
                    textSearch: loai,
                    sanphamSearch: rows
                };
                res.render('search/index', vm);
            });
        }
        if (nsx!=null){
            searchRepo.searchNSX(nsx).then(rows => {
                for (var j = 0; j < rows.length; j++) {
                    var temp = (rows[j].Rate * 10) % 10;
                    if (temp > 5) {
                        rows[j].Rate = (rows[j].Rate * 10 - temp) / 10 + 1
                    }
                    else {
                        rows[j].Rate = (rows[j].Rate * 10 - temp) / 10
                    }
                }
                var vm = {
                    countSearch: rows.length,
                    textSearch: nsx,
                    sanphamSearch: rows
                };
                res.render('search/index', vm);
            });
        }

    }
});

module.exports = router;