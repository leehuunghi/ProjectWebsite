var db = require('../fn/db');

exports.pushDonHang  = (IDUser, IDsp, sl) => {
    var sql = `call IDCart(${IDUser},${IDsp},${sl})`;
    return db.load(sql);
}