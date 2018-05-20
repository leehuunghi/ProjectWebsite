var express = require('express');
var signupRepo = require('../repos/signupRepo');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('signup/index');
});

router.post('/', (req, res) => {
    signupRepo.add(req.body).then(value=>{
        res.redirect("/login");
    }).catch(err =>{
        console.log(err);
        res.end('fail');
    })}
);
module.exports = router;