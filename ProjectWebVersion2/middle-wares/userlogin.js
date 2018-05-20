var storage = require('node-persist');
storage.init({
    ttl : false
});

module.exports = (req, res, next) => {
    if(storage.getItem('username'))
    {
        console.log(2);
        res.locals.layoutVM = {
            isLogin: true,
            name: storage.getItem('username')
        };
        console.log(res.locals.layoutVM);
    }
    else {
        res.locals.layoutVM = {
            isLogin: false
        };
    }
    next();
};