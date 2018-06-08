//Khai báo
var express = require('express');
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var app = express();

var path = require('path');
var homeController = require('./controllers/homeController');
var productDetailController = require('./controllers/productDetailController');
var aboutController = require('./controllers/aboutController');
var loginController = require('./controllers/loginController');
var logoutController = require('./controllers/logoutController');
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
var userlogin = require('./middle-wares/userlogin');
var packageDetailController=require('./controllers/packageDetailController');
var wnumb = require('wnumb');

var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var handleMenu = require('./middle-wares/handleMenu');
var restrict = require('./middle-wares/restrict');




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


// session

var sessionStore = new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'nguyen131197',
    database: 'MobileN',
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
});

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.use(handleMenu);

//Dẫn đường
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(userlogin);


app.use('/home', homeController);
app.use('/cart', cartController);
app.use('/signup',signupController);
app.use('/product-detail',productDetailController);
app.use('/about', aboutController);
app.use('/login', loginController);
app.use('/logout', logoutController);
app.use('/package', packageController);
app.use('/product-view', productViewController);
app.use('/receiver-update', receiverUpdateController);
app.use('/search', searchController);
app.use('/cart-empty', cartEmptyController);
app.use('/compare', compareController);
app.use('/confirm-purchase', confirmPurchaseController);
app.use('/info-account', restrict, infoAccountController);
app.use('/info-update', restrict, infoUpdateController);
app.use('/package-detail', packageDetailController);

// chạy port
app.listen(3000,  () => {
    console.log('Example app listening on port 3000!');
});

