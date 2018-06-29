var db = require('../fn/db');

exports.loadChiTietDonHang = (idDonHang) => {
    var sql = `select distinct(c.ID) as MaDonHang, c.TinhTrang as TinhTrangDonHang, c.TongTien as TongTienDonHang,
    a.ID as IDSanPham, a.TenSanPham as TenSanPham, e.DiaChiReceiver as DiaChiNguoiNhan, e.SDTReceiver as SDTNguoiNhan,
    c.PhuongThuc as PhuongThucThanhToan,
    b.DungLuong as DungLuongSP, b.TenMau as TenMauSP, b.Gia as GiaTien, d.SoLuong as SoLuongSP
    from sanpham as a, sanphamct as b, donhang as c, donhangct as d, users as e
    where c.ID=${idDonHang} and c.ID=d.ID0 and d.ID1 = b.ID and a.ID=b.ID0 and c.TinhTrang != 'DH'
    and c.ID0=e.ID`
    return db.load(sql);
}

exports.xoaDonHang=(idDonHang)=>{
    var sql=`update donhang set IsDeleted=1 where ID=${idDonHang}`
    return db.load(sql);
}