// Create web server
var express = require('express');
var app = express();

// Set the port to 8080
var port = 8080;

// Set the folder for the public files
app.use(express.static(__dirname + '/public'));

// Create the routes
// GET
app.get('/', function(req, res) {
	res.send('Hello World!');
});

// POST
app.post('/', function(req, res) {
	res.send('Got a POST request');
});

// PUT
app.put('/user', function(req, res) {
	res.send('Got a PUT request at /user');
});

// DELETE
app.delete('/user', function(req, res) {
	res.send('Got a DELETE request at /user');
});

// Set the server to listen on port 8080
app.listen(port, function() {
	console.log('Example app listening on port ' + port);
});