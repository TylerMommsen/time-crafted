import { Link } from 'react-router-dom';

const NavBar = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	};

	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/home" onClick={scrollToTop}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/shop" onClick={scrollToTop}>
							Shop
						</Link>
					</li>
					<li>
						<Link to="/about" onClick={scrollToTop}>
							About
						</Link>
					</li>
					<li>
						<Link to="/contact" onClick={scrollToTop}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
