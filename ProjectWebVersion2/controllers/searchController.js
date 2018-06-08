var express = require('express');
var searchRepo=require('../repos/searchRepo');
var router = express.Router();



router.get('/', (req, res) => {
    searchRepo.search(req.query.retUrl).then(rows => {
        var vm = {
            countSearch: rows.length,
            textSearch: req.query.retUrl,
            sanphamSearch: rows
        }; 
        res.render('search/index',vm);
    });
});

module.exports = router;