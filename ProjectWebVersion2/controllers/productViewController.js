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
  
    Promise.all([p1, p2]).then(([pRows, countRows]) => {

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
        };
        res.render('productView/index', vm);
    });
});


module.exports = router;