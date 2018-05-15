//Khai báo
var express = require('express');
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var app = express();
var homeController = require('./controllers/homeController');
var path = require('path');
//var cartController = require('./controllers/cartController');
var loginController = require('./controllers/loginController');

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
//app.use('/cart', cartController);
//app.use('/about', aboutController);
app.use('/login', loginController);

// chạy port
app.listen(3000,  () => {
    console.log('Example app listening on port 3000!');
});