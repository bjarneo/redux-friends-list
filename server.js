var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var port = 3000;
var indexPath = path.join(__dirname, 'index.html');
var indexHtml = fs.readFileSync(indexPath, { encoding: 'utf8' });

app.set('views', __dirname);
app.use('/static', express.static('static'));


app.use('/', function(req, res) {
    res.set('Content-Type', 'text/html');
    res.send(indexHtml);
});

process.on('uncaughtException', function uncaughtExceptions(err) {
    console.log(err);
});

// Move port to config file with env
var server = app.listen(port, function startServer() {
    console.log('Server application listening at port %s.', port);
});