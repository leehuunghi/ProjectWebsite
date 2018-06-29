var db = require('../fn/db');

exports.add = (prod) => {
    var sql = `CALL addSP('${prod.ten}', '${prod.xem}', '${prod.mua}', '${prod.ngaythem}', '${prod.guar}', '${prod.rate}', '${prod.type}' ,'${prod.manu}')`;
    return db.save(sql);
}

exports.loadSP = () => {
    var sql = `select sanpham.*,  (SELECT COALESCE(sum(soluong),0) FROM sanphamct WHERE sanphamct.ID0 = sanpham.ID) as TongSL from sanpham`;
    return db.load(sql);
}

exports.loadNSX = () => {
    var sql =  `select distinct NhaSanXuat as NSX from sanpham`;
    return db.load(sql);
}

exports.remove = (idxoa) => {
    var sql = `CALL removeSP('${idxoa}')`;
    return db.save(sql);
}

exports.calleditSP = (idedit) => {
    var sql = `SELECT * FROM sanpham WHERE ID = ${idedit}`;
    return db.load(sql);
}

exports.calleditSPCT = (idedit) => {
    var sql = `SELECT * FROM sanphamct WHERE ID0 = ${idedit}`;
    return db.load(sql);
}

exports.calleditMT = (idedit) => {
    var sql = `SELECT * FROM mota WHERE ID0 = ${idedit}`;
    return db.load(sql);
}

exports.calleditTS = (idedit) => {
    var sql = `SELECT * FROM thongso WHERE ID0 = ${idedit}`;
    return db.load(sql);
}

exports.suaProd = (idedit, tensp, loaisp, nsx, baohanh) => {
    var sql =  `UPDATE sanpham SET TenSanPham = '${tensp}', LoaiSP = '${loaisp}', NhaSanXuat = '${nsx}', BaoHanh = ${baohanh} WHERE ID = ${idedit}`;
    return db.save(sql);
}

exports.suaVer1 = (id0suaver, idsuaver, tenmau, mamau, gia, dungluong, soluong) => {
    var sql =  `UPDATE sanphamct SET TenMau = '${tenmau}', MaMau = '${mamau}', Gia = ${gia}, DungLuong = ${dungluong}, SoLuong = ${soluong} WHERE ID0 = ${id0suaver} AND ID = ${idsuaver}`;
    return db.save(sql);
}

exports.suaVer2 = (id0suaver, idsuaver, tenmau, mamau, gia, dungluong, soluong) => {
    var sql =  `UPDATE sanphamct SET TenMau = '${tenmau}', MaMau = '${mamau}', Gia = ${gia}, DungLuong = ${dungluong}, SoLuong = ${soluong} WHERE ID0 = ${id0suaver} AND ID = ${idsuaver}`;
    return db.save(sql);
}

exports.suaVer3 = (id0suaver, idsuaver, tenmau, mamau, gia, dungluong, soluong) => {
    var sql =  `UPDATE sanphamct SET TenMau = '${tenmau}', MaMau = '${mamau}', Gia = ${gia}, DungLuong = ${dungluong}, SoLuong = ${soluong} WHERE ID0 = ${id0suaver} AND ID = ${idsuaver}`;
    return db.save(sql);
}

exports.suaVer4 = (id0suaver, idsuaver, tenmau, mamau, gia, dungluong, soluong) => {
    var sql =  `UPDATE sanphamct SET TenMau = '${tenmau}', MaMau = '${mamau}', Gia = ${gia}, DungLuong = ${dungluong}, SoLuong = ${soluong} WHERE ID0 = ${id0suaver} AND ID = ${idsuaver}`;
    return db.save(sql);
}

exports.suaVer5 = (id0suaver, idsuaver, tenmau, mamau, gia, dungluong, soluong) => {
    var sql =  `UPDATE sanphamct SET TenMau = '${tenmau}', MaMau = '${mamau}', Gia = ${gia}, DungLuong = ${dungluong}, SoLuong = ${soluong} WHERE ID0 = ${id0suaver} AND ID = ${idsuaver}`;
    return db.save(sql);
}

exports.suaVer6 = (id0suaver, idsuaver, tenmau, mamau, gia, dungluong, soluong) => {
    var sql =  `UPDATE sanphamct SET TenMau = '${tenmau}', MaMau = '${mamau}', Gia = ${gia}, DungLuong = ${dungluong}, SoLuong = ${soluong} WHERE ID0 = ${id0suaver} AND ID = ${idsuaver}`;
    return db.save(sql);
}