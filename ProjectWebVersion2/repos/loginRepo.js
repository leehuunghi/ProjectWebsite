var db = require('../fn/db');

exports.check = (user) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from users where Email = '${user.username}' and MatKhau = '${user.password}'`;
        db.load(sql).then(rows => {
            if (rows.length === 0) {
                resolve(null);
            } else {
                resolve(rows[0]);
            }
        }).catch(err => {
           
            reject(err);
        });
    });
}