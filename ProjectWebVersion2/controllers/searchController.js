var express = require('express');
var searchRepo = require('../repos/searchRepo');
var router = express.Router();



router.get('/', (req, res) => {
    var keyword=req.query.keyword;
    if (keyword === undefined||keyword=="") {
        res.render('search/searchEmpty')
    }
    else {
        searchRepo.search(keyword).then(rows => {
            var vm = {
                countSearch: rows.length,
                textSearch: req.query.retUrl,
                sanphamSearch: rows
            };
            res.render('search/index', vm);
        });
    }
});

module.exports = router;