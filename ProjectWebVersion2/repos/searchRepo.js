var db = require('../fn/db');

exports.search=(text)=>{
    var sql =`select * from sanpham as a, sanphamct as b
    where a.ID=b.ID0 and a.TenSanPham like '%${text}%'`
    // limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`
    return db.load(sql);
}