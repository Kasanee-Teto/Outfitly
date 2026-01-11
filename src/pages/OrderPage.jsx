import React, { Fragment } from 'react';
import { cartProducts } from '../data/cart-products.js';
import Button from '../components/Buttons/Button.jsx';
import { formatPrice } from '../utils/formatPrice.js';

export default function OrderPage() {
	const showModal = (e) => {
		let rows = cartProducts.map(item => `
			<tr>
				<td>
					<div class="d-flex align-items-center">
					<img src="${item.image}" class="rounded me-3" width="50" height="50">
					<span>${item.name}</span>
					</div>
				</td>
				<td>${formatPrice(item.priceIdr, 'IDR')}</td>
				<td>${item.qty}</td>
				<td>${formatPrice(item.priceIdr * item.qty, 'IDR')}</td>
			</tr>
		`).join('');

		const total = cartProducts.reduce((sum, item) => sum + item.priceIdr * item.qty, 0);
		const tax = total * 0.11;
		const discount = 15000;

		const summary = `
			<div class="mt-4">
			<h6>Order Summary</h6>
			<div class="d-flex justify-content-between"><span>Subtotal</span><span>Rp ${total.toLocaleString()}</span></div>
			<div class="d-flex justify-content-between"><span>PPN 11%</span><span>Rp ${tax.toLocaleString()}</span></div>
			<div class="d-flex justify-content-between"><span>Discount</span><span>- Rp ${discount.toLocaleString()}</span></div>
			<hr>
			<div class="d-flex justify-content-between fw-bold fs-5">
				<span>Total</span>
				<span>Rp ${(total + tax - discount).toLocaleString()}</span>
			</div>
			</div>
		`;

		document.getElementById('orderDetailBody').innerHTML = `
			<div class="table-responsive">
				<table class="table align-middle">
					<thead>
					<tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th></tr>
					</thead>
					<tbody>${rows}</tbody>
				</table>
			</div>
			${summary}
		`;

		new window.bootstrap.Modal(document.getElementById('orderDetailModal')).show();
	}

	return (
		<Fragment>
			<main className="container py-5">
				<div className="table-responsive">
					<table className="table align-middle">
						<thead className="table-light">
							<tr>
								<th>Order ID</th>
								<th>Date</th>
								<th>Status</th>
								<th>Total</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>#SH12345</td>
								<td>2025-10-22</td>
								<td><span className="badge bg-warning text-dark">Processing</span></td>
								<td>Rp 401.250</td>
								<td><Button text='View Detail' onClick={showModal}></Button></td>
							</tr>
							<tr>
								<td>#SH12346</td>
								<td>2025-10-20</td>
								<td><span className="badge bg-success">Delivered</span></td>
								<td>Rp 245.500</td>
								<td><Button text='View Detail' onClick={showModal}></Button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</main>

			<div className="modal fade" id="orderDetailModal" tabIndex="-1" aria-labelledby="orderDetailModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg modal-dialog-centered">
					<div className="modal-content border-0 shadow-lg">
						<div className="modal-header">
							<h5 className="modal-title fw-bold text-primary" id="orderDetailModalLabel">Order Details</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body bg-light">
							<div id="orderDetailBody">
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}