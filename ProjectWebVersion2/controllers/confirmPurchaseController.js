var express = require('express');
var router = express.Router();
var productRepo = require('../repos/productDetailRepo');
var confirmPurchase = require('../repos/confirmPurchaseRepo');

router.get('/', (req, res) => {
    var arr_p = [];
    for (var i = 0; i < req.session.cart.length; i++) {
        var cartItem = req.session.cart[i];
        var p = productRepo.loadFullProduct(cartItem.ProId0, cartItem.ProID);
        arr_p.push(p);
    }

    var items = []; 
    var SumMoney=0;
    Promise.all(arr_p).then(result => {
        for (var i = result.length - 1; i >= 0; i--) {
            var pro = result[i][0];
            var item = {
                Product: pro,
                Quantity: req.session.cart[i].Quantity,
                Amount: pro.Gia * req.session.cart[i].Quantity
            };
            SumMoney+=item.Amount;
            items.push(item);
        }
        var vm = {
            items: items,
            SumMoney: SumMoney,
            account: req.session.user
        };
        res.render('confirmPurchase/index',vm);
    });
})


router.post('/', (req, res) => {
    arr = [];
    for (var i = 0; i < req.session.cart.length; i++) {
        console.log()
        p = confirmPurchase.pushDonHang(req.session.user.ID,req.session.cart[i].ProID, req.session.cart[i].Quantity);
        arr.push(p);
    }
    Promise.all(arr).then(result => {
        confirmPurchase.capNhatTinhTrangDonHang(req.session.user.ID).then(()=>{
            req.session.cart = [];
            res.redirect("/package");
        });
    })
    
});

module.exports = router;