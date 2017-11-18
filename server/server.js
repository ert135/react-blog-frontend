var express = require('express');
var path = require('path');
var expressStaticGzip = require("express-static-gzip");
var app = express();
var angularApp = "../index.html"
var path = require('path');

/* eslint-disable no-console */

const port = 3000;


app.use(express.static(path.join(__dirname, '/dist')));
// app.use("/", expressStaticGzip(path.resolve(__dirname + '/dist')));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  console.log('blog front end app listening on port', port);
});