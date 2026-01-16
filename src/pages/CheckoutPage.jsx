import React, { Fragment, useState } from 'react';
import Button from '../components/Buttons/Button.jsx';
import PaymentMethod from '../components/PaymentMethods/PaymentMethod.jsx';
import { useNavigate } from 'react-router-dom';

const paymentMethods = [
	{ id: "credit-card", label: "Credit Card", img: "/assets/images/master-card-logo.png" },
	{ id: "paypal", label: "Paypal", img: "/assets/images/paypal-logo.png" },
	{ id: "bank-transfer", label: "Bank Transfer", img: "/assets/images/bank-transfer-logo.png" },
]

export default function CheckoutPage() {
	const navigate = useNavigate();
	const [paymentMethod, setPaymentMethod] = useState("gopay");

	const submitForm = (e) => {
		e.preventDefault();

		navigate('/payment-confirmation');
	}

	return (
		<Fragment>
			<main className="container py-5">
				<form>
					<div className="row g-3">
						<div className="col-12">
							<label className="form-label">Full Name</label>
							<input type="text" className="form-control" placeholder="John Doe" />
						</div>
						<div className="col-md-6">
							<label className="form-label">Phone Number</label>
							<input type="text" className="form-control" placeholder="+6281234567890" />
						</div>
						<div className="col-md-6">
							<label className="form-label">Email</label>
							<input type="email" className="form-control" placeholder="john@example.com" />
						</div>
						<div className="col-12">
							<label className="form-label">Shipping Address</label>
							<textarea className="form-control" placeholder="123 Main St, City, Country"></textarea>
						</div>
						<div className="col-md-6">
							<label className="form-label">Shipping Method</label>
							<select className="form-select">
								<option>Standard (3 - 5 days)</option>
								<option>Express (1 - 2 days)</option>
							</select>
						</div>
						<div className="col-12">
							<label className="form-label">Payment Method</label>
							<div className="d-flex" style={{
								gap: '1rem'
							}}>
								{paymentMethods.map((m) => (
									<PaymentMethod
									key={m.id}
									image={m.img}
									label={m.label}
									selected={paymentMethod === m.id}
									onClick={() => setPaymentMethod(m.id)}
									/>
								))}
							</div>
						</div>
						<div className="col-12 text-end mt-4">
							<Button text='Place Order' onClick={submitForm}></Button>
						</div>
					</div>
				</form>
			</main>
		</Fragment>
	);
}