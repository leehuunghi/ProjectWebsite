var express = require('express');
var productRepo = require('../repos/productDetailRepo');
var router = express.Router();
var cartRepo = require('../repos/cartRepo');
var SumMoney=0;
router.get('/', (req, res) => {
    var arr_p = [];
    for (var i = 0; i < req.session.cart.length; i++) {
        var cartItem = req.session.cart[i];
        var p = productRepo.loadFullProduct(cartItem.ProId0, cartItem.ProID);
        arr_p.push(p);
    }

    var items = [];

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
        };
        res.render('cart/index', vm);
    });

});

router.post('/', (req, res) => {
    cartRepo.insert(req.session.user.ID,SumMoney).then(()=>{
        res.redirect('/confirm-purchase');
    }
    );
});

module.exports = router;