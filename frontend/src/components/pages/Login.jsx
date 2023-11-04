import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

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

		if (error) setError(null);
	};

	function getCookie(cname) {
		let name = cname + '=';
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}

	const handleLogin = (e) => {
		e.preventDefault();

		axios
			.post('http://localhost:5000/login', formData, { withCredentials: true })
			.then((result) => {
				console.log(result);
				if (result.data.message === 'Login successful') {
					const token = getCookie('token');
					console.log(token);
					if (token) {
						localStorage.setItem('token', token);
						navigate('/dashboard');
					}
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			{loading ? null : (
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
			)}
		</>
	);
};

export default Login;
