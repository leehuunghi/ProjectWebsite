var db = require('../fn/db');
var config = require('../config/config');

exports.loadSanPham = (id) => {
    var sql = `select * from sanpham where ID= ${id}`;
    return db.load(sql);
}

exports.loadSanPhamct=(id)=>{
    var sql=`select * from sanphamct where ID0=${id}`;
    return db.load(sql);
}




