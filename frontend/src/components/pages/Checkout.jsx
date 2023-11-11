import { useLocation } from 'react-router-dom';

const Checkout = () => {
	const location = useLocation();
	const product = location.state.product;

	const handleCheckoutSubmit = (e) => {
		e.preventDefault();
		// handle checkout
	};

	return (
		<>
			<div className="checkout">
				<div className="customer-info">
					<h1 className="title">Checkout</h1>

					<form onSubmit={handleCheckoutSubmit}>
						<div className="payment-info">
							<h2>Payment Information</h2>

							<input type="number" name="cardNumber" id="cardNumber" placeholder="Card Number" />
							<input type="string" name="nameOnCard" id="nameOnCard" placeholder="Name on Card" />
							<input type="number" name="expDate" id="expDate" placeholder="Exp. Date (MM / YY)" />
							<input
								type="number"
								name="securityCode"
								id="securityCode"
								placeholder="Security Code"
							/>
						</div>

						<div className="shipping-info">
							<h2>Shipping Information</h2>

							<input type="string" name="firstName" id="firstName" placeholder="First Name" />
							<input type="string" name="lastName" id="lastName" placeholder="Last Name" />
							<input
								type="string"
								name="streetAddress"
								id="streetAddress"
								placeholder="Street Address"
							/>
							<input type="string" name="city" id="city" placeholder="City" />
							<input type="string" name="country" id="country" placeholder="Country" />
							<input
								type="string"
								name="stateProvince"
								id="stateProvince"
								placeholder="State/Province"
							/>
							<input type="number" name="postalCode" id="postalCode" placeholder="Postal Code" />
							<input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
						</div>

						<div className="contact-info">
							<h2>Contact Information</h2>
							<input type="email" name="contactEmail" id="contactEmail" placeholder="Email" />
						</div>

						<div className="order-details">
							<h2>Order Details</h2>
							<div className="product-name">
								<p>{product.name}</p>
								<p>{'$' + product.price}</p>
							</div>
							<div className="shipping">
								<p>Shipping: </p>
								<p>$0.00</p>
							</div>
							<div className="total-price">
								<p>Total: </p>
								<p>{'$' + product.price}</p>
							</div>
						</div>

						<div className="checkout-btns">
							<button className="return-shopping">Return to Shopping</button>
							<button type="submit" className="confirm-purchase">
								Confirm Purchase
							</button>
						</div>
					</form>
				</div>

				<div className="order-summary">
					<h2>Order Summary</h2>
					<div className="watch-info">
						<img src={product.frontImage} className="watch-img"></img>
						<div className="watch-title">{product.name}</div>
					</div>
					<div className="order-summary-details">
						<div className="product-name">
							<p>{product.name}</p>
							<p>{'$' + product.price}</p>
						</div>
						<div className="shipping">
							<p>Shipping: </p>
							<p>$0.00</p>
						</div>
						<div className="total-price">
							<p>Total: </p>
							<p>{'$' + product.price}</p>
						</div>
					</div>
					<button type="submit" className="confirm-purchase">
						Confirm Purchase
					</button>
				</div>
			</div>
		</>
	);
};

export default Checkout;
