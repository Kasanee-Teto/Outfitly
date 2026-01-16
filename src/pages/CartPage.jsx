import React, { Fragment } from 'react';
import { cartProducts } from '../data/cart-products.js';
import Button from '../components/Buttons/Button.jsx';
import CartItem from '../components/CartItems/CartItem.jsx';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
	const navigate = useNavigate();

	const removeItem = (e) => {
		e.target.closest('tr').remove()
	}

	const proceedToCheckout = () => {
		navigate('/checkout');
	}

	return (
		<Fragment>
			<div className="row" style={{
				padding: '18px',
			}}>
				<div className="col-12 col-lg-8">
					<div className="cart-card" style={{
						backgroundColor: '#fff',
						padding: '18px',
						borderRadius: '12px',
						boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
					}}>
						<h5>Shopping Cart</h5>
						<div style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
						}}>
						{cartProducts.map((product) => (
							CartItem({
								image: product.image,
								name: product.name,
								description: product.description,
								price: product.priceIdr,
								qty: product.qty,
							})
						))}
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-4" style={{
						backgroundColor: '#fff',
						padding: '18px',
						borderRadius: '12px',
						boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
					}}>
					<div className="card w-100">
						<div className="card-body">
							<div id="cart-summary" className="text-center">
								<h5>Cart Summary</h5>
								<small>Make your order now to get free shipping all across the globe</small>
							</div>
							<hr className="stripped" />
							<div className="d-flex justify-content-between">
								<span>Subtotal</span>
								<span>Rp. 375.000</span>
							</div>
							<div className="d-flex justify-content-between">
								<span>PPN 11%</span>
								<span>Rp. 41.25 0</span>
							</div>
							<div className="d-flex justify-content-between">
								<span>Discount</span>
								<span>- Rp. 15.000</span>
							</div>
							<div className="d-flex justify-content-between">
								<span>Shipping</span>
								<span>Rp. 0</span>
							</div>
							<hr className="stripped" />
							<div className="d-flex justify-content-between fw-bold fs-5">
								<span>Total</span>
								<span>Rp. 401.250</span>
							</div>
							<Button text='Proceed to checkout' onClick={proceedToCheckout} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}