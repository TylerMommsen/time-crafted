import ProductCard from '../common/ProductCard';
import productsData from '../../data/watch-products.json';
import { useState } from 'react';
import { useEffect } from 'react';

const Shop = () => {
	const [selectedProducts, setSelectedProducts] = useState([]);

	const getProducts = () => {
		const numProductsToDisplay = 24;
		const selectedProducts = productsData.slice(0, numProductsToDisplay);
		setSelectedProducts(selectedProducts);
	};

	useEffect(() => {
		getProducts();
	}, []);

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
					{selectedProducts.map((product, index) => (
						<ProductCard
							key={index}
							isHomePage={false}
							name={product.name}
							price={product.price}
							img={product.photo}
						/>
					))}
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
