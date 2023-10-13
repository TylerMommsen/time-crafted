import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const [newsLetterEmail, setNewsLetterEmail] = useState();

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
					<h1>WORK OF ART</h1>
					<h3>When attention to details matter.</h3>
					<button className="shop-now-btn">
						<Link to="/Shop">Shop Now</Link>
					</button>
				</div>
			</div>

			<div className="featured-watches">Featured Watches</div>

			<div className="new-arrival-watches">New Arrival Watches</div>

			<div className="news-letter-subscribe">
				<h2 className="newsletter-title">Join our newsletter</h2>
				<p>Be the first to know our best deals and promos!</p>
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
		</>
	);
};

export default Home;
