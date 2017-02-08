// Import dependencies.
var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var db = require('./models');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var User = db.User;

// Initialize app.
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));
// Favicon
app.use(favicon(path.join(__dirname, 'public/assets/img', 'favicon.png')));
// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// stuffs for passport
app.use(bodyParser());
app.use(require('connect-multiparty')());
app.use(cookieParser());
app.use(session({ secret: 'super-secret' }));

app.use(passport.initialize());
app.use(passport.session());

var PORT = process.env.PORT || 3000;

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Set handlebars as view engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Method override.
app.use(methodOverride('_method'));

// Import routes and give the server access to them.
require('./controllers/controller.js')(app, passport);

// Start listening.
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log('listening on port ' + PORT);
    });
});