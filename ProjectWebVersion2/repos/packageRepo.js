var db = require('../fn/db');

exports.loadDonHang = (iduser) => {
    var sql = `select distinct(c.ID) as MaDonHang, c.TinhTrang as TinhTrangDonHang, c.TongTien as TongTienDonHang,
    a.ID as IDSanPham, a.TenSanPham as TenSanPham,
    b.DungLuong as DungLuongSP, b.TenMau as TenMauSP, b.Gia as GiaTien, d.SoLuong as SoLuongSP
    from sanpham as a, sanphamct as b, donhang as c, donhangct as d
    where c.ID0=${iduser} and c.ID=d.ID0 and d.ID1 = b.ID and a.ID=b.ID0 and c.TinhTrang != 'DH'`
    return db.load(sql);
}
