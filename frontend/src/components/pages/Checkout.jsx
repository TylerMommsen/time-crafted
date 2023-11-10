const Checkout = () => {
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

						<div className="order-info">
							<h2>Order Information</h2>
							<input type="email" name="contactEmail" id="contactEmail" placeholder="Email" />
						</div>
					</form>
				</div>

				<div className="order-info">
					<div className="watch-info">
						<div className="watch-title"></div>
						<div className="watch-model"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
