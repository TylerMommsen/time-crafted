import ProductCard from '../common/ProductCard';
import productsData from '../../data/watch-products.json';
import watchBrands from '../../data/watch-brands.json';
import { useState } from 'react';
import { useEffect } from 'react';

const Shop = () => {
	const [selectedPage, setSelectedPage] = useState(1);
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [numProductsToDisplay, setNumProductsToDisplay] = useState(24);

	const getProducts = () => {
		const startIndex = numProductsToDisplay * selectedPage - numProductsToDisplay;
		const endIndex = numProductsToDisplay * selectedPage;
		const selectedProducts = productsData.slice(startIndex, endIndex);
		setSelectedProducts(selectedProducts);
	};

	const handlePageClick = (e) => {
		const clickedPage = e.target.textContent;
		setSelectedPage(clickedPage);
		window.scrollTo(0, 0);
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
					{parseInt(selectedPage) > 1 ? (
						<button className="page" onClick={handlePageClick}>
							{parseInt(selectedPage) === Math.ceil(productsData.length / numProductsToDisplay)
								? parseInt(selectedPage) - 2
								: parseInt(selectedPage) - 1}
						</button>
					) : (
						<button className="page" onClick={handlePageClick}>
							{selectedPage}
						</button>
					)}

					{parseInt(selectedPage) > 1 &&
					parseInt(selectedPage) < Math.ceil(productsData.length / numProductsToDisplay) ? (
						<button className="page" onClick={handlePageClick}>
							{selectedPage}
						</button>
					) : parseInt(selectedPage) === 1 ? (
						<button className="page" onClick={handlePageClick}>
							{2}
						</button>
					) : (
						<button className="page" onClick={handlePageClick}>
							{Math.ceil(productsData.length / numProductsToDisplay) - 1}
						</button>
					)}

					{parseInt(selectedPage) < Math.ceil(productsData.length / numProductsToDisplay) ? (
						<button className="page" onClick={handlePageClick}>
							{parseInt(selectedPage) > 1 ? parseInt(selectedPage) + 1 : parseInt(selectedPage) + 2}
						</button>
					) : (
						<button className="page" onClick={handlePageClick}>
							{Math.ceil(productsData.length / numProductsToDisplay)}
						</button>
					)}

					{parseInt(selectedPage) < Math.ceil(productsData.length / numProductsToDisplay) - 1 ? (
						<p>...</p>
					) : null}

					{parseInt(selectedPage) < Math.ceil(productsData.length / numProductsToDisplay) - 1 ? (
						<button className="page" onClick={handlePageClick}>
							{Math.ceil(productsData.length / numProductsToDisplay)}
						</button>
					) : null}
				</div>
			</div>
		</>
	);
};

export default Shop;
