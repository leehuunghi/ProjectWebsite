var db = require('../fn/db');

exports.updateAccount = (user) => {
    return new Promise((resolve, reject) => {
        var sql = `UPDATE users SET HoTen = '${user.HoTen}',
        Cmnd = '${user.Cmnd}', SDT = '${user.SDT}', NgaySinh = '${user.NgaySinh}',
        GioiTinh = '${user.GioiTinh}' where Email = '${user.Email}'`;
        db.load(sql).then(()=>{
            resolve();
        }).catch(err => {
            reject(err);
        });
    });
}

exports.checkPassword=(user)=>{
    var sql = `select * from users where Email = '${user.Email}' and MatKhau='${user.MatKhau}'`;
    return db.load(sql);
}