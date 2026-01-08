import React, { Fragment } from 'react';
import style from './Card.module.css';

export default function Card({ title, description }) {
	return (
		<Fragment>
			<div className={`card ${style.card}`}>
				<h3>{title}</h3>
				<p>
					{description}
				</p>
			</div>
		</Fragment>
	);
}



