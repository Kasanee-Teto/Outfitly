import Counter from '../Counters/Counter.jsx';
import Button from '../Buttons/Button.jsx';
import { formatPrice } from '../utils/formatPrice.js';
import { FaRegTrashCan } from "react-icons/fa6";


export default function CartItem({
	image = "https://via.placeholder.com/90x90?text=Product",
	name = "Product Name",
	description = "Product description goes here",
	price = 45000,
	qty = 1,
	onClick = () => console.log("Cart item clicked"),
}) {
	const removeItem = (e) => {
		e.target.closest('.cart-item').remove()
	}

	return (
		<div
			onClick={onClick}
			className='cart-item'
			style={{
				display: "flex",
				alignItems: "center",
				gap: "12px",
				border: "1px solid #e0e0e0",
				borderRadius: "12px",
				background: "#fff",
				width: '100%',
				padding: '12px'
			}}
		>
			<img
				src={image}
				alt={name}
				style={{
					width: "90px",
					height: "90px",
					objectFit: "cover",
					borderRadius: "10px",
				}}
			/>

			<div style={{ flex: 1 }}>
				<h5 style={{ margin: "0 0 4px 0" }}>{name}</h5>
				<p style={{ margin: 0, color: "#777", fontSize: "0.9rem" }}>
					{description}
				</p>
			</div>

			<div style={{ fontWeight: "600", whiteSpace: "nowrap", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
				{ formatPrice(price, 'IDR') }
				<Counter value={qty}></Counter>
				<button className='btn' type="button" onClick={removeItem} style={{
					padding: '2px 12px',
					backgroundColor: '#FF3B3B',
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '2px',
				}}>
					<FaRegTrashCan/>
					<span>remove</span>
				</button>
			</div>
		</div>
	);
}
