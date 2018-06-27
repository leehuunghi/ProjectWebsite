var db = require('../fn/db');

exports.add = (prod) => {
    var sql = `INSERT INTO sanpham(TenSanPham,LuotXem,LuotMua,NgayThem,BaoHanh,Rate,LoaiSP,NhaSanXuat) VALUES ('${prod.ten}', '${prod.xem}', '${prod.mua}', '${prod.ngaythem}', '${prod.guar}', '${prod.rate}', '${prod.type}' ,'${prod.manu}')`;
    return db.save(sql);
}

exports.loadSP = () => {
    var sql = `select sanpham.*,  (SELECT COALESCE(sum(soluong),0) FROM sanphamct WHERE sanphamct.ID0 = sanpham.ID) as TongSL from sanpham`;
    return db.load(sql);
}