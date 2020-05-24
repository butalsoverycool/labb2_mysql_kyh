//const db = require('./db');

const mysql = require('mysql2');

// db-conf
const db = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PWD, //process.env.PWD,
	database: process.env.DB_NAME,
});

// connect right away to get status
db.connect(function (err) {
	if (err || !db.authorized) {
		console.log('connection err/not authorized', err);
		throw err;
	}
});

const success = (data = null) => ({
	success: true,
	data,
});

const fail = (err) => ({
	success: false,
	error: err,
});

const apiHome = (req, res) => {
	return res.sendFile(__dirname + '/public/mysql/index.html');
};

const getAll = (req, res) => {
	db.query('SELECT * FROM secret_friends', function (err, result, fields) {
		if (err) {
			console.log(fail);
			return res.status(404).json(fail(err));
		}

		return res.status(200).json(success(result));
	});
};

const get1 = (req, res) => {};
const create1 = (req, res) => {};
const update1 = (req, res) => {};
const delete1 = (req, res) => {};

module.exports = {
	apiHome,
	getAll,
	/* get1,
    create1,
    update1,
    delete1 */
};
