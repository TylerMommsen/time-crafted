import { useLocation } from 'react-router-dom';

const ProductPage = () => {
	const location = useLocation();
	const product = location.state.product;

	const handleProductGuaranteeClick = (e) => {
		const sectionInfo = e.target.nextElementSibling;
		const contentHeight = e.target.nextElementSibling.scrollHeight + 'px';
		sectionInfo.style.maxHeight = sectionInfo.style.maxHeight === '0px' ? contentHeight : '0px';
	};

	const maxHeight = {
		maxHeight: '0',
	};

	return (
		<>
			<div className="product-page">
				<div className="main-details">
					<div className="img-container">
						<img className="product-img" src={product.frontImage}></img>
					</div>
					<div className="main-details-info">
						<div className="name">{product.name}</div>
						<div className="price">{'$' + product.price}</div>
						<div className="description">{product.description}</div>
						<div className="buttons-container">
							<button className="buy-button">Buy</button>
							<button className="wishlist-button">Wishlist</button>
						</div>
					</div>
				</div>

				<div className="extra-details">
					<div className="product-guarantees">
						<div className="section">
							<p className="section-title" onClick={handleProductGuaranteeClick}>
								Authenticity
							</p>
							<p className="section-info" style={maxHeight}>
								* All watches are guaranteed to be 100% genuine and certified authentic.
								Certificates are issued by WatchCSA, the industry&apos;s leading independent
								authority on watch authentication. WatchCSA Certified Pre-Owned certificates are
								provided for an additional fee at checkout. All watches are shipped to fit the
								average size wrist (7 1/4&quot; - 7 1/2&quot; for men and 6 1/4&quot; - 6 1/2&quot;
								for women). Additional links can be purchased if needed. Note that &quot;B&P&quot;
								means &quot;box and papers&quot; where stated.
							</p>
						</div>
						<div className="section">
							<p className="section-title" onClick={handleProductGuaranteeClick}>
								Shipping
							</p>
							<p className="section-info" style={maxHeight}>
								Each order is ready for shipment within one (1) business day after the order is
								approved and processed. All watch orders are shipped FedEx overnight and are fully
								insured at no charge to the customer. Please be advised that for any deliveries from
								Time Crafted, a recipient aged 21 years or older must be present to provide a
								signature upon receipt of the package.
							</p>
						</div>
						<div className="section">
							<p className="section-title" onClick={handleProductGuaranteeClick}>
								Returns
							</p>
							<p className="section-info" style={maxHeight}>
								If, for any reason, your acquired piece doesn&apos;t quite resonate with your
								expectations, our 30-day return policy has you covered. Your watch should remain in
								pristine, unworn condition, and it should be accompanied by the original packaging
								and purchase receipt.
							</p>
						</div>
					</div>

					<div className="product-details-info">
						<h2>Product Details</h2>
						<div className="details-container">
							<div className="detail">
								<p className="detail-title">Manufacturer:</p>
								<p>{product.manufacturer}</p>
							</div>

							<div className="detail">
								<p className="detail-title">Regular Price:</p>
								<p>{'$' + product.regularPrice}</p>
							</div>

							<div className="detail">
								<p className="detail-title">Item Number:</p>
								<p>{product.itemNumber}</p>
							</div>

							{product.condition ? (
								<div className="detail">
									<p className="detail-title">Condition:</p>
									<p>{product.condition}</p>
								</div>
							) : null}

							<div className="detail">
								<p className="detail-title">Model Name/Number:</p>
								<p>{product.modelNameNumber}</p>
							</div>

							{product.serial ? (
								product.year ? (
									<div className="detail">
										<p className="detail-title">Year:</p>
										<p>{product.year}</p>
									</div>
								) : (
									<div className="detail">
										<p className="detail-title">Serial/Year:</p>
										<p>{product.year}</p>
									</div>
								)
							) : null}

							<div className="detail">
								<p className="detail-title">Gender:</p>
								<p>{product.gender}</p>
							</div>

							<div className="detail">
								<p className="detail-title">Movement:</p>
								<p>{product.movement}</p>
							</div>

							<div className="detail">
								<p className="detail-title">Case:</p>
								<p>{product.case}</p>
							</div>

							<div className="detail">
								<p className="detail-title">Dial:</p>
								<p>{product.dial}</p>
							</div>

							<div className="detail">
								<p className="detail-title">Bracelet:</p>
								<p>{product.bracelet}</p>
							</div>

							<div className="detail">
								<p className="detail-title">Box And Papers:</p>
								<p>Time Crafted&apos;s Box</p>
							</div>

							<div className="detail">
								<p className="detail-title">Warranty:</p>
								<p>Comes with 3 year Time Crafted international warranty</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductPage;