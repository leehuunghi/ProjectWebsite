var db = require('../fn/db');

exports.loadNSX = () => {
    var sql = `select distinct(NhaSanXuat) from sanpham`;
    return db.load(sql);
};
