const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
routes = require('./routes');

server.use(cors);

server.use(bodyParser.json());
server.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

// default route
server.get('/', function (req, res) {
	return res.sendFile(__dirname + '/public/index.html');
});

// mysql-routes
server.use('/mysql', routes);

// set port
server.listen(process.env.PORT, function () {
	console.log(
		`${process.env.APP_NAME} alive on ${process.env.HOST}:${process.env.PORT}`
	);
});

module.exports = server;
