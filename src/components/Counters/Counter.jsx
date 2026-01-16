import { useState } from "react";
import style from './Counter.module.css'
import { FaMinus, FaPlus } from "react-icons/fa6";


export default function Counter({ value = 1 }) {
	const [count, setCount] = useState(value);

	const handleDecrement = () => {
		if (count <= 0) return

		setCount(count - 1);
	}

	const handleIncrement = () => {
		setCount(count + 1);
	}
	
	return (
		<div className={style.wrapper}>
			<button className={style.button} onClick={handleDecrement}><FaMinus /></button>
			<div className={style.value}>
				{count}
			</div>
			<button className={style.button} onClick={handleIncrement}><FaPlus /></button>
		</div>
	);
}
