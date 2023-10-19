import { Link } from 'react-router-dom';

const NavBar = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/Home" onClick={scrollToTop}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/Shop" onClick={scrollToTop}>
							Shop
						</Link>
					</li>
					<li>
						<Link to="/About" onClick={scrollToTop}>
							About
						</Link>
					</li>
					<li>
						<Link to="/Contact" onClick={scrollToTop}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
