import { Link } from 'react-router-dom';

const UserDashboard = () => {
	const handleLogout = () => {
		localStorage.removeItem('token');
	};

	return (
		<>
			<div className="user-dashboard">
				<div className="container">
					<div className="title">Settings</div>

					<Link to="/orders" className="btn">
						Orders
					</Link>
					<Link to="/wishlist" className="btn">
						Wishlist Items
					</Link>
					<Link to="/account" className="btn">
						Account Information
					</Link>
					<Link to="/login" onClick={handleLogout} className="logout-btn">
						Logout
					</Link>
				</div>
			</div>
		</>
	);
};

export default UserDashboard;
