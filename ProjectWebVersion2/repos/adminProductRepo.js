var db = require('../fn/db');

exports.add = (prod) => {
    var sql = `INSERT INTO sanpham(TenSanPham,LuotXem,LuotMua,NgayThem,BaoHanh,Rate,LoaiSP,NhaSanXuat) VALUES ('${prod.ten}', '${prod.xem}', '${prod.mua}', '${prod.ngaythem}', '${prod.guar}', '${prod.rate}', '${prod.type}' ,'${prod.manu}')`;
    return db.save(sql);
}

exports.loadSP = () => {
    var sql = `select sanpham.*,  (SELECT COALESCE(sum(soluong),0) FROM sanphamct WHERE sanphamct.ID0 = sanpham.ID) as TongSL from sanpham`;
    return db.load(sql);
}

exports.loaiSP = () => {
    var sql = `select distinct(LoaiSP) as TenLoai, count(*) as SoLuong  from sanpham group by LoaiSP`;
    return db.load(sql);
}

exports.nsx = () => {
    var sql = `select distinct(NhaSanXuat) as TenNSX, count(*) as SoLuongSanPham  from sanpham group by NhaSanXuat`;
    return db.load(sql);
}

