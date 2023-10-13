import { useState } from 'react';

const Contact = () => {
	const [formData, setFormData] = useState({
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
		console.log(formData);
	};

	return (
		<>
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
