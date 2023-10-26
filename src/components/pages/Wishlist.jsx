import { useEffect, useState } from 'react';
import productsData from '../../data/watch-products.json';
import ProductCard from '../common/ProductCard';

const Wishlist = () => {
	const [wishlistItems, setWishlistItems] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	const [selectedPage, setSelectedPage] = useState(1);
	const numProductsToDisplay = 12;

	const currPageProducts = (products) => {
		const startIndex = numProductsToDisplay * selectedPage - numProductsToDisplay;
		const endIndex = numProductsToDisplay * selectedPage;
		const selectedProducts = products.slice(startIndex, endIndex);
		setDisplayProducts(selectedProducts);
	};

	const handlePageClick = (e) => {
		const clickedPage = e.target.textContent;
		setSelectedPage(clickedPage);
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		const tempWishlistItems = [];
		for (let i = 0; i < 38; i++) {
			tempWishlistItems.push(productsData[i]);
		}

		setWishlistItems(tempWishlistItems);
		currPageProducts(tempWishlistItems);
	}, [selectedPage]);

	return (
		<>
			<div className="wishlist">
				<div className="container">
					<h1 id="wishlist-title">Wishlist</h1>
					<div className="wishlist-items">
						{displayProducts.map((product, index) => {
							return (
								<ProductCard
									key={index}
									isHomePage={false}
									product={product}
									brandName={product.manufacturer}
									modelName={product.name.replace(product.manufacturer, '').trim()}
									price={product.price}
									frontImg={product.frontImage}
									sideImg={product.sideImage}
								/>
							);
						})}
					</div>
					<div className="page-selection">
						{parseInt(selectedPage) > 1 ? (
							<button className="page" onClick={handlePageClick}>
								{parseInt(selectedPage) === Math.ceil(wishlistItems.length / numProductsToDisplay)
									? parseInt(selectedPage) - 2
									: parseInt(selectedPage) - 1}
							</button>
						) : (
							<button className="page selected" onClick={handlePageClick}>
								{selectedPage}
							</button>
						)}

						{parseInt(selectedPage) > 1 &&
						parseInt(selectedPage) < Math.ceil(wishlistItems.length / numProductsToDisplay) ? (
							<button className="page selected" onClick={handlePageClick}>
								{selectedPage}
							</button>
						) : parseInt(selectedPage) === 1 ? (
							<button className="page" onClick={handlePageClick}>
								{2}
							</button>
						) : (
							<button className="page" onClick={handlePageClick}>
								{Math.ceil(wishlistItems.length / numProductsToDisplay) - 1}
							</button>
						)}

						{parseInt(selectedPage) < Math.ceil(wishlistItems.length / numProductsToDisplay) ? (
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

						{parseInt(selectedPage) < Math.ceil(wishlistItems.length / numProductsToDisplay) - 1 ? (
							<p>...</p>
						) : null}

						{parseInt(selectedPage) < Math.ceil(wishlistItems.length / numProductsToDisplay) - 1 ? (
							<button className="page" onClick={handlePageClick}>
								{Math.ceil(wishlistItems.length / numProductsToDisplay)}
							</button>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
};

export default Wishlist;
