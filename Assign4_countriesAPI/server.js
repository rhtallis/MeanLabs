var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var countries = require('./routes/countries');

var port = 3000;
var app = express();

// Generate View Engine
var viewEngine = require('ejs-locals');
app.engine('ejs', viewEngine);
app.set('view engine', 'ejs');

// set folder for static content
app.use(express.static(path.join(__dirname, 'client')));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// define the routings
app.use('/', index);
app.use('/api', countries);

//  apply the listener
app.listen(port, function(){
    console.log('server started on port')
});