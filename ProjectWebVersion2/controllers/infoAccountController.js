var express = require('express');

var router = express.Router();
var infoAccountRepo = require('../repos/infoAccountRepo');


router.get('/', (req, res) => {
    var vm = {
        account: req.session.user
    };
    res.render('infoAccount/index', vm);
});

module.exports = router;