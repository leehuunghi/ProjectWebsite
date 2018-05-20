var menuRepo = require('../repos/menuRepo');

module.exports = (req, res, next) => {
    menuRepo.loadNSX().then(rows => {
        res.locals.layoutVM = {
            NSX: rows
        };
        next();
    });
};