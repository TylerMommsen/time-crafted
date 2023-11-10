import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import GitHubFooter from './components/layout/GitHubFooter';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import ProductPage from './components/pages/ProductPage';
import Wishlist from './components/pages/Wishlist';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ErrorPage from './components/pages/ErrorPage';
import { useEffect } from 'react';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import UserDashboard from './components/pages/UserDashboard';
import Checkout from './components/pages/Checkout';

const RouteSwitch = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const currentPage = location.pathname.replace('/', '').toLowerCase();

	useEffect(() => {
		if (currentPage === '') {
			navigate('/home');
		}
	}, [currentPage, navigate]);

	return (
		<>
			<Header currPage={currentPage} />
			<>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/shop/:productName" element={<ProductPage />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/dashboard" element={<UserDashboard />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</>
			<Footer />
			<GitHubFooter />
		</>
	);
};

export default RouteSwitch;
