var express = require('express');
var loginRepo = require('../repos/loginRepo');
var router = express.Router();
var storage = require('node-persist');

storage.init({
    ttl : false
});

router.get('/', (req, res) => {
    storage.removeItem('username');
    res.redirect("/home");
});

module.exports = router;