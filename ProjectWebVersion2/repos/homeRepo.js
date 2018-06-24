var db = require('../fn/db');

exports.loadBestSellers = () => {
    var sql = 'select * from sanpham order by LuotMua desc limit 10';
    return db.load(sql);
};

exports.loadMostViews = () => {
    var sql = 'select * from sanpham order by LuotXem desc limit 10';
    return db.load(sql);
};

exports.loadLatests = () => {
    var sql = 'select * from sanpham order by NgayThem desc limit 10';
    return db.load(sql);
};

exports.randOEM = () => {
    var sql = 'select distinct(NhaSanXuat) from sanpham order by rand() limit 6';
    return db.load(sql);
};

exports.type = () => {
    var sql = 'select distinct LoaiSP from sanpham';
    return db.load(sql);
};