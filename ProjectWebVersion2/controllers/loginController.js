var express = require('express');
var loginRepo = require('../repos/loginRepo');
var router = express.Router();
var storage = require('node-persist');

storage.init({
    ttl : false
});

router.get('/', (req, res) => {
    res.render('login/index');
});

router.post('/', (req, res) => {
    loginRepo.check(req.body.emailInput,req.body.passInput).then(value=>{
        if(value!=null)
        {
            storage.setItem('username', value.HoTen);
            res.redirect("/");
        }
        else res.render('login/index');
    }
    ).catch(err=>{
        res.end("fail");
    })
});


module.exports = router;