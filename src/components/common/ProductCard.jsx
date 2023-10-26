import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ isHomePage, product, brandName, modelName, price, frontImg, sideImg }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [wishlisted, setWishlisted] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleWishlistClick = (e) => {
		if (!wishlisted) {
			e.target.src = '/heart-filled.png';
			setWishlisted(true);
		} else if (wishlisted) {
			e.target.src = '/heart.png';
			setWishlisted(false);
		}
	};

	return (
		<>
			<div className={`product-card ${isHomePage ? 'homepage' : ''}`}>
				<div className="img-and-text">
					<div className="img-container">
						<img className="wishlist-icon" src="/heart.png" onClick={handleWishlistClick}></img>
						<Link
							to={`/Shop/${modelName}`}
							state={{ product: product }}
							onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
						>
							<img
								className="product-image"
								src={isHovered ? sideImg : frontImg}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							></img>
						</Link>
					</div>
					<p className="brand-name">{brandName}</p>
					<p className="model-name">{modelName}</p>
				</div>

				<div className="priceAndBtnsContainer">
					<p className="product-price">${price}</p>
					<div className="product-btns">
						<Link
							to={`/Shop/${modelName}`}
							state={{ product: product }}
							onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
						>
							<button className="view-btn">View</button>
						</Link>

						<Link
							to={`/Purchase/${modelName}`}
							state={{ product: product }}
							onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
						>
							<button className="buy-now-btn">Buy Now</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

ProductCard.propTypes = {
	isHomePage: PropTypes.bool.isRequired,
	product: PropTypes.object,
	brandName: PropTypes.string,
	modelName: PropTypes.string,
	price: PropTypes.string,
	frontImg: PropTypes.string,
	sideImg: PropTypes.string,
};

export default ProductCard;
