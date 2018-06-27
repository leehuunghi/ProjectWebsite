var db = require('../fn/db');

exports.loadAccount = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from users where ID = ${id}`;
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
