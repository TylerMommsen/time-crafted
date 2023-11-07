const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
	const email = req.body.email;
	console.log(email);

	if (!validateEmail(email)) {
		return res.status(400).json('Invalid email address');
	}

	return res.json({ message: 'Added to newsletter' });
});

const validateEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailRegex.test(email);
};

module.exports = router;
