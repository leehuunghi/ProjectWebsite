var db = require('../fn/db');

exports.updateAccount = (user,id) => {
    return new Promise((resolve, reject) => {
        var sql = `UPDATE users SET HoTenReceiver = '${user.HoTenReceiver}',
        SDTReceiver = '${user.SDTReceiver}', DiaChiReceiver = '${user.DiaChiReceiver}'
        where ID = '${id}'`;
        db.load(sql).then(()=>{
            resolve();
        }).catch(err => {
            reject(err);
        });
    });
}
