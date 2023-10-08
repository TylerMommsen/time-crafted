import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import GitHubFooter from './components/layout/GitHubFooter';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ErrorPage from './components/pages/ErrorPage';

const RouteSwitch = () => {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/Home" element={<Home />} />
					<Route path="/Shop" element={<Shop />} />
					<Route path="/About" element={<About />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
			<Footer />
			<GitHubFooter />
		</BrowserRouter>
	);
};

export default RouteSwitch;
