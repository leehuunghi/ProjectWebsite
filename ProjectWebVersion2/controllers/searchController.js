var express = require('express');
var searchRepo=require('../repos/searchRepo');
var router = express.Router();
var storage = require('node-persist');

storage.init({
    ttl : false
});

router.get('/', (req, res) => {
    var tmp=storage.getItem('textSearch');
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