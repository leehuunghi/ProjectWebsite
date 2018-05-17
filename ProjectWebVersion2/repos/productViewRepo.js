var db = require('../fn/db');

exports.loadAll = () => {
    var sql = 'select * from sanpham as a, sanphamct as b where a.ID=b.ID0';
    return db.load(sql);
}

// exports.loadAllByID = (ID) => {
//     var sql = `select * from sanpham where ID = ${ID}`;
//     return db.load(sql);
// }

// exports.loadAllByCat = (catId, offset) => {
//     var sql = `select * from products where CatID = ${catId} limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
//     return db.load(sql);
// }

// exports.countByCat = catId => {
// 	var sql = `select count(*) as total from products where CatID = ${catId}`;
//     return db.load(sql);
// }