var db = require('../fn/db');

exports.loadNSX = () => {
    var sql = `select * from nhasanxuat`;
    return db.load(sql);
};
