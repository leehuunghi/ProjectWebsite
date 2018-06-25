var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    console.log(req.session.user);

    var vm = {
        account: req.session.user
    };
    res.render('infoAccount/index', vm);
});

module.exports = router;