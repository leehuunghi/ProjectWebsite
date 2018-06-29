var express = require('express');
var adminProductRepo = require('../repos/adminProductRepo');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/index', {layout: false});
});

router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard', {layout: 'admin.handlebars'});
});

router.get('/loaisanpham', (req, res) => {
    adminProductRepo.loaiSP().then(rows=>{
        vm={
            LoaiSP: rows,
            layout: 'admin.handlebars',
        }
        res.render('admin/loaisanpham', vm);
    });
});

router.get('/nsx', (req, res) => {
    adminProductRepo.nsx().then(rows=>{
        vm={
            NSX: rows,
            layout: 'admin.handlebars',
        }
        res.render('admin/nsx', vm);
    });
});

router.get('/sanpham', (req, res) => {
    var sp = adminProductRepo.loadSP();
    Promise.all([sp]).then(([rows1]) => {      
        var vm = {
            sp: rows1,
            layout: 'admin.handlebars',
        };
        res.render('admin/sanpham',vm);
    });
   
});

router.get('/donhang', (req, res) => {
    res.render('admin/donhang', {layout: 'admin.handlebars'});
});

router.get('/nguoidung', (req, res) => {
    res.render('admin/nguoidung', {layout: 'admin.handlebars'});
});

router.post('/sanpham/add', (req,res)=>{
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
            prod: prod,
            layout: 'admin.handlebars',
        }
        res.render('admin/sanpham',vm);
    })
})

router.post('/loaisanpham', (req,res)=>{
    var inputLoaiSP=req.body.TenLoai;
    console.log(inputLoaiSP);
    res.render('admin/loaisanpham',vm);
})

router.post('/nsx', (req,res)=>{
    res.render('admin/nsx',vm);
})

module.exports = router;