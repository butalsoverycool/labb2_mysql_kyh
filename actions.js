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

const serveHome = (req, res) => {
	return res.sendFile(__dirname + '/public/index.html');
};

const getAll = (req, res) => {
	db.query('SELECT * FROM secret_friends', function (err, result) {
		if (err) {
			console.log(fail(err));
			return res.status(404).json(fail(err));
		}

		console.log(success(result));
		return res.status(200).json(success(result));
	});
};

const get1 = (req, res) => {
	const { id } = req.params;

	db.query(`SELECT * FROM secret_friends WHERE id = ${id}`, function (
		err,
		result
	) {
		if (err) {
			console.log(fail(err));
			return res.status(404).json(fail(err));
		}

		console.log(success(result));
		return res.status(200).json(success(result));
	});
};

const create1 = (req, res) => {
	const { name, power } = req.body;

	db.query(
		`INSERT INTO secret_friends (name, power) VALUES ('${name}', '${power}')`,
		function (err) {
			if (err) {
				console.log(fail(err));
				return res.status(404).json(fail(err));
			}

			db.query('SELECT * FROM secret_friends', function (err, result) {
				if (err) {
					console.log(fail(err));
					return res.status(404).json(fail(err));
				}

				console.log(success(result));
				return res.status(200).json(success(result));
			});
		}
	);
};

const update1 = (req, res) => {
	console.log('update...');
	const { id } = req.params;
	const { name: newName, power: newPower } = req.body;

	db.query(`SELECT * FROM secret_friends WHERE id = ${id}`, function (
		err,
		toUpdate
	) {
		if (err) {
			console.log(fail(err));
			return res.status(404).json(fail(err));
		}

		const { name: origName, power: origPower } = toUpdate[0];

		const name = newName || origName;
		const power = newPower || origPower;

		const query = `UPDATE secret_friends SET name = ?, power = ? WHERE id = ?`;
		db.query(query, [name, power, id], function (err) {
			if (err) {
				console.log(fail(err));
				return res.status(404).json(fail(err));
			}

			db.query(`SELECT * FROM secret_friends WHERE id = ${id}`, function (
				err,
				result
			) {
				if (err) {
					console.log(fail(err));
					return res.status(404).json(fail(err));
				}

				console.log(success(result));
				return res.status(200).json(success(result));
			});
		});
	});
};

const delete1 = (req, res) => {
	const { id } = req.params;

	db.query(`DELETE FROM secret_friends WHERE id = ${id}`, function (err) {
		if (err) {
			console.log(fail(err));
			return res.status(404).json(fail(err));
		}

		db.query('SELECT * FROM secret_friends', function (err, result) {
			if (err) {
				console.log(fail(err));
				return res.status(404).json(fail(err));
			}

			console.log(success(result));
			return res.status(200).json(success(result));
		});
	});
};

module.exports = {
	serveHome,
	getAll,
	get1,
	create1,
	update1,
	delete1,
};
