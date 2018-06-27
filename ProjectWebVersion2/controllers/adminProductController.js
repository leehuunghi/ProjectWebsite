var express = require('express');
var adminProductRepo = require('../repos/adminProductRepo');
var moment = require('moment');
var router = express.Router();

router.get('/', (req, res) => {

});

router.post('/add', (req, res) => {

    var inputNSX;
    if (req.body.nsx == "Khác") {
        inputNSX = req.body.nsxmoi;
    }
    else {
        inputNSX = req.body.nsx;
    }

    var prod = {
        ten : req.body.tensp,
        xem: 0,
        mua: 0,
        ngaythem: req.body.date,
        guar: req.body.baohanh,
        rate: 0,
        type: req.body.loaisp,
        manu: inputNSX,
        permission: 0
    };
    adminProductRepo.add(prod).then(value=>{
        res.redirect("/admin/sanpham");
    }).catch(err =>{
        var vm={
            popup: true,
            prod: prod,
        }
        res.render('admin/sanpham',vm);
    })}
);

module.exports = router;