var express = require('express');
var path = require('path');
var app = express();
var angularApp = "../index.html"
var port = 8080;
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../app/index.html'));
});

app.use(express.static(__dirname + '/../node_modules'));
app.use('/static', express.static(__dirname + '/node_modules'));

app.use(express.static(__dirname + '/../app'));
app.use('/static', express.static(__dirname + '/app'));

app.use('/', express.static(path.join(__dirname + '/../')));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../index.html'));
});

app.listen(port,   function() {
    console.log('blog front end app listening on port', port);
    console.log(path.join(__dirname, '/../node_modules'));
    console.log(path.join(__dirname + '/../app/build'));
});
