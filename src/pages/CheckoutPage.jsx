import React, { Fragment } from 'react';
import Button from '../components/Buttons/Button.jsx';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
	const navigate = useNavigate();
	
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
						<div className="col-md-6">
							<label className="form-label">Payment Method</label>
							<select className="form-select">
								<option>Credit Card</option>
								<option>PayPal</option>
							</select>
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