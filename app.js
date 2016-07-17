var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'files')));
app.use(express.static(path.join(__dirname, 'css')));


app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(require('./router'));

app.listen(8080, function() {
	console.log('ready on port 8080');
});