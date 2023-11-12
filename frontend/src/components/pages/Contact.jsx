import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});
	const [error, setError] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});

	const handleInput = (e) => {
		const field = e.target;
		setFormData({
			...formData,
			[field.name]: field.value,
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const validateInput = (input) => {
			if (!input || input.trim() === '') {
				return 'Input is required.'; // Invalid if it's empty
			}
			if (input.length < 2 || input.length > 50) {
				return 'Length must be between 2 and 50 characters.'; // Invalid if it doesn't meet the length criteria
			}
			if (!/^[A-Za-z]+$/.test(input)) {
				return 'Input cannot contain special characters.'; // Invalid if it contains special characters or digits
			}
			return true;
		};

		const validateEmail = (email) => {
			const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			if (emailRegex.test(email)) {
				return true;
			} else {
				return 'Please enter a valid email';
			}
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

		const customError = {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		};

		const firstNameOK = validateInput(formData.firstName);
		const lastNameOK = validateInput(formData.lastName);
		const emailOK = validateEmail(formData.email);
		const messageOK = validateMessage(formData.message);

		if (firstNameOK !== true) {
			customError.firstName = firstNameOK;
		}
		if (lastNameOK !== true) {
			customError.lastName = lastNameOK;
		}
		if (emailOK !== true) {
			customError.email = emailOK;
		}
		if (messageOK !== true) {
			customError.message = messageOK;
		}

		setError(customError);

		// If there are errors, do not proceed with the message
		if (Object.values(customError).some((message) => message !== '')) {
			return;
		}

		axios
			.post('http://localhost:5000/contact', formData)
			.then((result) => {
				if (result.data === 'Message sent') {
					// show success
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className="contact">
				<div className="container">
					<p className="contact-title">Get in touch with us.</p>
					<form onSubmit={handleFormSubmit}>
						<div className="names-container">
							<div className="form-section">
								<label htmlFor="first-name">First Name:</label>
								<input
									type="text"
									id="first-name"
									name="firstName"
									value={formData.name}
									onChange={handleInput}
									placeholder="First Name"
									required
								/>
							</div>

							<div className="form-section">
								<label htmlFor="last-name">Last Name:</label>
								<input
									type="text"
									id="last-name"
									name="lastName"
									value={formData.name}
									onChange={handleInput}
									placeholder="Last Name"
									required
								/>
							</div>
						</div>

						<div className="form-section">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.name}
								onChange={handleInput}
								placeholder="Email"
								required
							/>
						</div>

						<div className="form-section">
							<label htmlFor="message">Message:</label>
							<textarea
								type="text"
								id="message"
								name="message"
								value={formData.name}
								onChange={handleInput}
								rows="6"
								placeholder="Write your message here"
								required
							/>
						</div>
						{error.firstName && <p className="error">{error.firstName}</p>}
						{error.lastName && <p className="error">{error.lastName}</p>}
						{error.email && <p className="error">{error.email}</p>}
						{error.message && <p className="error">{error.message}</p>}

						<div className="form-section">
							<button type="submit" className="form-submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
