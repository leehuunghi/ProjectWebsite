var express = require('express');
var signupRepo = require('../repos/signupRepo');
var moment = require('moment');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('signup/index');
});

router.post('/', (req, res) => {

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

    console.log(user);
    signupRepo.add(user).then(value=>{
        res.redirect("/login");
    }).catch(err =>{
        console.log(err);
        res.end('fail');
    })}
);
module.exports = router;