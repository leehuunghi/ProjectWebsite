var db = require('../fn/db');
var config = require('../config/config');

exports.loadSanPham = (id) => {
    var sql = `select * from sanpham where ID= ${id}`;
    return db.load(sql);
}

// exports.loadSanPhamct=(id)=>{
//     var sql=`select * from sanphamct where ID0=${id}`;
//     return db.load(sql);
// }

exports.countDanhGia=(id)=>{
    var sql=`select count(*) as rst from rate group by ID0 having ID0=${id}`;
    return db.load(sql);
}

exports.moTa=(id)=>{
    var sql=`select * from mota where ID0=${id} AND NoiDung IS NOT NULL LIMIT 3`;
    return db.load(sql);
}

exports.moTaXemThem=(id)=>{
    var sql=`select * from mota  where ID0=${id} AND NoiDung IS NOT NULL limit 1000 offset 3`
    return db.load(sql);
}

exports.slide=(id)=>{
    var sql=`select SoHinhSlide from sanphamct where ID0= ${id}`
    return db.load(sql);
}

exports.thongSo=(id)=>{
    var sql=`select * from sanpham as a, thongso as b where b.ID0=${id} and a.ID=b.ID0`;
    return db.load(sql);
}

exports.progressRate=(id,num)=>{
    var sql=`select count(*) as cntRate from rate where Rating=${num} and ID0=${id}`
    return db.load(sql);
}

exports.loadSanPhamCT=(id)=>{
    var sql=`select * from sanphamct where ID0=${id}`
    return db.load(sql);
}

exports.SPCungLoai=(id)=>{
    var sql=`select * from sanpham where LoaiSP in (select LoaiSP from sanpham where ID=${id}) LIMIT 5`
    return db.load(sql);
}

exports.SPCungNSX=(id)=>{
    var sql=`select * from sanpham where NhaSanXuat in (select NhaSanXuat from sanpham where ID=${id}) LIMIT 5`
    return db.load(sql);
}

exports.loadFullProduct = (id0, id)=>{
    var sql = `select * from sanpham as a, sanphamct as b where a.id = b.id0 and a.id = ${id0} and b.id = ${id}`
    return db.load(sql);
}
exports.add = (ID0,ID1,Rating) => {
    var sql = `INSERT INTO rate(ID0,ID1,Rating) VALUES (${ID0},${ID1},${Rating})`;
    return db.save(sql);
}
exports.update = (ID0,IDUser,Rating) => {
    var sql = `update rate set Rating=${Rating} where ID0=${ID0} and ID1=${IDUser}`;
    return db.save(sql);
}