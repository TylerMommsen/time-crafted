import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			navigate('/dashboard');
		}
		setLoading(false);
	}, []);

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });

		setError({ ...error, [id]: '' });
	};

	const handleSignUp = (e) => {
		e.preventDefault();

		const customError = {
			email: '',
			password: '',
			confirmPassword: '',
		};

		// Password validation
		if (formData.password.length < 6) {
			customError.password = 'Password must be at least 6 characters long.';
		}
		if (!/[^a-zA-Z0-9]/.test(formData.password)) {
			customError.password = 'Password must contain at least 1 special character.';
		}

		// Password confirmation
		if (formData.password !== formData.confirmPassword) {
			customError.confirmPassword = 'Passwords do not match.';
		}

		setError(customError);

		// If there are errors, do not proceed with the signup
		if (Object.values(customError).some((message) => message !== '')) {
			return;
		}

		axios
			.post('http://localhost:5000/signup', formData)
			.then((result) => {
				if (result.data === 'Sign up successful') {
					const token = result.headers['Set-Cookie'];
					localStorage.setItem('token', token);
					navigate('/dashboard');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			{loading ? null : (
				<div className="sign-up">
					<div className="container">
						<div className="title">Sign Up</div>
						<form onSubmit={handleSignUp}>
							<input
								type="email"
								id="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleInputChange}
								required
							/>
							<input
								type="password"
								id="password"
								placeholder="Password"
								value={formData.password}
								onChange={handleInputChange}
								required
							/>
							<input
								type="password"
								id="confirmPassword"
								placeholder="Confirm Password"
								value={formData.confirmPassword}
								onChange={handleInputChange}
								required
							/>
							{error.email && <p className="error">{error.email}</p>}
							{error.password && <p className="error">{error.password}</p>}
							{error.confirmPassword && <p className="error">{error.confirmPassword}</p>}
							<button type="submit" id="submit">
								Sign Up
							</button>
						</form>
						<p>
							Already have an account? <Link to="/Login">Log in here</Link>
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default SignUp;
