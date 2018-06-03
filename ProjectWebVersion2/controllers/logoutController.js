var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    req.session.isLogged = false;
    req.session.user = null;
    // req.session.cart = [];
    //res.redirect(req.headers.referer);
    res.redirect("/");
});


module.exports = router;