import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ currPage }) => {
	const [scrolled, setScrolled] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

	const toggleBurgerMenu = () => {
		setIsBurgerMenuOpen((open) => !open);
	};

	useEffect(() => {
		if (currPage !== 'home') {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}, [currPage]);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (currentScrollPos > window.innerHeight - 100 || currPage !== 'home') {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			const shouldHide = currentScrollPos > prevScrollPos && currentScrollPos > 300;
			setIsHidden(shouldHide);

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line
	}, [prevScrollPos, currPage]);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 1200);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const closeBurgerMenu = () => {
		setIsBurgerMenuOpen(false);
	};

	return (
		<>
			<header className={`${scrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
				{isSmallScreen ? (
					<>
						<div className="burger-nav">
							<img
								src="/burger-menu.svg"
								className={`burger-menu-icon ${isBurgerMenuOpen ? 'open' : ''}`}
								onClick={toggleBurgerMenu}
							></img>
							{isBurgerMenuOpen && <NavBar closeBurgerMenu={closeBurgerMenu} />}
						</div>

						<h1 className="header-title">
							<Link to="/home">Time Crafted</Link>
						</h1>
						<div className="header-cart-selections">
							<Link
								to="/wishlist"
								onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
							>
								<img id="wishlist-icon" src="/wishlist-icon.png"></img>
							</Link>
							<Link
								to="/login"
								onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
							>
								<img id="user-icon" src="/user-icon.png"></img>
							</Link>
						</div>
					</>
				) : (
					<>
						<h1 className="header-title">
							<Link to="/home">Time Crafted</Link>
						</h1>
						<NavBar />
						<div className="header-cart-selections">
							<Link
								to="/wishlist"
								onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
							>
								<img id="wishlist-icon" src="/wishlist-icon.png"></img>
							</Link>
							<Link
								to="/login"
								onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
							>
								<img id="user-icon" src="/user-icon.png"></img>
							</Link>
						</div>
					</>
				)}
			</header>
		</>
	);
};

Header.propTypes = {
	currPage: PropTypes.string.isRequired,
};

export default Header;
