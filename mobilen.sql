/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : mobilen

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-06-16 15:21:25
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `donhang`
-- ----------------------------
DROP TABLE IF EXISTS `donhang`;
CREATE TABLE `donhang` (
  `IDUser` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TinhTrang` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `PhuongThucThanhToan` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_DonHang_Users` (`IDUser`),
  CONSTRAINT `fk_DonHang_Users` FOREIGN KEY (`IDUser`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of donhang
-- ----------------------------

-- ----------------------------
-- Table structure for `donhangct`
-- ----------------------------
DROP TABLE IF EXISTS `donhangct`;
CREATE TABLE `donhangct` (
  `ID0` int(11) NOT NULL,
  `ID1` int(11) NOT NULL,
  `SoLuong` int(11) NOT NULL,
  PRIMARY KEY (`ID0`,`ID1`),
  KEY `fk_DonHangCT_SANPHAMCT` (`ID1`),
  CONSTRAINT `fk_DonHangCT_DONHANG` FOREIGN KEY (`ID0`) REFERENCES `users` (`ID`),
  CONSTRAINT `fk_DonHangCT_SANPHAMCT` FOREIGN KEY (`ID1`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of donhangct
-- ----------------------------

-- ----------------------------
-- Table structure for `giohang`
-- ----------------------------
DROP TABLE IF EXISTS `giohang`;
CREATE TABLE `giohang` (
  `ID0` int(11) NOT NULL,
  `ID1` int(11) NOT NULL,
  `Gia` int(11) NOT NULL,
  `SoLuong` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID0`,`ID1`),
  CONSTRAINT `fk_GioHang_Users` FOREIGN KEY (`ID0`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of giohang
-- ----------------------------

-- ----------------------------
-- Table structure for `mota`
-- ----------------------------
DROP TABLE IF EXISTS `mota`;
CREATE TABLE `mota` (
  `ID0` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NoiDung` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_MoTa_SanPham` (`ID0`),
  CONSTRAINT `fk_MoTa_SanPham` FOREIGN KEY (`ID0`) REFERENCES `sanpham` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mota
-- ----------------------------

-- ----------------------------
-- Table structure for `nhasanxuat`
-- ----------------------------
DROP TABLE IF EXISTS `nhasanxuat`;
CREATE TABLE `nhasanxuat` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TenNSX` varchar(128) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nhasanxuat
-- ----------------------------

-- ----------------------------
-- Table structure for `rate`
-- ----------------------------
DROP TABLE IF EXISTS `rate`;
CREATE TABLE `rate` (
  `ID0` int(11) NOT NULL,
  `ID1` int(11) NOT NULL,
  `Rating` double DEFAULT NULL,
  PRIMARY KEY (`ID0`,`ID1`),
  KEY `fk_Rate_Users` (`ID1`),
  CONSTRAINT `fk_Rate_SanPham` FOREIGN KEY (`ID0`) REFERENCES `users` (`ID`),
  CONSTRAINT `fk_Rate_Users` FOREIGN KEY (`ID1`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rate
-- ----------------------------
INSERT INTO `rate` VALUES ('1', '1', '3');

-- ----------------------------
-- Table structure for `sanpham`
-- ----------------------------
DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE `sanpham` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TenSanPham` varchar(128) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `LuotXem` int(11) unsigned NOT NULL DEFAULT '0',
  `LuotMua` int(11) unsigned NOT NULL DEFAULT '0',
  `NgayThem` datetime NOT NULL,
  `BaoHanh` int(11) unsigned NOT NULL DEFAULT '0' COMMENT 'tháng',
  `Rate` float(11,2) NOT NULL,
  `IDNhaSanXuat` int(11) DEFAULT NULL,
  `LoaiSP` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_Sp_NSX` (`IDNhaSanXuat`),
  CONSTRAINT `FK_Sp_NSX` FOREIGN KEY (`IDNhaSanXuat`) REFERENCES `nhasanxuat` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sanpham
-- ----------------------------
INSERT INTO `sanpham` VALUES ('1', 'BKAV BPhone 2', '20', '6', '2018-05-17 18:44:08', '6', '1.20', null, 'DT');
INSERT INTO `sanpham` VALUES ('2', 'ASUS ZenPhone 4 Max Pro', '3', '4', '2018-05-16 21:49:52', '12', '2.00', null, 'DT');
INSERT INTO `sanpham` VALUES ('3', 'HTC U Ultra', '33', '5', '2018-05-15 21:51:32', '24', '4.00', null, 'MTB');
INSERT INTO `sanpham` VALUES ('4', 'HTC 10', '5', '9', '2018-05-17 21:52:39', '3', '3.00', null, null);
INSERT INTO `sanpham` VALUES ('5', 'Huawei Nova 3E', '0', '0', '2018-05-16 00:40:40', '3', '5.00', null, null);
INSERT INTO `sanpham` VALUES ('6', 'Huawei Y7 Pro', '3', '1', '2018-05-01 00:42:31', '0', '2.00', null, null);

-- ----------------------------
-- Table structure for `sanphamct`
-- ----------------------------
DROP TABLE IF EXISTS `sanphamct`;
CREATE TABLE `sanphamct` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID0` int(11) NOT NULL,
  `Gia` int(11) NOT NULL,
  `TenMau` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `DungLuong` int(11) NOT NULL,
  `LuotMua` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `fk_SanPhamCT_SanPham` (`ID0`),
  CONSTRAINT `fk_SanPhamCT_SanPham` FOREIGN KEY (`ID0`) REFERENCES `sanpham` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sanphamct
-- ----------------------------
INSERT INTO `sanphamct` VALUES ('1', '1', '9890000', 'Đỏ', '32', '5');
INSERT INTO `sanphamct` VALUES ('2', '2', '13500000', 'Đen', '64', '6');
INSERT INTO `sanphamct` VALUES ('3', '3', '5670000', 'Đen', '32', '3');
INSERT INTO `sanphamct` VALUES ('4', '4', '4320000', 'Đỏ', '64', '11');
INSERT INTO `sanphamct` VALUES ('5', '5', '3260000', 'Vàng', '64', '21');
INSERT INTO `sanphamct` VALUES ('6', '6', '11760000', 'Đen', '32', '6');

-- ----------------------------
-- Table structure for `sessions`
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sessions
-- ----------------------------
INSERT INTO `sessions` VALUES ('VUzqnvfvGG1Q24m1qKuDzABkQUTCm994', '1529221649', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A6E756C6C2C2265787069726573223A6E756C6C2C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73657D);

-- ----------------------------
-- Table structure for `thongso`
-- ----------------------------
DROP TABLE IF EXISTS `thongso`;
CREATE TABLE `thongso` (
  `ID0` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TenThuocTinh` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ChiTietThuocTinh` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_ThongSo_SanPham` (`ID0`),
  CONSTRAINT `fk_ThongSo_SanPham` FOREIGN KEY (`ID0`) REFERENCES `sanpham` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of thongso
-- ----------------------------

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) NOT NULL,
  `HoTen` varchar(128) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `MatKhau` varchar(50) NOT NULL,
  `Cmnd` char(9) NOT NULL,
  `NgaySinh` date DEFAULT NULL,
  `GioiTinh` varchar(5) DEFAULT NULL,
  `VaiTro` char(1) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Sdt` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'trannha', 'Tui', '123', '123', '2018-05-07', 'Nữ', null, null);
INSERT INTO `users` VALUES ('2', 'leehuunghi@gmail.com', 'Lê Hữu Nghị', '123456', '381820734', '1997-03-20', 'Nam', null, '0981673403');
INSERT INTO `users` VALUES ('3', 'sieudaochich63@yahoo.com', 'Lê Hữu Nghị', '123', '123456789', '2018-06-02', null, null, null);
INSERT INTO `users` VALUES ('4', 'haha@gmail.com', '123', '123', '123', '2018-06-14', 'Nam', null, '123');
