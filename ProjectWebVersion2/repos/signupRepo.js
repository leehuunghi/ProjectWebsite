var db = require('../fn/db');

exports.find = () => {
    var sql = 'select * from users';
    return db.load(sql);
}