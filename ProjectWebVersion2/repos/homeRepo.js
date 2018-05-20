var db = require('../fn/db');

exports.loadBestSeller = () => {
    var sql = 'select * from (select * from sanpham order by LuotMua desc limit 1) r order by r.LuotMua ASC limit 1';
    return db.load(sql);
};

exports.loadSecondBestSeller = () => {
    var sql = 'select * from (select * from sanpham order by LuotMua desc limit 2) r order by r.LuotMua ASC limit 1';
    return db.load(sql);
};

exports.loadThirdBestSeller = () => {
    var sql = 'select * from (select * from sanpham order by LuotMua desc limit 3) r order by r.LuotMua ASC limit 1';
    return db.load(sql);
};

exports.loadForthBestSeller = () => {
    var sql = 'select * from (select * from sanpham order by LuotMua desc limit 4) r order by r.LuotMua ASC limit 1';
    return db.load(sql);
};

exports.loadFifthBestSeller = () => {
    var sql = 'select * from (select * from sanpham order by LuotMua desc limit 5) r order by r.LuotMua ASC limit 1';
    return db.load(sql);
};

exports.loadOtherBestSellers = () => {
    var sql = 'select * from (select * from sanpham order by LuotMua desc limit 10) r order by r.LuotMua desc limit 5,5';
    return db.load(sql);
};

exports.loadMostView = () => {
    var sql = 'select * from (select * from sanpham order by LuotXem desc limit 1) r order by r.LuotXem ASC limit 1';
    return db.load(sql);
};

exports.loadSecondMostView = () => {
    var sql = 'select * from (select * from sanpham order by LuotXem desc limit 2) r order by r.LuotXem ASC limit 1';
    return db.load(sql);
};

exports.loadThirdMostView = () => {
    var sql = 'select * from (select * from sanpham order by LuotXem desc limit 3) r order by r.LuotXem ASC limit 1';
    return db.load(sql);
};

exports.loadForthMostView = () => {
    var sql = 'select * from (select * from sanpham order by LuotXem desc limit 4) r order by r.LuotXem ASC limit 1';
    return db.load(sql);
};

exports.loadFifthMostView = () => {
    var sql = 'select * from (select * from sanpham order by LuotXem desc limit 5) r order by r.LuotXem ASC limit 1';
    return db.load(sql);
};

exports.loadOtherMostViews = () => {
    var sql = 'select * from (select * from sanpham order by LuotXem desc limit 10) r order by r.LuotXem desc limit 5,5';
    return db.load(sql);
};

exports.loadLatest = () => {
    var sql = 'select * from (select * from sanpham order by NgayThem desc limit 1) r order by r.NgayThem ASC limit 1';
    return db.load(sql);
};

exports.loadSecondLatest = () => {
    var sql = 'select * from (select * from sanpham order by NgayThem desc limit 2) r order by r.NgayThem ASC limit 1';
    return db.load(sql);
};

exports.loadThirdLatest = () => {
    var sql = 'select * from (select * from sanpham order by NgayThem desc limit 3) r order by r.NgayThem ASC limit 1';
    return db.load(sql);
};

exports.loadForthLatest = () => {
    var sql = 'select * from (select * from sanpham order by NgayThem desc limit 4) r order by r.NgayThem ASC limit 1';
    return db.load(sql);
};

exports.loadFifthLatest = () => {
    var sql = 'select * from (select * from sanpham order by NgayThem desc limit 5) r order by r.NgayThem ASC limit 1';
    return db.load(sql);
};

exports.loadOtherLatests = () => {
    var sql = 'select * from (select * from sanpham order by NgayThem desc limit 10) r order by r.NgayThem desc limit 5,5';
    return db.load(sql);
};