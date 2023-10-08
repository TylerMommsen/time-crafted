import NavBar from './NavBar';

const Header = () => {
	return (
		<>
			<header>
				<h1 className="header-title">Time Crafted</h1>
				<NavBar />
				<div className="header-cart-selections">
					<p>View Cart</p>
				</div>
			</header>
		</>
	);
};

export default Header;
