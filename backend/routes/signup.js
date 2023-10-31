const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
	const { email, password, confirmPassword } = req.body;

	if (!validateEmail(email)) {
		return res.status(400).json('Invalid email address');
	}

	if (password.length < 6) {
		return res.status(400).json('Password length must be at least 6 characters long');
	}

	if (!hasSpecialCharacter(password)) {
		return res.status(400).json('Password must contain at least one special character');
	}

	if (password !== confirmPassword) {
		return res.status(400).json('Passwords do not match');
	}

	try {
		const existingUser = await UserModel.findOne({ email: email });

		if (existingUser) {
			res.json('Account already exists');
		} else {
			const hashedPassword = await bcrypt.hash(password, 10);

			const newUser = new UserModel({ email, password: hashedPassword });
			const savedUser = await newUser.save();
			res.json(savedUser);
		}
	} catch (err) {
		res.json(err);
	}
});

const validateEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailRegex.test(email);
};

const hasSpecialCharacter = (password) => {
	const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
	return specialCharacterRegex.test(password);
};

module.exports = router;
