var express = require('express');

var router = express.Router();
var packageRepo = require('../repos/packageRepo');

router.get('/', (req, res) => {
    var IDUser=req.session.user.ID;
    var count = -1;
    var arrDonHang = [];
    packageRepo.loadDonHang(IDUser).then(rows=>{
        setDonHang = new Set();
        for(i=0; i< rows.length; i++){
            if(setDonHang.has(rows[i].MaDonHang))
            {
                arrDonHang[count].arrSanPham.push(rows[i]);
            }
            else{
                count++;
                setDonHang.add(rows[i].MaDonHang);
                arrDonHang.push({
                    MaDonHang: rows[i].MaDonHang,
                    TinhTrangDonHang: rows[i].TinhTrangDonHang,
                    TongTienDonHang: rows[i].TongTienDonHang,
                    arrSanPham: new Array(),
                });
                arrDonHang[count].arrSanPham.push(rows[i]);
                
            }
        }

        var vm={
            package: arrDonHang
        }
        res.render('package/index',vm);
    });
});

module.exports = router;