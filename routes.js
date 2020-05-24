const express = require('express');
require('dotenv/config');
const server = require('./server');
const router = express.Router();
const actions = require('./actions');
const {
	serveHome,
	getAll,
	get1,
	create1,
	update1,
	delete1,
} = require('./actions');

router.get('/', serveHome);
router.get('/getAll', getAll);
router.get('/get1/:id', get1);
router.post('/create1', create1);
router.put('/update1/:id', update1);
router.delete('/delete1/:id', delete1);

module.exports = router;
