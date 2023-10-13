import ProductCard from '../common/ProductCard';

const Shop = () => {
	return (
		<>
			<div className="filter-container">
				<label htmlFor="filter">Filter by:</label>
				<select id="filter">
					<option value="all">All</option>
					<option value="all">Classic</option>
					<option value="all">Featured</option>
					<option value="all">New</option>
				</select>
			</div>
			<div className="product-items-container">
				<div className="product-items">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
				<div className="page-selection">
					<button className="page">1</button>
					<button className="page">2</button>
					<button className="page">3</button>
				</div>
			</div>
		</>
	);
};

export default Shop;
