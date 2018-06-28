var express = require('express');

var router = express.Router();
var receiverUpdateRepo = require('../repos/receiverUpdateRepo');

router.get('/', (req, res) => {
    var vm = {
        account: req.session.user
    }; 
    res.render('receiverUpdate/index', vm);
});

router.post('/', (req, res) => {
    var receiver = {
        HoTenReceiver: req.body.name,
        SDTReceiver: req.body.phone,
        DiaChiReceiver: req.body.address,
    };
    var id=req.session.user.ID;
    receiverUpdateRepo.updateAccount(receiver,id).then(() => {
        req.session.user.HoTenReceiver=receiver.HoTenReceiver;
        req.session.user.SDTReceiver=receiver.SDTReceiver;
        req.session.user.DiaChiReceiver=receiver.DiaChiReceiver;
        res.redirect('/info-account');
    }).catch(err => {
        console.log(err);
        res.end(err);
    });
});

module.exports = router;