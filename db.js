module.exports = db;

/* friends.forEach((friend) => {
    let sql = `INSERT INTO secret_friends (name, power) VALUES ('${friend.name}', '${friend.power}')`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log(
            `Inserted record name: ${friend.name}, power: ${friend.power}`
        );
    });
}); */
/* const friends = [
	{
		name: 'Agda',
		power: 'aging with dignity',
	},
	{
		name: 'Berit',
		power: 'bad',
	},
	{
		name: 'Cillan',
		power: 'careless',
	},
	{
		name: 'Diana',
		power: 'driving skills',
	},
	{
		name: 'Eva',
		power: 'eternal flame-thrower',
	},
	{
		name: 'Figma',
		power: 'free lifetime trial',
	},
	{
		name: 'Gun',
		power: 'guns',
	},
	{
		name: 'Hilda',
		power: 'hacker',
	},
	{
		name: 'Inga-Lill',
		power: 'intelligent',
	},
	{
		name: 'Jane',
		power: 'jolly',
	},
]; */

// CODE USED FOR CREATING DB CREATED DB
/* db.query('CREATE DATABASE labb2', function (err, result) {
		if (err) throw err;
		console.log('Database "labb2" created');
    }); */

/* var query =
		'CREATE TABLE secret_friends (name VARCHAR(255), power VARCHAR(255))';
	db.query(query, function (err, result) {
		if (err) throw err;
		console.log('Table created', result);
    }); */

/* db.execute('SELECT * FROM *', function (err, results, fields) {
	console.log('results', results); // results contains rows returned by server
	console.log('fields', fields); // fields contains extra meta data about results, if available

	// If you execute same statement again, it will be picked from a LRU cache
	// which will save query preparation time and give better performance
}); */

// connect

/* db.execute(
	'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
	['Rick C-137', 53],
	function (err, results, fields) {
		console.log('results', results); // results contains rows returned by server
		console.log('fields', fields); // fields contains extra meta data about results, if available

		// If you execute same statement again, it will be picked from a LRU cache
		// which will save query preparation time and give better performance
	}
); */

/* CREATE TABLE IF NOT EXISTS users (
    id int(11) NOT NULL,
    name varchar(200) NOT NULL,
    email varchar(200) NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
  ALTER TABLE users ADD PRIMARY KEY (id);
  ALTER TABLE users MODIFY id int(11) NOT NULL AUTO_INCREMENT;


  INSERT INTO users (id, name, email, created_at) VALUES
  (1, 'Test', 'test@g.co', '2019-02-28 13:20:20'),
  (2, 'john', 'john@g.co', '2019-02-28 13:20:20'),
  (3, 'tutsmake', 'tuts@g.co', '2019-02-28 13:20:20'),
  (4, 'tut', 'tut@g.co', '2019-02-28 13:20:20'),
  (5, 'mhd', 'mhd@g.co', '2019-02-28 13:20:20'); */

/* connection.query(
	'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
	function (err, results, fields) {
		console.log(results); // results contains rows returned by server
		console.log(fields); // fields contains extra meta data about results, if available
	}
); */

/*  */
