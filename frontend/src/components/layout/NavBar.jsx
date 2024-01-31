import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ closeBurgerMenu }) => {
	const [isBurgerMenu, setIsBurgerMenu] = useState(window.innerWidth < 1200);
	const handleClick = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

		if (isBurgerMenu) closeBurgerMenu();
	};

	useEffect(() => {
		const handleResize = () => {
			setIsBurgerMenu(window.innerWidth < 1200);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			{isBurgerMenu ? (
				<nav>
					<img src="/exit-icon.png" className="exit-icon" onClick={handleClick}></img>
					<ul>
						<li>
							<Link to="/home" onClick={handleClick}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/shop" onClick={handleClick}>
								Shop
							</Link>
						</li>
						<li>
							<Link to="/about" onClick={handleClick}>
								About
							</Link>
						</li>
						<li>
							<Link to="/contact" onClick={handleClick}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			) : (
				<nav>
					<ul>
						<li>
							<Link to="/home" onClick={handleClick}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/shop" onClick={handleClick}>
								Shop
							</Link>
						</li>
						<li>
							<Link to="/about" onClick={handleClick}>
								About
							</Link>
						</li>
						<li>
							<Link to="/contact" onClick={handleClick}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};

NavBar.propTypes = {
	closeBurgerMenu: PropTypes.func,
};

export default NavBar;
