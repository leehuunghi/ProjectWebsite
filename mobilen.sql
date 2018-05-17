/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : mobilen

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-05-17 11:57:44
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `donhang`
-- ----------------------------
DROP TABLE IF EXISTS `donhang`;
CREATE TABLE `donhang` (
  `ID0` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TinhTrang` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `PhuongThuc` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ChiTietThuocTinh` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_DonHang_Users` (`ID0`),
  CONSTRAINT `fk_DonHang_Users` FOREIGN KEY (`ID0`) REFERENCES `users` (`ID`)
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
-- Table structure for `rate`
-- ----------------------------
DROP TABLE IF EXISTS `rate`;
CREATE TABLE `rate` (
  `ID0` int(11) NOT NULL,
  `ID1` int(11) NOT NULL,
  `Rating` double DEFAULT NULL,
  PRIMARY KEY (`ID0`,`ID1`),
  CONSTRAINT `fk_Rate_SanPham` FOREIGN KEY (`ID0`) REFERENCES `users` (`ID`),
  CONSTRAINT `fk_Rate_Users` FOREIGN KEY (`ID0`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rate
-- ----------------------------

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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sanpham
-- ----------------------------

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sanphamct
-- ----------------------------

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
  `VaiTro` binary(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
