var db = require('../fn/db');
var config = require('../config/config');

exports.loadAll = () => {
    var sql = 'select * from sanpham as a, sanphamct as b where a.ID=b.ID0';
    return db.load(sql);
}


exports.loadAllPage = (offset) => {
    var sql = `select * from sanpham limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadSanPham = (id) => {
    var sql = `select * from sanpham where ID= ${id}`;
    return db.load(sql);
}

exports.count = () => {
	var sql = `select count(*) as total from sanpham `;
    return db.load(sql);
}

exports.search=(text)=>{
    var sql =`select * from sanpham as a, sanphamct as b
    where a.ID=b.ID0 and a.TenSanPham= '${text}' limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`
    return db.load(sql);
}