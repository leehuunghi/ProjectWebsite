//Khai báo
var express = require('express');
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var app = express();
var homeController = require('./controllers/homeController');
var productDetailController = require('./controllers/productDetailController');
var path = require('path');
var aboutController = require('./controllers/aboutController');
var loginController = require('./controllers/loginController');
var cartController = require('./controllers/cartController');
var signupController = require('./controllers/signupController');
var packageController = require('./controllers/packageController');
var productViewController = require('./controllers/productViewController');
var receiverUpdateController = require('./controllers/receiverUpdateController');
var searchController = require('./controllers/searchController');
var cartEmptyController = require('./controllers/cartEmptyController');
var compareController=require('./controllers/compareController');
var confirmPurchaseController=require('./controllers/confirmPurchaseController');
var infoAccountController=require('./controllers/infoAccountController');
var infoUpdateController=require('./controllers/infoUpdateController');
var packageDetailController=require('./controllers/packageDetailController');
var wnumb = require('wnumb');


//tạo layout
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    helpers: {
        section: express_handlebars_sections(),
        number_format: n => {
            var nf = wnumb({
                thousand: '.'
            });
            return nf.to(n);
        }
    }
}));
app.set('view engine', 'hbs');



//Dẫn đường
app.get('/', (req, res) => {
    res.redirect('/product-view');
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/home', homeController);
app.use('/cart', cartController);
app.use('/signup',signupController);
app.use('/product-detail',productDetailController);
app.use('/about', aboutController);
app.use('/login', loginController);
app.use('/package', packageController);
app.use('/product-view', productViewController);
app.use('/receiver-update', receiverUpdateController);
app.use('/search', searchController);
app.use('/cart-empty', cartEmptyController);
app.use('/compare', compareController);
app.use('/confirm-purchase', confirmPurchaseController);
app.use('/info-account', infoAccountController);
app.use('/info-update', infoUpdateController);
app.use('/package-detail', packageDetailController);

// chạy port
app.listen(3000,  () => {
    console.log('Example app listening on port 3000!');
});