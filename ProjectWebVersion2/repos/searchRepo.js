var db = require('../fn/db');

exports.search=(text)=>{
    var sql =`select * from sanpham where TenSanPham like '%${text}%'`
    return db.load(sql);
}

exports.count = () => {
	var sql = `select count(*) as total from sanpham `;
    return db.load(sql);
}

exports.searchLoaiSP=(text)=>{
    var sql =`select * from sanpham where LoaiSP like '%${text}%'`
    return db.load(sql);
}

exports.searchNSX=(text)=>{
    var sql =`select * from sanpham where NhaSanXuat like '%${text}%'`
    return db.load(sql);
}

exports.searchDanhGia=(text)=>{
    var sql =`select * from sanpham where Rate >= ${text}`
    return db.load(sql);
}


exports.nsx = () => {
	var sql = `select distinct(NhaSanXuat) as tenNSX from sanpham LIMIT 7`;
    return db.load(sql);
}

exports.nsxMore=()=>{
    var sql=`select distinct(NhaSanXuat) from sanpham limit 1000 offset 7`
    return db.load(sql);
}

exports.khoangGia=(min, max)=>{
    var sql=`select * from sanpham where GiaDaiDien >= ${min} and GiaDaiDien <= ${max}`
    return db.load(sql);
}

exports.CMRSau=(min, max)=>{
    var sql=`select * from sanpham as a, thongso as b where  a.ID=b.ID0 and 
    CameraSau >= ${min} and CameraSau <= ${max}`
    return db.load(sql);
}

exports.CMRTruoc=(min, max)=>{
    var sql=`select * from sanpham as a, thongso as b where  a.ID=b.ID0 and 
    CameraTruoc >= ${min} and CameraTruoc <= ${max}`
    return db.load(sql);
}

exports.Screen=(min, max)=>{
    var sql=`select * from sanpham as a, thongso as b where  a.ID=b.ID0 and 
    KichThuocManHinh >= ${min} and KichThuocManHinh <= ${max}`
    return db.load(sql);
}

exports.DungLuongPin=(min, max)=>{
    var sql=`select * from sanpham as a, thongso as b where  a.ID=b.ID0 and 
    DungLuongPin >= ${min} and DungLuongPin <= ${max}`
    return db.load(sql);
}

exports.BoNho=(text)=>{
    var sql=`select * from sanpham as a, thongso as b where  a.ID=b.ID0 and 
    RAM =${text}`
    return db.load(sql);
}
