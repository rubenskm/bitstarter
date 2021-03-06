#!/usr/bin/env node

var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var file = fs.readFileSync("index.html", "UTF-8");
    response.send(file.toString('utf8',0, file.length));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on "+ port);
})
;
