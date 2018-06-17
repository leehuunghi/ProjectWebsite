var express = require('express');

var router = express.Router();
var infoUpdateRepo = 
router.get('/', (req, res) => {
    var vm = {
        account: req.session.user
    };

    res.render('infoUpdate/index',vm);
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
        console.log(err);
        res.end('fail');
    });
    

    res.render('infoUpdate/index',vm);
});

module.exports = router;