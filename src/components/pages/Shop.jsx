import ProductCard from '../common/ProductCard';
import productsData from '../../data/watch-products.json';
import watchBrands from '../../data/watch-brands.json';
import { useState } from 'react';
import { useEffect } from 'react';

const Shop = () => {
	const [selectedPage, setSelectedPage] = useState(1);
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const numProductsToDisplay = 24;

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

	const handleSearch = () => {
		// do search
	};

	useEffect(() => {
		getProducts();
	}, [selectedPage]);

	return (
		<>
			<img className="shop-page-banner" src="/Watch-Shop-Page-Banner.jpg"></img>

			<div className="shop-description-container">
				<h2 className="shop-description">Welcome to Time Crafted Watches</h2>
				<p className="shop-description-small">
					Step into the world of Time Crafted, your trusted online marketplace for previously-owned
					high-end timepieces. Our diverse catalog boasts a rich assortment of prestigious brands,
					guaranteeing you&apos;ll uncover the ideal watch that resonates with your taste.
				</p>
			</div>

			<div className="shop-section">
				<div className="filter-container">
					<h2>Filter By:</h2>
					<div className="filter-options">
						<div className="filter-section">
							<h3 className="filter-title">Price</h3>
							<div className="options">
								<button className="filter-option">Less than $2,000</button>
								<button className="filter-option">$2,000 - $4,999</button>
								<button className="filter-option">$5,000 - $10,000</button>
								<button className="filter-option">$10,000+</button>
							</div>
						</div>
						<div className="filter-section">
							<h3 className="filter-title">Condition</h3>
							<div className="options">
								<button className="filter-option">Excellent</button>
								<button className="filter-option">Pre-Owned/Unworn</button>
								<button className="filter-option">Vintage</button>
							</div>
						</div>
						<div className="filter-section">
							<h3 className="filter-title">Color</h3>
							<div className="options">
								<button className="filter-option">Black</button>
								<button className="filter-option">Silver</button>
								<button className="filter-option">White</button>
								<button className="filter-option">Blue</button>
								<button className="filter-option">Diamonds</button>
								<button className="filter-option">Champagne</button>
								<button className="filter-option">Slate</button>
								<button className="filter-option">Brown</button>
							</div>
						</div>
						<div className="filter-section">
							<h3 className="filter-title">Size</h3>
							<div className="options">
								<button className="filter-option">48mm</button>
								<button className="filter-option">46mm</button>
								<button className="filter-option">45mm</button>
								<button className="filter-option">44mm</button>
								<button className="filter-option">43mm</button>
								<button className="filter-option">42mm</button>
								<button className="filter-option">41mm</button>
								<button className="filter-option">40mm</button>
								<button className="filter-option">39mm</button>
								<button className="filter-option">38mm</button>
								<button className="filter-option">37mm</button>
								<button className="filter-option">36mm</button>
								<button className="filter-option">35mm</button>
							</div>
						</div>
						<div className="filter-section">
							<h3 className="filter-title">Gender</h3>
							<div className="options">
								<button className="filter-option">Men</button>
								<button className="filter-option">Women</button>
							</div>
						</div>
						<div className="filter-section">
							<h3 className="filter-title">Metal</h3>
							<div className="options">
								<button className="filter-option">Stainless Steel</button>
								<button className="filter-option">Steel And Gold</button>
								<button className="filter-option">Yellow Gold</button>
								<button className="filter-option">Rose Gold</button>
								<button className="filter-option">White Gold</button>
								<button className="filter-option">Steel And Rose Gold</button>
							</div>
						</div>
						<div className="filter-section">
							<h3 className="filter-title">Bracelet</h3>
							<div className="options">
								<button className="filter-option">Oyster</button>
								<button className="filter-option">Jubilee</button>
								<button className="filter-option">Leather</button>
								<button className="filter-option">President</button>
								<button className="filter-option">Rubber</button>
							</div>
						</div>
					</div>
				</div>

				<div className="product-items-container">
					<div className="all-brands-container">
						<div className="all-brands">
							<button>
								<img src="/logo-icons/rolex-icon.svg" className="logo-icon" />
							</button>
							<button>
								<img src="/logo-icons/oris-icon.svg" className="logo-icon" />
							</button>
							<button>
								<img src="/logo-icons/omega-icon.svg" className="logo-icon" />
							</button>
							<button>
								<img src="/logo-icons/tudor-icon.svg" className="logo-icon" />
							</button>
							<button>
								<img src="/logo-icons/breitling-icon.svg" className="logo-icon" />
							</button>
							<button>
								<img src="/logo-icons/cartier-icon.svg" className="logo-icon" />
							</button>
							<button>
								<img src="/logo-icons/longines-icon.svg" className="logo-icon" />
							</button>
							<button>
								<img src="/logo-icons/panerai-icon.svg" className="logo-icon" />
							</button>
							<button>
								<img src="/logo-icons/patek-philippe-icon.svg" className="logo-icon" />
							</button>
							<button>
								<img src="/logo-icons/audemars-piguet-icon.svg" className="logo-icon" />
							</button>
						</div>
					</div>

					<div className="active-filters">
						<h3 id="current-filters-title"></h3>
					</div>

					<div className="search-container">
						<p id="total-products-display">{productsData.length + ' Items'}</p>
						<input
							type="text"
							placeholder="Search..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="search-bar"
						></input>
						<button onClick={handleSearch}>Search</button>
					</div>

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
							<button className="page selected" onClick={handlePageClick}>
								{selectedPage}
							</button>
						)}

						{parseInt(selectedPage) > 1 &&
						parseInt(selectedPage) < Math.ceil(productsData.length / numProductsToDisplay) ? (
							<button className="page selected" onClick={handlePageClick}>
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
								{parseInt(selectedPage) > 1
									? parseInt(selectedPage) + 1
									: parseInt(selectedPage) + 2}
							</button>
						) : (
							<button className="page selected" onClick={handlePageClick}>
								{selectedPage}
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
			</div>
		</>
	);
};

export default Shop;
