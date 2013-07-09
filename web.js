var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var file = fs.readFileSync("index.html", "UTF-8");
    var buffer = file.toString('utf8',0, file.length);
    buffer.toString('utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on "+ port);
});
