var express = require('express');
var signupRepo = require('../repos/signupRepo');
var moment = require('moment');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('signup/index');
});

router.post('/', (req, res) => {

    var dob = moment(req.body.dob, 'D/M/YYYY')
        .format('YYYY-MM-DDTHH:mm');

    var user = {
        fullname : req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        cmnd: req.body.cmnd,
        dob: req.body.dob,
        permission: 0
    };

    signupRepo.add(user).then(value=>{
        res.redirect("/login");
    }).catch(err =>{
        console.log(err);
        res.end('fail');
    })}
);
module.exports = router;