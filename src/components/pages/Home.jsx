import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import featuredWatchesData from '../../data/featured-watches.json';
import watchBrands from '../../data/watch-brands.json';

const Home = () => {
	const [newsLetterEmail, setNewsLetterEmail] = useState();
	const [featuredWatches, setFeaturedWatches] = useState([]);

	const getProducts = () => {
		const numProductsToDisplay = 6;
		const featuredWatches = featuredWatchesData.slice(0, numProductsToDisplay);
		setFeaturedWatches(featuredWatches);
	};

	useEffect(() => {
		getProducts();
	}, []);

	const handleNewsLetterInput = (e) => {
		const field = e.target;
		setNewsLetterEmail(field.value);
	};

	const handleNewsLetterSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

	return (
		<>
			<div className="hero-section">
				<video
					className="hero-section-bg"
					src="/hero-banner.mp4"
					autoPlay
					loop
					playsInline
					muted
					preload="auto"
				></video>
				<div className="hero-section-text">
					<h1>Luxury Watches</h1>
					<h3>When attention to details matter.</h3>
					<button className="shop-now-btn">
						<Link to="/Shop">Shop Now</Link>
					</button>
				</div>
			</div>

			<div className="featured-watches-section">
				<div className="text-container">
					<h3>SHOP</h3>
					<h2>FEATURED WATCHES</h2>
				</div>

				<div className="featured-watches">
					{featuredWatches.map((product, index) => {
						let brandName = '';
						let modelName = product.name;

						for (let i = 0; i < watchBrands.length; i++) {
							if (product.name.includes(watchBrands[i])) {
								brandName = watchBrands[i];
								modelName = product.name.replace(brandName, '').trim();
							}
						}

						return (
							<ProductCard
								key={index}
								isHomePage={true}
								brandName={brandName}
								modelName={modelName}
								price={product.price}
								img={product.photo}
							/>
						);
					})}
				</div>
				<button className="view-all-btn">
					<Link to="/Shop">View All Watches</Link>
				</button>
			</div>

			<div className="watch-showcase-section">
				<div className="text left">
					<h3 className="light">Rolex Deepsea</h3>
					<p className="light">Unparalleled Style and Precision</p>
				</div>
				<img className="showcase-img" src="/Rolex-Deep-Sea-Img.jpg"></img>
			</div>

			<div className="watch-showcase-section">
				<div className="text right">
					<h3 className="light">Oris Bracenet</h3>
					<p className="light">Timeless Elegance on Your Wrist</p>
				</div>
				<img className="showcase-img" src="/Oris-Bracenet.jpg"></img>
			</div>

			<div className="watch-showcase-section">
				<div className="text left">
					<h3 className="dark">Rolex Lady-Datejust</h3>
					<p className="dark">Elevate Your Presence</p>
				</div>
				<img className="showcase-img" id="lady-datejust" src="/Lady-Datejust-Img.jpg"></img>
			</div>

			<div className="watch-showcase-section">
				<div className="text right">
					<h3 className="light">Tudor Royal</h3>
					<p className="light">Wear Time, Exude Excellence</p>
				</div>
				<img className="showcase-img" id="tudor-royal" src="/Tudor-Royal.jpg"></img>
			</div>

			<div className="news-letter-subscribe">
				<div className="img-container">
					<img className="newsletter-img" src="/Carrera-Newsletter-Section-Img.jpg"></img>
				</div>
				<div className="form-section">
					<div className="text">
						<h2 className="newsletter-title">Stay Up To Date</h2>
						<p>Be among the first to receive updates about our latest arrivals.</p>
					</div>

					<form onSubmit={handleNewsLetterSubmit}>
						<input
							type="email"
							id="email"
							name="email"
							value={newsLetterEmail}
							onChange={handleNewsLetterInput}
							placeholder="Email"
							required
						></input>
						<button type="submit" className="newsletter-submit">
							Join
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Home;
