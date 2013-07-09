#!/usr/bin/env node

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var file = fs.readFileSync("index.html", "UTF-8");
    response.send(file.toString('utf8',0, file.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on "+ port);
})
;
