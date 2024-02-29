// create web server
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var port = 3000;

app.use(express.static(__dirname + '/public'));

// start server
server.listen(port, function(){
    console.log('Server running at http://');
});
