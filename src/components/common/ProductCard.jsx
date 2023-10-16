import PropTypes from 'prop-types';

const ProductCard = ({ isHomePage, name, price, img }) => {
	return (
		<>
			<div className={`product-card ${isHomePage ? 'homepage' : ''}`}>
				<div className="img-container">
					<img className="product-image" src={img}></img>
				</div>
				<div className="textAndBtnsContainer">
					<p className="product-name">{name}</p>
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
	name: PropTypes.string,
	price: PropTypes.string,
	img: PropTypes.string,
};

export default ProductCard;
