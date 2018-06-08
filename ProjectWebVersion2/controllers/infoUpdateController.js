var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    var vm = {
        account: req.session.user
    };

    res.render('infoUpdate/index',vm);
});

module.exports = router;