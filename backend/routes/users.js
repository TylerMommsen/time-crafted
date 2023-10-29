const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.json([
		{
			username: 'bob',
			age: 25,
		},
		{
			username: 'jill',
			age: 23,
		},
		{
			username: 'rachel',
			age: 35,
		},
	]);
});

module.exports = router;
