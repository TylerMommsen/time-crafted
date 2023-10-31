import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState(null);

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });

		if (error) setError(null);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		axios
			.post('http://localhost:5000/login', formData)
			.then((result) => console.log(result))
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className="login">
				<div className="container">
					<div className="title">Login</div>
					<form onSubmit={handleLogin}>
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
						{error && <p className="error">{error}</p>}
						<button type="submit" id="submit">
							Login
						</button>
					</form>
					<p>
						Don&apos;t have an account? <Link to="/signup">Sign up here</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
