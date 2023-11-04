const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
	const { firstName, lastName, email, message } = req.body;

	if (!validateInput(firstName)) {
		return res.status(400).json('Invalid first name');
	}
	if (!validateInput(lastName)) {
		return res.status(400).json('Invalid last name');
	}
	if (!validateEmail(email)) {
		return res.status(400).json('Invalid email address');
	}
	if (!validateMessage(message)) {
		return res.status(400).json('Invalid message');
	}

	res.json({ message: 'Message sent' });
});

const validateInput = (input) => {
	if (!input || input.trim() === '') {
		return false; // Invalid if it's empty
	}
	if (input.length < 2 || input.length > 50) {
		return false; // Invalid if it doesn't meet the length criteria
	}
	if (!/^[A-Za-z]+$/.test(input)) {
		return false; // Invalid if it contains special characters or digits
	}
	return true;
};

const validateEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailRegex.test(email);
};

const validateMessage = (message) => {
	// Check for presence (not empty or only whitespace)
	if (!message || message.trim() === '') {
		return 'Message is required.';
	}

	// Check for suitable length (adjust min and max as needed)
	if (message.length < 10 || message.length > 1000) {
		return 'Message must be between 10 and 1000 characters.';
	}

	// Check for the absence of HTML or script tags
	const htmlPattern = /<[^>]*>/; // Regular expression to match HTML tags
	if (htmlPattern.test(message)) {
		return 'Message cannot contain HTML or script tags.';
	}

	return true;
};

module.exports = router;
