var db = require('../fn/db');
var config = require('../config/config');

exports.loadSanPham = (id) => {
    var sql = `select * from sanpham where ID= ${id}`;
    return db.load(sql);
}

// exports.loadSanPhamct=(id)=>{
//     var sql=`select * from sanphamct where ID0=${id}`;
//     return db.load(sql);
// }

exports.countDanhGia=(id)=>{
    var sql=`select count(*) as rst from rate group by ID0 having ID0=${id}`;
    return db.load(sql);
}

exports.moTa=(id)=>{
    var sql=`select * from mota where ID0=${id} LIMIT 3`;
    return db.load(sql);
}

exports.moTaXemThem=(id)=>{
    var sql=`select * from mota  where ID0=${id} limit 1000 offset 3`
    return db.load(sql);
}

exports.demMoTaThem=(id)=>{
    var sql=`select count(*) as sum from mota  where ID0=${id}`
    return db.load(sql);
}

exports.slide=(id)=>{
    var sql=`select SoHinhSlide from sanphamct where ID0= ${id}`
    return db.load(sql);
}

exports.thongSo=(id)=>{
    var sql=`select * from thongso where ID0=${id} LIMIT 5`;
    return db.load(sql);
}

exports.thongSoThem=(id)=>{
    var sql=`select * from thongso where ID0=${id} limit 1000 offset 5`
    return db.load(sql);
}

exports.demthongSoThem=(id)=>{
    var sql=`select count(*) as tong from thongso where ID0=${id}`
    return db.load(sql);
}

exports.progressRate=(id,num)=>{
    var sql=`select count(*) as cntRate from rate where Rating=${num} group by ID0 having ID0=${id}`
    return db.load(sql);
}

exports.loadSanPhamCT=(id)=>{
    var sql=`select * from sanphamct where ID0=${id}`
    return db.load(sql);
}

exports.SPCungLoai=(id)=>{
    var sql=`select * from sanpham as a, sanphamct as b where a.ID=b.ID0 and a.LoaiSP in (select LoaiSP
from sanpham where ID=3) GROUP BY a.ID`
    return db.load(sql);
}





