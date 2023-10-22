import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import GitHubFooter from './components/layout/GitHubFooter';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import ProductPage from './components/pages/ProductPage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ErrorPage from './components/pages/ErrorPage';
import { useEffect } from 'react';

const RouteSwitch = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const currentPage = location.pathname.replace('/', '').toLowerCase();

	useEffect(() => {
		if (currentPage === '') {
			navigate('/Home');
		}
	}, [currentPage, navigate]);

	return (
		<>
			<Header currPage={currentPage} />
			<>
				<Routes>
					<Route path="/Home" element={<Home />} />
					<Route path="/Shop" element={<Shop />} />
					<Route path="/Shop/:productName" element={<ProductPage />} />
					<Route path="/About" element={<About />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</>
			<Footer />
			<GitHubFooter />
		</>
	);
};

export default RouteSwitch;
