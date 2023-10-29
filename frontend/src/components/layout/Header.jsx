import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ currPage }) => {
	const [scrolled, setScrolled] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

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

	return (
		<>
			<header className={`${scrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
				<h1 className="header-title">
					<Link to="/Home">Time Crafted</Link>
				</h1>
				<NavBar />
				<div className="header-cart-selections">
					<Link to={'/Wishlist'}>
						<img id="wishlist-icon" src="/wishlist-icon.png"></img>
					</Link>
					<Link to={'/Login'}>
						<img id="user-icon" src="/user-icon.png"></img>
					</Link>
				</div>
			</header>
		</>
	);
};

Header.propTypes = {
	currPage: PropTypes.string.isRequired,
};

export default Header;
