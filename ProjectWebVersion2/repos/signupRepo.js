var db = require('../fn/db');

exports.add = (user) => {
    var sql = `INSERT INTO users(email,hoten,sdt,matkhau,cmnd,NgaySinh,gioitinh) VALUES ('${user.email}', '${user.fullname}','${user.phone}' ,'${user.password}', '${user.cmnd}', '${user.dob}','${user.sex}')`;
    return db.save(sql); 
}
