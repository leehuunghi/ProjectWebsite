/*
Navicat MySQL Data Transfer

Source Server         : MobileN
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : mobilen

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-06-18 08:31:41
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
  `ThoiGianDatHang` datetime DEFAULT NULL,
  `TongTien` int(9) DEFAULT NULL,
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
-- Table structure for `mota`
-- ----------------------------
DROP TABLE IF EXISTS `mota`;
CREATE TABLE `mota` (
  `ID0` int(11) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NoiDung` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `TieuDe` text,
  PRIMARY KEY (`ID`),
  KEY `fk_MoTa_SanPham` (`ID0`),
  CONSTRAINT `fk_MoTa_SanPham` FOREIGN KEY (`ID0`) REFERENCES `sanpham` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mota
-- ----------------------------
INSERT INTO `mota` VALUES ('3', '1', 'HTC U Ultra đánh dấu sự trở lại của HTC với triết lý thiết kế mới, đẹp hơn - sang trọng - bóng bẩy hơn và đặc biệt gắn bó với người dùng hơn thông qua trợ lý ảo HTC Sense Companion.', null);
INSERT INTO `mota` VALUES ('3', '2', 'Designed to reflect the best U. The Ultra’s molded glass front and back accentuates the symmetrically fluid blend between polished metal and stunning glass.', 'Listen to U');
INSERT INTO `mota` VALUES ('3', '3', 'Because your inner ear is as unique as your fingerprint, the HTC USonic* audio platform analyzes your inner ear and automatically adapts the sound profile to optimize your listening experience.\r\n\r\nHTC USonic earphones are included with purchase of an HTC U Ultra phablet in the US.\r\n* HTC USonic is compatible with USB-C connection only.', 'Reflects U');
INSERT INTO `mota` VALUES ('3', '4', 'Because your inner ear is as unique as your fingerprint, the HTC USonic* audio platform analyzes your inner ear and automatically adapts the sound profile to optimize your listening experience.', null);

-- ----------------------------
-- Table structure for `nhasanxuat`
-- ----------------------------
DROP TABLE IF EXISTS `nhasanxuat`;
CREATE TABLE `nhasanxuat` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TenNSX` varchar(128) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nhasanxuat
-- ----------------------------
INSERT INTO `nhasanxuat` VALUES ('1', 'HTC');
INSERT INTO `nhasanxuat` VALUES ('2', 'SAMSUNG');
INSERT INTO `nhasanxuat` VALUES ('3', 'Huawei');
INSERT INTO `nhasanxuat` VALUES ('4', 'Oppo');
INSERT INTO `nhasanxuat` VALUES ('5', 'Xiaomi');
INSERT INTO `nhasanxuat` VALUES ('6', 'Apple');
INSERT INTO `nhasanxuat` VALUES ('7', 'Nokia');
INSERT INTO `nhasanxuat` VALUES ('8', 'Wiko');
INSERT INTO `nhasanxuat` VALUES ('9', 'Sony');

-- ----------------------------
-- Table structure for `rate`
-- ----------------------------
DROP TABLE IF EXISTS `rate`;
CREATE TABLE `rate` (
  `ID0` int(11) NOT NULL,
  `ID1` int(11) NOT NULL,
  `Rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID0`,`ID1`),
  KEY `fk_Rate_Users` (`ID1`),
  CONSTRAINT `fk_Rate_SanPham` FOREIGN KEY (`ID0`) REFERENCES `sanpham` (`ID`),
  CONSTRAINT `fk_Rate_Users` FOREIGN KEY (`ID1`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rate
-- ----------------------------
INSERT INTO `rate` VALUES ('1', '1', '3');
INSERT INTO `rate` VALUES ('1', '2', '2');
INSERT INTO `rate` VALUES ('1', '3', '4');
INSERT INTO `rate` VALUES ('2', '1', '3');
INSERT INTO `rate` VALUES ('2', '2', '4');
INSERT INTO `rate` VALUES ('3', '1', '4');
INSERT INTO `rate` VALUES ('3', '2', '4');
INSERT INTO `rate` VALUES ('3', '3', '4');
INSERT INTO `rate` VALUES ('3', '4', '3');

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
  `LoaiSP` varchar(20) DEFAULT NULL,
  `GiaDaiDien` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_Sp_NSX` (`IDNhaSanXuat`),
  CONSTRAINT `FK_Sp_NSX` FOREIGN KEY (`IDNhaSanXuat`) REFERENCES `nhasanxuat` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sanpham
-- ----------------------------
INSERT INTO `sanpham` VALUES ('1', 'BKAV BPhone 2', '20', '6', '2018-05-17 18:44:08', '6', '1.20', '5', 'Điện thoại di động', '9000000');
INSERT INTO `sanpham` VALUES ('2', 'ASUS ZenPhone 4 Max Pro', '3', '4', '2018-05-16 21:49:52', '12', '2.40', '4', 'Điện thoại di động', '2700000');
INSERT INTO `sanpham` VALUES ('3', 'HTC U Ultra', '33', '5', '2018-05-15 21:51:32', '24', '4.60', '1', 'Máy tính bảng', '12000000');
INSERT INTO `sanpham` VALUES ('4', 'HTC 10', '5', '9', '2018-05-17 21:52:39', '3', '4.30', '1', 'Máy tính bảng', '2500000');
INSERT INTO `sanpham` VALUES ('5', 'Huawei Nova 3E', '0', '0', '2018-05-16 00:40:40', '3', '2.30', '3', 'Điện thoại di động', '6000000');
INSERT INTO `sanpham` VALUES ('6', 'Huawei Y7 Pro', '3', '1', '2018-05-01 00:42:31', '0', '2.90', '3', 'Máy tính bảng', '4300000');

-- ----------------------------
-- Table structure for `sanphamct`
-- ----------------------------
DROP TABLE IF EXISTS `sanphamct`;
CREATE TABLE `sanphamct` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID0` int(11) NOT NULL,
  `Gia` int(11) NOT NULL,
  `TenMau` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `MaMau` varchar(6) NOT NULL,
  `DungLuong` int(11) NOT NULL,
  `LuotMua` int(11) NOT NULL DEFAULT '0',
  `LuotXem` int(11) DEFAULT NULL,
  `SoHinhSlide` int(5) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_SanPhamCT_SanPham` (`ID0`),
  CONSTRAINT `fk_SanPhamCT_SanPham` FOREIGN KEY (`ID0`) REFERENCES `sanpham` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sanphamct
-- ----------------------------
INSERT INTO `sanphamct` VALUES ('1', '1', '9890000', 'Đỏ', 'f44e42', '32', '5', '3', '4');
INSERT INTO `sanphamct` VALUES ('2', '2', '13500000', 'Đen', '000', '64', '6', '11', '3');
INSERT INTO `sanphamct` VALUES ('3', '3', '5670000', 'Đen', '000', '64', '3', '33', '4');
INSERT INTO `sanphamct` VALUES ('4', '4', '4320000', 'Đỏ', 'f44e42', '64', '11', '21', '4');
INSERT INTO `sanphamct` VALUES ('5', '5', '3260000', 'Vàng', 'fcd600', '64', '21', '5', '3');
INSERT INTO `sanphamct` VALUES ('6', '6', '11760000', 'Đen', '000', '32', '6', '9', '2');
INSERT INTO `sanphamct` VALUES ('7', '3', '2000000', 'Xanh ', '004bfc', '64', '2', '22', '4');
INSERT INTO `sanphamct` VALUES ('8', '3', '2000000', 'Đỏ', 'f44e42', '128', '5', '6', '3');
INSERT INTO `sanphamct` VALUES ('9', '3', '3000000', 'Đen', '000', '32', '6', '10', '3');

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
INSERT INTO `sessions` VALUES ('5akM3Y7aI_-_S0H4O8OZ00VpoVF4T7_u', '1529364220', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A6E756C6C2C2265787069726573223A6E756C6C2C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A747275652C2275736572223A7B224944223A342C22456D61696C223A227472616E6E686131333240676D61696C2E636F6D222C22486F54656E223A22747569222C224D61744B686175223A2231323334222C22436D6E64223A22313233313233222C224E67617953696E68223A22323031382D30352D3331222C2247696F6954696E68223A6E756C6C2C2256616954726F223A6E756C6C2C22534454223A6E756C6C7D7D);
INSERT INTO `sessions` VALUES ('V85dprtmTyxRWC5i8iG6NB1dbZlajxsg', '1529371810', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A6E756C6C2C2265787069726573223A6E756C6C2C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A747275652C2275736572223A7B224944223A342C22456D61696C223A227472616E6E686131333240676D61696C2E636F6D222C22486F54656E223A22747569222C224D61744B686175223A2231323334222C22436D6E64223A22313233313233222C224E67617953696E68223A22323031382D30352D3331222C2247696F6954696E68223A6E756C6C2C2256616954726F223A6E756C6C2C22534454223A6E756C6C7D7D);

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of thongso
-- ----------------------------
INSERT INTO `thongso` VALUES ('3', '1', 'Màn hình', 'Super LCD, Chính: 5.7\", Phụ: 2.05\", Quad HD(2K)');
INSERT INTO `thongso` VALUES ('3', '2', 'Hệ điều hành', 'Android 7.0 (Nougat)');
INSERT INTO `thongso` VALUES ('3', '3', 'Camera sau', '12MP');
INSERT INTO `thongso` VALUES ('3', '4', 'Camera trước', '16MP');
INSERT INTO `thongso` VALUES ('3', '5', 'RAM', '4GB');
INSERT INTO `thongso` VALUES ('3', '6', 'CPU', 'Qualcomm Snapdragon 821 4 nhân 64-bit');
INSERT INTO `thongso` VALUES ('3', '7', 'Màu mè', 'Đỏ');

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
  `VaiTro` varchar(1) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `SDT` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'trannha', 'Tui', '123', '123', '2018-05-07', 'Nữ', null, null);
INSERT INTO `users` VALUES ('2', 'huni', 'huni', '322', '223', '2018-04-30', 'Nam', null, null);
INSERT INTO `users` VALUES ('3', 'phily', 'nguyen', '11', '2', '2018-05-15', 'Nam', null, null);
INSERT INTO `users` VALUES ('4', 'trannha132@gmail.com', 'tui', '1234', '123123', '2018-05-31', null, null, null);
