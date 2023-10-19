import PropTypes from 'prop-types';
import { useState } from 'react';

const ProductCard = ({ isHomePage, brandName, modelName, price, frontImg, sideImg }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<>
			<div
				className={`product-card ${isHomePage ? 'homepage' : ''}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="img-and-text">
					<div className="img-container">
						<img className="product-image" src={isHovered ? sideImg : frontImg}></img>
					</div>
					<p className="brand-name">{brandName}</p>
					<p className="model-name">{modelName}</p>
				</div>

				<div className="priceAndBtnsContainer">
					<p className="product-price">${price}</p>
					<div className="product-btns">
						<button className="view-btn">View</button>
						<button className="add-to-cart-btn">Add To Cart</button>
					</div>
				</div>
			</div>
		</>
	);
};

ProductCard.propTypes = {
	isHomePage: PropTypes.bool.isRequired,
	brandName: PropTypes.string,
	modelName: PropTypes.string,
	price: PropTypes.string,
	frontImg: PropTypes.string,
	sideImg: PropTypes.string,
};

export default ProductCard;
