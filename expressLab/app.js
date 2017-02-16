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

app.get('/api/capitals', jsonHeader, (req,res) => {
    console.log(req.url);
    var jsonData = fs.readFileSync("./data/canada_capitals.json");
    res.send(jsonData);
    fs.close();
});

app.get('/api/countries', jsonHeader, (req,res) => {
    console.log(req.url);
    var jsonData = fs.readFileSync("./data/ten_most_populated_countries.json");
    res.send(jsonData);
    fs.close();
});

var server = http.createServer(app);

app.listen(port, function(err, res) {
    if (err) {
        console.log("Server Error!")
    } else {
        console.log("Server started and listening on port " + port);
    }
});