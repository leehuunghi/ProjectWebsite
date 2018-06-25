var express = require('express');

var router = express.Router();
var infoUpdateRepo = require('../repos/infoUpdateRepo');
router.get('/', (req, res) => {
    console.log(1);
    var vm = {
        account: req.session.user
    };

    res.render('infoUpdate/index', vm);
});

router.post('/', (req, res) => {
    console.log(2);
    var user = {
        HoTen: req.body.fullname,
        Email: req.body.email,
        SDT: req.body.phone,
        MatKhau: req.body.password,
        Cmnd: req.body.cmnd,
        NgaySinh: req.body.dob,
        GioiTinh: req.body.sex,
        VaiTro: 0
    };
    infoUpdateRepo.updateAccount(user).then(() => {
        req.session.user = user;
        res.redirect('/info-account');
    }).catch(err => {
        //bắt lỗi cập nhật ở đây
        console.log(err);
        res.end('fail');
    });


});

module.exports = router;