var db = require('../fn/db');

exports.updateAccount = (user) => {
    return new Promise((resolve, reject) => {
        var sql = `UPDATE table_name SET field1 = new-value1, field2 = new-value2`;
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