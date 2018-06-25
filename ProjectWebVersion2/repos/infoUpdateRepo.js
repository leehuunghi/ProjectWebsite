var db = require('../fn/db');

exports.updateAccount = (user) => {
    return new Promise((resolve, reject) => {
        var sql = `UPDATE users SET hoten = '${user.fullname}' where email = '${user.email}'`;
        db.load(sql).then(()=>{
            resolve();
        }).catch(err => {
            reject(err);
        });
    });
}