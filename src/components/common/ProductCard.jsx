const ProductCard = () => {
	return (
		<>
			<div className="product-card">
				<img className="product-image" src="/public/watch-imgs/Rolex-GMT-Master-II.jpg"></img>
				<p className="product-name">Watch</p>
				<p className="product-price">$4,999</p>
				<div className="product-btns">
					<button className="view-btn">View</button>
					<button className="add-to-cart-btn">Add To Cart</button>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
