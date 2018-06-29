var express = require('express');
var packageDetailRepo = require('../repos/packageDetailRepo');
var router = express.Router();

router.get('/', (req, res) => {
    var IDDonHang = req.query.IDDonHang;
    var count = -1;
    var arrDonHang = [];
    var status = true;
    var isXacNhan=false;
    var isGiaoHang=false;
    var isNhanHang=false;
    packageDetailRepo.loadChiTietDonHang(IDDonHang).then(rows => {
        setDonHang = new Set();
        for (i = 0; i < rows.length; i++) {
            if (setDonHang.has(rows[i].MaDonHang)) {
                arrDonHang[count].arrSanPham.push(rows[i]);
            }
            else {
                count++;
                setDonHang.add(rows[i].MaDonHang);
                if (rows[i].TinhTrangDonHang == 'Nhận hàng') {
                    status = false;
                    isNhanHang=true;
                }
                if (rows[i].TinhTrangDonHang == 'Xác nhận') {
                    isXacNhan=true;
                }
                if (rows[i].TinhTrangDonHang == 'Giao hàng') {
                    isGiaoHang=true;
                }
                arrDonHang.push({
                    MaDonHang: rows[i].MaDonHang,
                    TinhTrangDonHang: rows[i].TinhTrangDonHang,
                    TongTienDonHang: rows[i].TongTienDonHang,
                    arrSanPham: new Array(),
                    status: status,
                    isXacNhan: isXacNhan,
                    isGiaoHang: isGiaoHang,
                    isNhanHang: isNhanHang,
                    DiaChiNguoiNhan: rows[i].DiaChiNguoiNhan,
                    SDTNguoiNhan: rows[i].SDTNguoiNhan,
                    PhuongThucThanhToan: rows[i].PhuongThucThanhToan,
                });
                arrDonHang[count].arrSanPham.push(rows[i]);
            }
        }


        var vm = {
            package: arrDonHang,
        }
        res.render('packageDetail/index', vm);
    });
});

module.exports = router;