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
    signupRepo.add(user).then(value=>{
       res.redirect("/login");
    }).catch(err =>{
        var vm={
            popup: true,
            user: user,
        }
        res.render('signup/index',vm);
    })} 
);
module.exports = router;