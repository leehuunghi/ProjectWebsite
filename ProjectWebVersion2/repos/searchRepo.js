var db = require('../fn/db');

exports.search=(text)=>{
    var sql =`select * from sanpham where TenSanPham like '%${text}%'`
    return db.load(sql);
}

exports.searchLoaiSP=(text)=>{
    var sql =`select * from sanpham where LoaiSP like '%${text}%'`
    return db.load(sql);
}

exports.searchCMRSau=(text)=>{
    var sql =`select * from sanpham where LoaiSP like '%${text}%'`
    return db.load(sql);
}

exports.searchNSX=(text)=>{
    var sql =`select * from sanpham where NhaSanXuat like '%${text}%'`
    return db.load(sql);
}
