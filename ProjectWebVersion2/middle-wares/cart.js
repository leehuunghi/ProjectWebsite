module.exports = (req, res, next) => {
    console.log(req.session.cart);
    if (req.session.cart===undefined) {
        res.render(`cart/empty`);
    } else if(req.session.cart.length===0) {
        res.render(`cart/empty`);
    }
    else{

        next();
    }
}
