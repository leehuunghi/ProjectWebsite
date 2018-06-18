var express = require('express');
var productRepo = require('../repos/productDetailRepo');
var router = express.Router();

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
        };
        console.log(vm.SumMoney);
        res.render('cart/index', vm);
    });

});

module.exports = router;