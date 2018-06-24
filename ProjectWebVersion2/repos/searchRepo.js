var db = require('../fn/db');

exports.search=(text)=>{
    var sql =`select * from sanpham where TenSanPham like '%${text}%'`
    return db.load(sql);
}

exports.searchLoaiSP=(text)=>{
    var sql =`select * from sanpham where LoaiSP like '%${text}%'`
    return db.load(sql);
}

exports.searchNSX=(text)=>{
    var sql =`select * from sanpham where NhaSanXuat like '%${text}%'`
    return db.load(sql);
}

exports.searchDanhGia=(text)=>{
    var sql =`select * from sanpham where Rate >= ${text}`
    return db.load(sql);
}


exports.nsx = () => {
	var sql = `select distinct(NhaSanXuat) as tenNSX from sanpham LIMIT 7`;
    return db.load(sql);
}

exports.nsxMore=()=>{
    var sql=`select distinct(NhaSanXuat) from sanpham limit 1000 offset 7`
    return db.load(sql);
}

exports.khoangGia=(min, max)=>{
    var sql=`select * from sanpham where GiaDaiDien >= ${min} and GiaDaiDien <= ${max}`
    return db.load(sql);
}
