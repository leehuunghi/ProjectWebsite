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
    var nsx = adminProductRepo.loadNSX();
    Promise.all([sp, nsx]).then(([rows1, rows2]) => {      
        var vm = {
            sp: rows1,
            nsx: rows2,
            layout: 'admin.handlebars',
            modalEdit: false,
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

router.post('/sanpham/sua', (req, res) => {

    var sp = adminProductRepo.loadSP();
    var callEditSP = adminProductRepo.calleditSP(req.body.idedit);
    var callEditSPCT = adminProductRepo.calleditSPCT(req.body.idedit);
    var callEditMT = adminProductRepo.calleditMT(req.body.idedit);
    var callEditTS = adminProductRepo.calleditTS(req.body.idedit);
    var nsxU = adminProductRepo.loadNSX();

    Promise.all([sp,callEditSP,callEditSPCT,callEditMT,callEditTS,nsxU]).then(([rows1, rows2, rows3, rows4, rows5, rows6]) => {
        var vm = {
            sp: rows1,
            prod: rows2,
            ver: rows3,
            mota: rows4,
            thongso: rows5,
            nsxU: rows6,
            modalEdit: true,
            layout: 'admin.handlebars',
        };
        console.log(vm);
        res.render('admin/sanpham',vm);
    });
})

router.post('/sanpham/xoa', (req, res) => {
    adminProductRepo.remove(req.body.idxoa).then(value=>{
        res.redirect("/admin/sanpham");
    })
});

router.post('/sanpham/suaprod', (req, res) => {
    var inputNSX;
    if (req.body.nsx == "Khác") {
        inputNSX = req.body.nsxmoi;
    }
    else {
        inputNSX = req.body.nsx;
    }
    adminProductRepo.suaProd(req.body.idsuaprod, req.body.tensp, req.body.loaisp, inputNSX, req.body.baohanh).then(value=>{
        console.log('OK');
        res.redirect("/admin/sanpham");
    })
});

router.post('/sanpham/suaver1', (req, res) => {
    console.log(req.body.dungluong);
    adminProductRepo.suaVer1(req.body.id0suaver, req.body.idsuaver, req.body.tenmau, req.body.mamau, req.body.gia, req.body.dungluong, req.body.soluong).then(value=>{
        res.redirect("/admin/sanpham");
    })
});

router.post('/sanpham/suaver2', (req, res) => {
    console.log(req.body.soluong);
    adminProductRepo.suaVer2(req.body.id0suaVer2, req.body.idsuaVer2, req.body.tenmau2, req.body.mamau2, req.body.gia2, req.body.dungluong2, req.body.soluong2).then(value=>{
        res.redirect("/admin/sanpham");
    })
});

router.post('/sanpham/suaver3', (req, res) => {
    console.log(req.body.soluong);
    adminProductRepo.suaVer3(req.body.id0suaVer3, req.body.idsuaVer3, req.body.tenmau3, req.body.mamau3, req.body.gia3, req.body.dungluong3, req.body.soluong3).then(value=>{
        res.redirect("/admin/sanpham");
    })
});

router.post('/sanpham/suaver4', (req, res) => {
    console.log(req.body.soluong);
    adminProductRepo.suaVer4(req.body.id0suaVer4, req.body.idsuaVer4, req.body.tenmau4, req.body.mamau4, req.body.gia4, req.body.dungluong4, req.body.soluong4).then(value=>{
        res.redirect("/admin/sanpham");
    })
});

router.post('/sanpham/suaver5', (req, res) => {
    console.log(req.body.soluong);
    adminProductRepo.suaVer5(req.body.id0suaVer5, req.body.idsuaVer5, req.body.tenmau, req.body.mamau5, req.body.gia5, req.body.dungluong5, req.body.soluong5).then(value=>{
        res.redirect("/admin/sanpham");
    })
});

router.post('/sanpham/suaver6', (req, res) => {
    console.log(req.body.soluong);
    adminProductRepo.suaVer6(req.body.id0suaVer6, req.body.idsuaVer6, req.body.tenmau, req.body.mamau6, req.body.gia6, req.body.dungluong6, req.body.soluong6).then(value=>{
        res.redirect("/admin/sanpham");
    })
});

module.exports = router;