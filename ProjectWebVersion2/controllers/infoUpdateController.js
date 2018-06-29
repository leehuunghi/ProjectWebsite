var express = require('express');

var router = express.Router();
var infoUpdateRepo = require('../repos/infoUpdateRepo');
router.get('/', (req, res) => {
    var vm = {
        account: req.session.user
    };
    res.render('infoUpdate/index', vm);
});

router.post('/', (req, res) => {
    var user = {
        HoTen: req.body.fullname,
        Email: req.session.user.Email,
        SDT: req.body.phone,
        MatKhau: req.body.password,
        Cmnd: req.body.cmnd,
        NgaySinh: req.body.dob,
        GioiTinh: req.body.sex,
        VaiTro: 0
    };
    infoUpdateRepo.checkPassword(user).then(rows=>{
        console.log(rows);
        if (rows.length>0){
            infoUpdateRepo.updateAccount(user).then(() => {
                req.session.user.Email = user.Email;
                req.session.user.HoTen = user.HoTen;
                req.session.user.SDT = user.SDT;
                req.session.user.Cmnd = user.Cmnd;
                req.session.user.NgaySinh = user.NgaySinh;
                req.session.user.GioiTinh = user.GioiTinh;
                res.redirect('/info-account');
            }).catch(err => {
                console.log(err);
                res.end(err);
            });
        }
        else {
            var vm={
                notFix: true,
                account: req.session.user
            }
            res.render('infoUpdate/index',vm);
        }
    });

});

module.exports = router;