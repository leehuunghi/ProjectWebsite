module.exports = (req, res, next) => {
    if (req.body.search===undefined) {
        next();
    } else {
        res.redirect(`/search?keyword=${req.body.search}`);
    }
}
