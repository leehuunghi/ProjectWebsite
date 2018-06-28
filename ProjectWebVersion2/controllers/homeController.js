var express = require('express');

var router = express.Router();
var homeRepo=require('../repos/homeRepo');


router.get('/', (req, res) => {
    var sale = homeRepo.loadBestSellers();
    console.log("Thu ne");
    var view = homeRepo.loadMostViews();
    var late = homeRepo.loadLatests();
    var randOEM = homeRepo.randOEM();
    var type = homeRepo.type();
    Promise.all([sale, view, late, randOEM, type]).then(([rows1, rows2, rows3, rows4, rows5]) => {      
        var vm = {
            sale: rows1,
            othersales: rows1.slice(5),
            view: rows2,
            otherviews: rows2.slice(5),
            late: rows3,
            otherlates: rows3.slice(5),
            randOEM: rows4,
            type: rows5,
        };
        res.render('home/index',vm);
    });
});

module.exports = router;