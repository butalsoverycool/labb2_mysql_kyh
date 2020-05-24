const express = require('express');
require('dotenv/config');
const server = require('./server');
const router = express.Router();
const actions = require('./actions');
const {
	apiHome,
	getAll,
	get1,
	create1,
	update1,
	delete1,
} = require('./actions');

router.get('/', apiHome);
router.get('/getAll', getAll);
/* router.get('/get1/:id', get1);
router.post('/create1', create1);
router.put('/update1/:id', update1);
router.put('/delete1', delete1); */

module.exports = router;
