var express = require('express');

var router = express.Router();
var homeRepo=require('../repos/homeRepo');


router.get('/', (req, res) => {
    var s1 = homeRepo.loadBestSeller();
    var s2 = homeRepo.loadSecondBestSeller();
    var s3 = homeRepo.loadThirdBestSeller();
    var s4 = homeRepo.loadForthBestSeller();
    var s5 = homeRepo.loadFifthBestSeller();
    var s6 = homeRepo.loadOtherBestSellers();
    var v1 = homeRepo.loadMostView();
    var v2 = homeRepo.loadSecondMostView();
    var v3 = homeRepo.loadThirdMostView();
    var v4 = homeRepo.loadForthMostView();
    var v5 = homeRepo.loadFifthMostView();
    var v6 = homeRepo.loadOtherMostViews();
    var l1 = homeRepo.loadLatest();
    var l2 = homeRepo.loadSecondLatest();
    var l3 = homeRepo.loadThirdLatest();
    var l4 = homeRepo.loadForthLatest();
    var l5 = homeRepo.loadFifthLatest();
    var l6 = homeRepo.loadOtherLatests();
    Promise.all([s1, s2, s3, s4, s5, s6, v1, v2, v3, v4, v5, v6, l1, l2, l3, l4, l5, l6]).then(([rows1, rows2, rows3, rows4, rows5, rows6, rows7, rows8, rows9, rows10, rows11, rows12, rows13, rows14, rows15, rows16, rows17, rows18]) => {      
        var vm = {
            s1: rows1,
            s2: rows2,
            s3: rows3,
            s4: rows4,
            s5: rows5,
            s6: rows6,
            v1: rows7,
            v2: rows8,
            v3: rows9,
            v4: rows10,
            v5: rows11,
            v6: rows12,
            l1: rows13,
            l2: rows14,
            l3: rows15,
            l4: rows16,
            l5: rows17,
            l6: rows18,
        };
        res.render('home/index',vm);
    });
        // homeRepo.loadSecondBestSeller().then(rows => {
        //     console.log(rows);
        //     var vm = {
        //         sanPhamMoiNhi: rows
        //     };
        //     res.render('home/index',vm);
        // });
});

module.exports = router;