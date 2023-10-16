import ProductCard from '../common/ProductCard';
import productsData from '../../data/watch-products.json';
import watchBrands from '../../data/watch-brands.json';
import { useState } from 'react';
import { useEffect } from 'react';

const Shop = () => {
	const [selectedPage, setSelectedPage] = useState(1);
	const [selectedProducts, setSelectedProducts] = useState([]);

	const getProducts = () => {
		const numProductsToDisplay = 24;
		const startIndex = numProductsToDisplay * selectedPage - numProductsToDisplay;
		const endIndex = numProductsToDisplay * selectedPage;
		const selectedProducts = productsData.slice(startIndex, endIndex);
		setSelectedProducts(selectedProducts);
	};

	const handlePageClick = (e) => {
		console.log(e.target.textContent);
		const clickedPage = e.target.textContent;
		setSelectedPage(clickedPage);
	};

	useEffect(() => {
		getProducts();
	}, [selectedPage]);

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
					{selectedProducts.map((product, index) => {
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
								isHomePage={false}
								brandName={brandName}
								modelName={modelName}
								price={product.price}
								img={product.photo}
							/>
						);
					})}
				</div>
				<div className="page-selection">
					<button className="page" onClick={handlePageClick}>
						{parseInt(selectedPage) > 1 ? selectedPage - 1 : selectedPage}
					</button>
					<button className="page" onClick={handlePageClick}>
						{parseInt(selectedPage) === 1 ? 2 : selectedPage}
					</button>
					<button className="page" onClick={handlePageClick}>
						{parseInt(selectedPage) < 3 ? 3 : parseInt(selectedPage) + 1}
					</button>
				</div>
			</div>
		</>
	);
};

export default Shop;
