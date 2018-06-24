var db = require('../fn/db');

exports.updateAccount = (user) => {
    return new Promise((resolve, reject) => {
        var sql = `UPDATE users SET email = '${user.email}', hoten = '${user.fullname}'`;
        db.load(sql).then(rows => {
            console.log(rows[0]);
        }).catch(err => {
            reject(err);
        });
    });
}