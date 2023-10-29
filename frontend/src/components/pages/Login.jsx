import { Link } from 'react-router-dom';

const Login = () => {
	const handleLogin = () => {
		// handle login
	};

	return (
		<>
			<div className="login">
				<div className="title">Login</div>
				<form onSubmit={handleLogin}>
					<input type="email" id="email" placeholder="Email" />
					<input type="password" id="password" placeholder="Password" />
					<button type="submit" id="submit">
						Login
					</button>
				</form>
				<p>
					Don&apos;t have an account? <Link to="/SignUp">Sign up here</Link>
				</p>
			</div>
		</>
	);
};

export default Login;
