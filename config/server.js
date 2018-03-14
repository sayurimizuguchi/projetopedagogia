var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator')
var expressSession = require('express-session');


var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

app.use(expressSession({
	secret: 'hakjehrgkjahjer',
	resave: false,
	saveUninitialized: false
}));

//automatiza rotas
consign()
	.include('app/routes') //add routes automatic
	.then('config/dbConnect.js') //insert
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;