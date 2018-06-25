var express = require('express');

var router = express.Router();
var productViewRepo=require('../repos/productViewRepo');
var config = require('../config/config');



router.get('/', (req, res) => {

    var page = req.query.page;
    
    if (!page) {
        page = 1;
    }

    var offset = (page - 1) * config.PRODUCTS_PER_PAGE;

    var p1 = productViewRepo.loadAllPage(offset);
    var p2 = productViewRepo.count();
    var p3 = productViewRepo.nsx();
    var p4 = productViewRepo.nsxMore();
  
    Promise.all([p1, p2,p3,p4]).then(([pRows, countRows,p3Rows,p4Rows]) => {

        for (var j=0;j<pRows.length;j++)
        {
        var temp = (pRows[j].Rate * 10) % 10;
        if (temp > 5) {
            
            pRows[j].Rate=(pRows[j].Rate * 10 - temp) / 10 + 1
           
        }
        else {
            pRows[j].Rate=(pRows[j].Rate * 10 - temp) / 10
        }
    }
        var total = countRows[0].total;
        var nPages = total / config.PRODUCTS_PER_PAGE;
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
            sanpham: pRows,
            noProducts: pRows.length === 0,
            page_numbers: numbers,
            nsx: p3Rows,
            hasMoreNSX: p4Rows.length >0 ,
            nsxMore: p4Rows,
            prePage:prePage,
            nextPage:nextPage
        };
        res.render('productView/index', vm);
    });
});

router.post('/', (req, res) => {
    res.redirect(`/search?keyword=${req.body.valueSearch}`);
});

module.exports = router;