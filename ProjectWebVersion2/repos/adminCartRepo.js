var db = require('../fn/db');



exports.loadAll = () => {
    var sql = `select a.ID, b.HoTen, b.HoTenReceiver, b.DiaChiReceiver, a.TinhTrang, a.TongTien from donhang as a, users as b where a.ID0 = b.ID`;
    return db.load(sql);
}