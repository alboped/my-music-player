var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var spiders = require('./spiders/spiders_main');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

var api = require('./api/spiders_api')(app);

app.get('/', function(req, res){
	res.send('Hello World!');
});

var server = app.listen(9900, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example add listening at http://%s:%s', host, port);
});