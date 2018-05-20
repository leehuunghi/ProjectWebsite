var db = require('../fn/db');

exports.add = (value) => {
    var sql = `INSERT INTO users(email,hoten,matkhau,cmnd) VALUES ('${value.iEmail}', '${value.iHoTen}', '${value.iMatKhau}', '${value.iCMND}')`;
    return db.save(sql);
}