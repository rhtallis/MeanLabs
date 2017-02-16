var http = require('http');
var express = require('express');
var app = express();
var port = 3000;
var file_reader_writer = require("./api/file_reader_writer")


app.set("view engine", "vash");
app.get('/', function(req,res){
    console.log(req.url)
    res.render("vash/index", {the_title: "expressLab - Tallis Hobbs"});
});

app.get('/canada_capitals', function(req, res){
    console.log(req.url);
    var theHead = req.url;
    res.render("vash/index", {the_data: file_reader_writer(theHead)});
})

app.get('/ten_most_populated_countries', function(req, res){
    var theHead = req.url;
    res.render("vash/index", {the_data: file_reader_writer(theHead)});
})

var server = http.createServer(app);

app.listen(port, function(err, res) {
    if (err) {
        console.log("Server Error!")
    } else {
        console.log("Server started and listening on port " + port);
    }
});