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
