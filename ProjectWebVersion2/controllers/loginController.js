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
            console.log(rows);
            req.session.isLogged = true;
            req.session.user = rows;

            var url = '/';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            res.redirect(url);
        }
        else res.render('login/index');
    }
    ).catch(err=>{
        res.end("fail");
    })
});


module.exports = router;