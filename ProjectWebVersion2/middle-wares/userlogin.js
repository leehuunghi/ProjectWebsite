module.exports = (req, res, next) => {
    if (req.session.isLogged === undefined) {
	 	req.session.isLogged = false;
    }

    if (req.session.user === undefined) {
		req.session.isLogged = false;
	}

    res.locals.layoutVM = {
        isLogged: req.session.isLogged,
        curUser: req.session.user,
    };
    next();
};