var express = require('express');
var loginRepo = require('../repos/loginRepo');
var router = express.Router();
var restrict = require('../middle-wares/restrict');

router.get('/', (req, res) => {
    res.render('login/index');
});

router.post('/', (req, res) => {

    var user = {
        username: req.body.emailInput,
        password: req.body.passInput
    };
    
    loginRepo.check(user).then(rows=>{
        if(rows!=null)
        {
            req.session.isLogged = true;
            req.session.user = rows;
            console.log(req.session.user);
            var mm=req.session.user.NgaySinh.getMonth()+1;
            var dd=req.session.user.NgaySinh.getDate();
            var yyyy=req.session.user.NgaySinh.getFullYear();
            if(mm<10) mm="0" + mm;
            if(dd<10) dd= "0" + dd;
            req.session.user.NgaySinh = yyyy +'-'+ mm  + '-' + dd;
            var url = '/';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            res.redirect(url);
        }
        else
        {
            var vm={
                notHas:true
            }
            res.render('login/index',vm);
        }
    }
    ).catch(err=>{
        res.end("fail");
    })
});


module.exports = router;