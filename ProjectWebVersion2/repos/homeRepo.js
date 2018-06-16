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