var menuRepo = require('../repos/menuRepo');

module.exports = (req, res, next) => {
    menuRepo.loadNSX().then(rows => {
        res.locals.layoutVM2 = {
            NSX: rows
        };
        next();
    });
    var count = 0;
    if (req.session.cart !== undefined) {
        req.session.count = 0;
        for (i = 0; i < req.session.cart.length; i++) {
            req.session.count += req.session.cart[i].Quantity;
        }
        count = req.session.count
    }

    res.locals.layoutCount = {
        count: count
    };
};