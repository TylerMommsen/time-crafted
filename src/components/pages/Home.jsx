import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import productsData from '../../data/watch-products.json';
import watchBrands from '../../data/watch-brands.json';

const Home = () => {
	const [newsLetterEmail, setNewsLetterEmail] = useState();
	const [featuredWatches, setFeaturedWatches] = useState([]);
	const watchShowcaseRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
	const [inView, setInView] = useState([false, false, false, false]);

	const getProducts = () => {
		const numProductsToDisplay = 6;
		const featuredWatches = productsData.slice(0, numProductsToDisplay);
		setFeaturedWatches(featuredWatches);
	};

	useEffect(() => {
		getProducts();

		const handleScroll = () => {
			const updatedInView = watchShowcaseRefs.map((ref) => {
				if (ref.current) {
					const targetRect = ref.current.getBoundingClientRect();
					return targetRect.top < window.innerHeight && targetRect.bottom >= 0;
				}
				return false;
			});

			setInView(updatedInView);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
			<div className="home">
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
									frontImg={product.frontImage}
									sideImg={product.sideImage}
								/>
							);
						})}
					</div>
					<button className="view-all-btn">
						<Link to="/Shop">View All Watches</Link>
					</button>
				</div>

				<div className="watch-showcase-section">
					<div className={'text left ' + inView[0]} ref={watchShowcaseRefs[0]}>
						<h3 className="light">Rolex Deepsea</h3>
						<p className="light">Unparalleled Style and Precision</p>
					</div>
					<img className="showcase-img" src="/Rolex-Deep-Sea-Img.jpg"></img>
				</div>

				<div className="watch-showcase-section">
					<div className={'text right ' + inView[1]} ref={watchShowcaseRefs[1]}>
						<h3 className="light">Oris Bracenet</h3>
						<p className="light">Timeless Elegance on Your Wrist</p>
					</div>
					<img className="showcase-img" src="/Oris-Bracenet.jpg"></img>
				</div>

				<div className="watch-showcase-section">
					<div className={'text left ' + inView[2]} ref={watchShowcaseRefs[2]}>
						<h3 className="dark">Rolex Lady-Datejust</h3>
						<p className="dark">Elevate Your Presence</p>
					</div>
					<img className="showcase-img" id="lady-datejust" src="/Lady-Datejust-Img.jpg"></img>
				</div>

				<div className="watch-showcase-section">
					<div className={'text right ' + inView[3]} ref={watchShowcaseRefs[3]}>
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
			</div>
		</>
	);
};

export default Home;
