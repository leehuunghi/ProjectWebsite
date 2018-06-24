var express = require('express');

var router = express.Router();
var infoUpdateRepo = require('../repos/infoUpdateRepo');
router.get('/', (req, res) => {
    console.log(1);
    var vm = {
        account: req.session.user
    };

    res.render('infoUpdate/index',vm);
});

router.post('/', (req, res) => {
    console.log(2);
    var user = {
        fullname : req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        cmnd: req.body.cmnd,
        dob: req.body.dob,
        sex: req.body.sex,
        permission: 0
    };
    infoUpdateRepo.updateAccount(user).then(value=>{
        console.log(value);
    }).catch(err =>{
        console.log(err);
        res.end('fail');
    });
    

    res.redirect('/info-account');
});

module.exports = router;