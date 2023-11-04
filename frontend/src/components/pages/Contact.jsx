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

		const customError = {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		};

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
		</>
	);
};

export default Contact;
