import React, { Fragment } from 'react';
import Button from '../components/Buttons/Button';
import { useNavigate } from 'react-router-dom';

export default function PaymentConfirmationPage() {
	const navigate = useNavigate();
	
	const viewOrders = () => {
		navigate('/order');
	}
	
	return (
		<Fragment>
			<main className="container py-5 text-center">
				<div className="card mx-auto p-5" style={{ maxWidth: '500px' }}>
					<div className="text-success mb-3">
						<i className="bi bi-check-circle-fill" style={{ fontSize: '4rem' }}></i>
					</div>
					<h3 className="mb-3">Order Placed Successfully!</h3>
					<p className="text-muted">Thank you for shopping with <b>Outfitly</b>. Your order #SH12345 will be delivered soon.</p>
					<Button text='View My Orders' onClick={viewOrders}></Button>
				</div>
			</main>
		</Fragment>
	);
}