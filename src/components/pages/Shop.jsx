import ProductCard from '../common/ProductCard';
import productsData from '../../data/watch-products.json';
import watchBrands from '../../data/watch-brands.json';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
	const [selectedPage, setSelectedPage] = useState(1);
	const [filteredProducts, setFilteredProducts] = useState(productsData);
	const [products, setProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [currentFilters, setCurrentFilters] = useState([]);
	const numProductsToDisplay = 24;

	const getProducts = () => {
		const startIndex = numProductsToDisplay * selectedPage - numProductsToDisplay;
		const endIndex = numProductsToDisplay * selectedPage;
		const selectedProducts = filteredProducts.slice(startIndex, endIndex);
		setProducts(selectedProducts);
	};

	const handlePageClick = (e) => {
		const clickedPage = e.target.textContent;
		setSelectedPage(clickedPage);
		window.scrollTo(0, 0);
	};

	const handleSearch = () => {
		// do search
	};

	const updateProducts = (allFilters) => {
		if (allFilters.length === 0) {
			setFilteredProducts(productsData);
			return;
		}

		let allProducts = productsData;

		const brandFilters = [];

		allFilters.forEach((filter) => {
			if (filter.type === 'brand') brandFilters.push(filter);
		});

		// filter all products by brand first if brands have been selected
		if (brandFilters.length > 0) {
			allProducts = productsData.filter((product) => {
				const productBrand = product.name.toLowerCase();
				return brandFilters.some((brandFilter) =>
					productBrand.includes(brandFilter.value.toLowerCase())
				);
			});
		}

		let updatedProducts = [];

		for (let i = 0; i < allProducts.length; i++) {
			let includeProduct = true;

			allFilters.forEach((filter) => {
				if (filter.type === 'brand') {
					return;
				}

				if (filter.type === 'price') {
					const productPrice = parseInt(allProducts[i].price.replace(',', ''));
					if (filter.value.toLowerCase() === 'less than $2,000') {
						if (productPrice < 2000) return;
					}
					if (filter.value.toLowerCase() === '$2,000 - $4,999') {
						if (productPrice >= 2000 && productPrice <= 4999) return;
					}
					if (filter.value.toLowerCase() === '$5,000 - $10,000') {
						if (productPrice >= 5000 && productPrice <= 10000) return;
					}
					if (filter.value.toLowerCase() === '$10,000+') {
						if (productPrice > 10000) return;
					}
				}

				if (filter.type === 'condition') {
					if (allProducts[i].condition) {
						if (allProducts[i].condition.toLowerCase().includes(filter.value.toLowerCase())) {
							return;
						}
					}
				}

				if (filter.type === 'dial color') {
					if (allProducts[i].dial.toLowerCase().includes(filter.value.toLowerCase())) {
						return;
					}
				}

				if (filter.type === 'size') {
					if (allProducts[i].case) {
						if (allProducts[i].case.toLowerCase().includes(filter.value.toLowerCase())) {
							return;
						}
					}
				}

				if (filter.type === 'gender') {
					if (allProducts[i].gender) {
						if (
							filter.value.toLowerCase() === 'women' &&
							allProducts[i].gender.toLowerCase() === 'ladies'
						) {
							return;
						}
						if (
							filter.value.toLowerCase() === 'men' &&
							allProducts[i].gender.toLowerCase() === "men's"
						) {
							return;
						}
						if (allProducts[i].gender.toLowerCase() === 'unisex') return;
					}
				}

				if (filter.type === 'metal') {
					if (allProducts[i].case) {
						if (allProducts[i].case.toLowerCase().includes(filter.value.toLowerCase())) {
							return;
						}
					}
				}

				if (filter.type === 'bracelet') {
					if (allProducts[i].bracelet) {
						if (allProducts[i].bracelet.toLowerCase().includes(filter.value.toLowerCase())) {
							return;
						}
					}
				}

				// if no filter conditions have been met then don't include the product
				includeProduct = false;
			});

			if (includeProduct) {
				updatedProducts.push(allProducts[i]);
			}
		}

		setFilteredProducts(updatedProducts);
	};

	const updateFilters = (filterType, filterValue) => {
		const newFilter = { type: filterType, value: filterValue };
		const updatedFilters = [...currentFilters, newFilter];

		const filterExists = currentFilters.some(
			(filter) => filter.type === newFilter.type && filter.value === newFilter.value
		);

		if (!filterExists) {
			setCurrentFilters(updatedFilters);
			updateProducts(updatedFilters);
		}
	};

	const removeFilter = (filterToRemove) => {
		const updatedFilters = currentFilters.filter(
			(filter) => filter.type !== filterToRemove.type || filter.value !== filterToRemove.value
		);
		setCurrentFilters(updatedFilters);
		updateProducts(updatedFilters);
	};

	useEffect(() => {
		getProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedPage, currentFilters]);

	return (
		<>
			<div className="shop">
				<img className="shop-page-banner" src="/Watch-Shop-Page-Banner.jpg"></img>

				<div className="shop-description-container">
					<h2 className="shop-description">Welcome to Time Crafted Watches</h2>
					<p className="shop-description-small">
						Step into the world of Time Crafted, your trusted online marketplace for
						previously-owned high-end timepieces. Our diverse catalog boasts a rich assortment of
						prestigious brands, guaranteeing you&apos;ll uncover the ideal watch that resonates with
						your taste.
					</p>
				</div>

				<div className="shop-section">
					<div className="filter-container">
						<h2>Filter By:</h2>
						<div className="filter-options">
							<div className="filter-section">
								<h3 className="filter-title">Price</h3>
								<div className="options">
									<button
										className="filter-option"
										onClick={(e) => updateFilters('price', e.target.textContent)}
									>
										Less than $2,000
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('price', e.target.textContent)}
									>
										$2,000 - $4,999
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('price', e.target.textContent)}
									>
										$5,000 - $10,000
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('price', e.target.textContent)}
									>
										$10,000+
									</button>
								</div>
							</div>
							<div className="filter-section">
								<h3 className="filter-title">Condition</h3>
								<div className="options">
									<button
										className="filter-option"
										onClick={(e) => updateFilters('condition', e.target.textContent)}
									>
										Excellent
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('condition', e.target.textContent)}
									>
										Pre-Owned/Unworn
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('condition', e.target.textContent)}
									>
										Vintage
									</button>
								</div>
							</div>
							<div className="filter-section">
								<h3 className="filter-title">Dial Color</h3>
								<div className="options">
									<button
										className="filter-option"
										onClick={(e) => updateFilters('dial color', e.target.textContent)}
									>
										Black
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('dial color', e.target.textContent)}
									>
										Silver
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('dial color', e.target.textContent)}
									>
										White
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('dial color', e.target.textContent)}
									>
										Blue
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('dial color', e.target.textContent)}
									>
										Diamonds
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('dial color', e.target.textContent)}
									>
										Champagne
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('dial color', e.target.textContent)}
									>
										Slate
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('dial color', e.target.textContent)}
									>
										Brown
									</button>
								</div>
							</div>
							<div className="filter-section">
								<h3 className="filter-title">Size</h3>
								<div className="options">
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										48mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										46mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										45mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										44mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										43mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										42mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										41mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										40mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										39mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										38mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										37mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										36mm
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('size', e.target.textContent)}
									>
										35mm
									</button>
								</div>
							</div>
							<div className="filter-section">
								<h3 className="filter-title">Gender</h3>
								<div className="options">
									<button
										className="filter-option"
										onClick={(e) => updateFilters('gender', e.target.textContent)}
									>
										Men
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('gender', e.target.textContent)}
									>
										Women
									</button>
								</div>
							</div>
							<div className="filter-section">
								<h3 className="filter-title">Metal</h3>
								<div className="options">
									<button
										className="filter-option"
										onClick={(e) => updateFilters('metal', e.target.textContent)}
									>
										Stainless Steel
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('metal', e.target.textContent)}
									>
										Yellow Gold
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('metal', e.target.textContent)}
									>
										Rose Gold
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('metal', e.target.textContent)}
									>
										White Gold
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('metal', e.target.textContent)}
									>
										Titanium
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('metal', e.target.textContent)}
									>
										Bronze
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('metal', e.target.textContent)}
									>
										Ceramic
									</button>
								</div>
							</div>
							<div className="filter-section">
								<h3 className="filter-title">Bracelet</h3>
								<div className="options">
									<button
										className="filter-option"
										onClick={(e) => updateFilters('bracelet', e.target.textContent)}
									>
										Oyster
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('bracelet', e.target.textContent)}
									>
										Jubilee
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('bracelet', e.target.textContent)}
									>
										Leather
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('bracelet', e.target.textContent)}
									>
										President
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('bracelet', e.target.textContent)}
									>
										Rubber
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('bracelet', e.target.textContent)}
									>
										NATO
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('bracelet', e.target.textContent)}
									>
										Integral
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('bracelet', e.target.textContent)}
									>
										Pearlmaster
									</button>
									<button
										className="filter-option"
										onClick={(e) => updateFilters('bracelet', e.target.textContent)}
									>
										Quartz
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="product-items-container">
						<div className="all-brands-container">
							<div className="all-brands">
								<button onClick={() => updateFilters('brand', 'Rolex')}>
									<img src="/logo-icons/rolex-icon.svg" className="logo-icon" />
								</button>
								<button onClick={() => updateFilters('brand', 'Oris')}>
									<img src="/logo-icons/oris-icon.svg" className="logo-icon" />
								</button>
								<button onClick={() => updateFilters('brand', 'Omega')}>
									<img src="/logo-icons/omega-icon.svg" className="logo-icon" />
								</button>
								<button onClick={() => updateFilters('brand', 'Tudor')}>
									<img src="/logo-icons/tudor-icon.svg" className="logo-icon" />
								</button>
								<button onClick={() => updateFilters('brand', 'Breitling')}>
									<img src="/logo-icons/breitling-icon.svg" className="logo-icon" />
								</button>
								<button onClick={() => updateFilters('brand', 'Cartier')}>
									<img src="/logo-icons/cartier-icon.svg" className="logo-icon" />
								</button>
								<button onClick={() => updateFilters('brand', 'Longines')}>
									<img src="/logo-icons/longines-icon.svg" className="logo-icon" />
								</button>
								<button onClick={() => updateFilters('brand', 'Panerai')}>
									<img src="/logo-icons/panerai-icon.svg" className="logo-icon" />
								</button>
								<button onClick={() => updateFilters('brand', 'Patek Philippe')}>
									<img src="/logo-icons/patek-philippe-icon.svg" className="logo-icon" />
								</button>
								<button onClick={() => updateFilters('brand', 'Audemars Piguet')}>
									<img src="/logo-icons/audemars-piguet-icon.svg" className="logo-icon" />
								</button>
							</div>
						</div>

						<div className="search-container">
							<div className="active-filters">
								<h3 id="current-filters-title">Current Filters: </h3>
								<ul>
									{currentFilters.map((filter, index) => (
										<li key={index}>
											{filter.value}
											<button onClick={() => removeFilter(filter)}>Remove</button>
										</li>
									))}
								</ul>
							</div>

							<div className="search-bar-items">
								<p id="total-products-display">{filteredProducts.length + ' Items'}</p>
								<input
									type="text"
									placeholder="Search..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="search-bar"
								></input>
								<button onClick={handleSearch}>Search</button>
							</div>
						</div>

						<div className="product-items">
							{products.map((product, index) => {
								let brandName = '';
								let modelName = product.name;

								for (let i = 0; i < watchBrands.length; i++) {
									if (product.name.includes(watchBrands[i])) {
										brandName = watchBrands[i];
										modelName = product.name.replace(brandName, '').trim();
									}
								}

								return (
									<Link to={`/Shop/${product.name}`} state={{ product: product }} key={index}>
										<ProductCard
											isHomePage={false}
											brandName={brandName}
											modelName={modelName}
											price={product.price}
											frontImg={product.frontImage}
											sideImg={product.sideImage}
										/>
									</Link>
								);
							})}
						</div>

						<div className="page-selection">
							{parseInt(selectedPage) > 1 ? (
								<button className="page" onClick={handlePageClick}>
									{parseInt(selectedPage) ===
									Math.ceil(filteredProducts.length / numProductsToDisplay)
										? parseInt(selectedPage) - 2
										: parseInt(selectedPage) - 1}
								</button>
							) : (
								<button className="page selected" onClick={handlePageClick}>
									{selectedPage}
								</button>
							)}

							{parseInt(selectedPage) > 1 &&
							parseInt(selectedPage) < Math.ceil(filteredProducts.length / numProductsToDisplay) ? (
								<button className="page selected" onClick={handlePageClick}>
									{selectedPage}
								</button>
							) : parseInt(selectedPage) === 1 ? (
								<button className="page" onClick={handlePageClick}>
									{2}
								</button>
							) : (
								<button className="page" onClick={handlePageClick}>
									{Math.ceil(filteredProducts.length / numProductsToDisplay) - 1}
								</button>
							)}

							{parseInt(selectedPage) <
							Math.ceil(filteredProducts.length / numProductsToDisplay) ? (
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

							{parseInt(selectedPage) <
							Math.ceil(filteredProducts.length / numProductsToDisplay) - 1 ? (
								<p>...</p>
							) : null}

							{parseInt(selectedPage) <
							Math.ceil(filteredProducts.length / numProductsToDisplay) - 1 ? (
								<button className="page" onClick={handlePageClick}>
									{Math.ceil(filteredProducts.length / numProductsToDisplay)}
								</button>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Shop;
