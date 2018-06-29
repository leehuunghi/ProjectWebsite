
var db = require('../fn/db');

exports.add = (cart, item) => {
    for (i = cart.length - 1; i >= 0; i--) {
        if (cart[i].ProID == item.ProID) {
            cart[i].Quantity += item.Quantity;
            return;
        }
    }
    cart.push(item);
}

exports.insert = (IDUser, TongTien) => {
    var sql = `INSERT INTO donhang(ID0,TinhTrang,PhuongThuc ,ThoiGianDatHang,TongTien) VALUES ('${IDUser}', 'dh', 'dh',Now(), ${TongTien})`;
    return db.save(sql);
}

exports.remove = (cart, proId) => {
    for (var i = cart.length - 1; i >= 0; i--) {
        if (proId === cart[i].ProId) {
            cart.splice(i, 1);
            return;
        }
    }
}