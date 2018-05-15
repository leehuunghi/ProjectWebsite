//Khai báo
var express = require('express');
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var app = express();
var homeController = require('./controllers/homeController');
var path = require('path');
var aboutController = require('./controllers/aboutController');
var cartController = require('./controllers/cartController');
var cartEmptyController = require('./controllers/cartEmptyController');
var compareController=require('./controllers/compareController');
var confirmPurchaseController=require('./controllers/confirmPurchaseController');
var infoAccountController=require('./controllers/infoAccountController');
var infoUpdateController=require('./controllers/infoUpdateController');

//tạo layout
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    helpers: {
        section: express_handlebars_sections()
    }
}));
app.set('view engine', 'hbs');



//Dẫn đường
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/home', homeController);
app.use('/cart', cartController);
app.use('/about', aboutController);
app.use('/cartEmpty', cartEmptyController);
app.use('/compare', compareController);
app.use('/confirmPurchase', confirmPurchaseController);
app.use('/infoAccount',infoAccountController);
app.use('/infoUpdate',infoUpdateController);

// chạy port
app.listen(3000,  () => {
    console.log('Example app listening on port 3000!');
});