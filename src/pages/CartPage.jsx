import React, { Fragment } from 'react';
import { cartProducts } from '../data/cart-products.js';
import Button from '../components/Buttons/Button.jsx';
import { formatPrice } from '../components/utils/formatPrice.js';
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
			<h2>Shopping Cart</h2>
			<div className="row">
				<div className="col-12 col-lg-8">
					<div className="table-responsive bootstrap-css">
						<table className="table align-middle">
							<thead className="table-light">
								<tr>
									<th>Product</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Subtotal</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{cartProducts.map((product) => (
									<tr>
										<td>
											<div className="d-flex align-items-center">
												<img src={product.image} className="rounded me-3" style={{ width: '50px', height: '50px' }} />
												<span>{product.name}</span>
											</div>
										</td>
										<td>{formatPrice(product.priceIdr, 'IDR')}</td>
										<td><input type="number" value={product.qty} className="form-control" style={{ width: '80px' }} /></td>
										<td>{formatPrice(product.priceIdr * product.qty, 'IDR')}</td>
										<td><Button text='Remove' onClick={removeItem}/></td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
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
							<Button text='Proceed to checkout' onClick={proceedToCheckout}/>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}