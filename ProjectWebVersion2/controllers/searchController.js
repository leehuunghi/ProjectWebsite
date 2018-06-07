var express = require('express');
var searchRepo=require('../repos/searchRepo');
var router = express.Router();



router.get('/', (req, res) => {
    var tmp=req.session.textSearch;
    searchRepo.search(tmp).then(rows => {
        var vm = {
            countSearch: rows.length,
            textSearch: tmp,
            sanphamSearch: rows
        }; 
        res.render('search/index',vm);
    });
});

module.exports = router;