module.exports = (req, res, next) => {
    console.log(req.session.cart);
    if (req.session.cart===undefined) {
        res.render(`cart/empty`);
    } else if(req.session.cart.length===0) {
        res.render(`cart/empty`);
    }
    else{
        if(req.session.cart!== undefined)
        {
            req.session.count=0;
            for(i=0;i<req.session.cart.length;i++)
            {
                req.session.count+= req.session.cart[i].Quantity;
            }
        }

        res.locals.layoutCount = {
            count: req.session.count
        };

        next();
    }
}
