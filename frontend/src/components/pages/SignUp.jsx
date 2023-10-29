import { Link } from 'react-router-dom';

const SignUp = () => {
	const handleSignUp = () => {
		// handle login
	};

	return (
		<>
			<div className="sign-up">
				<div className="title">Sign Up</div>
				<form onSubmit={handleSignUp}>
					<input type="email" id="email" placeholder="Email" />
					<input type="password" id="password" placeholder="Password" />
					<input type="password" id="confirm-password" placeholder="Confirm Password" />
					<button type="submit" id="submit">
						Sign Up
					</button>
				</form>
				<p>
					Already have an account? <Link to="/Login">Log in here</Link>
				</p>
			</div>
		</>
	);
};

export default SignUp;
