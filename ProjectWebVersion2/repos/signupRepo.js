var db = require('../fn/db');

exports.add = (user) => {
    var sql = `INSERT INTO users(email,hoten,matkhau,cmnd,NgaySinh) VALUES ('${user.email}', '${user.fullname}', '${user.password}', '${user.cmnd}', '${user.dob}')`;
    return db.save(sql);
}