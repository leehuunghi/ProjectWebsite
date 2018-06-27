var express = require('express');
var infoAccountRepo = require('../repos/infoAccountRepo');
var router = express.Router();

router.get('/', (req, res) => {
    var vm = {
        account: req.session.user
    };
    res.render('infoAccount/index', vm);

});

module.exports = router;