var fs = require('fs');

var express = require('express');
var app = express.createServer(express.logger());
var file_data;
var file_string;

file_data = fs.readFileSync('./index.html');
console.log(file_data.toString());



app.get('/', function(request, response) {
  response.send(file_data.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
