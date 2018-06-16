var express = require('express');

var router = express.Router();
var homeRepo=require('../repos/homeRepo');


router.get('/', (req, res) => {
    var sale = homeRepo.loadBestSellers();
    var view = homeRepo.loadMostViews();
    var late = homeRepo.loadLatests();
    Promise.all([sale, view, late]).then(([rows1, rows2, rows3]) => {      
        var vm = {
            sale: rows1,
            othersales: rows1.slice(5),
            view: rows2,
            otherviews: rows2.slice(5),
            late: rows3,
            otherlates: rows3.slice(5),
        };
        res.render('home/index',vm);
    });
});

module.exports = router;