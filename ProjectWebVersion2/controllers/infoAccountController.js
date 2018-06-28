var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    var vm = {
        account: req.session.user
    };
    console.log(req.session.user);
    res.render('infoAccount/index', vm);
});

module.exports = router;