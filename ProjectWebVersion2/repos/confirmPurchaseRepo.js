var db = require('../fn/db');

exports.pushDonHang  = (IDUser, IDsp, sl) => {
    var sql = `call IDCart(${IDUser},${IDsp},${sl})`;
    return db.load(sql);
}

exports.capNhatTinhTrangDonHang  = (IDUser) => {
    var sql = `call CapNhatTinhTrang(${IDUser})`;
    return db.load(sql);
}