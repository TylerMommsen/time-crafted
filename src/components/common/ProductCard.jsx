import PropTypes from 'prop-types';

const ProductCard = ({ isHomePage, brandName, modelName, price, img }) => {
	return (
		<>
			<div className={`product-card ${isHomePage ? 'homepage' : ''}`}>
				<div className="img-and-text">
					<div className="img-container">
						<img className="product-image" src={img}></img>
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
	img: PropTypes.string,
};

export default ProductCard;
