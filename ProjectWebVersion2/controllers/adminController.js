var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/index', {layout: false});
});

router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard', {layout: 'admin.handlebars'});
});

router.get('/sanpham', (req, res) => {
    res.render('admin/sanpham', {layout: 'admin.handlebars'});
});

router.get('/donhang', (req, res) => {
    res.render('admin/donhang', {layout: 'admin.handlebars'});
});

router.get('/nguoidung', (req, res) => {
    res.render('admin/nguoidung', {layout: 'admin.handlebars'});
});

module.exports = router;