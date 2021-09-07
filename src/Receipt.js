import React from 'react';
import './Receipt.css';

function Receipt({ receipt }) {
	return (
		<div className='receipt'>
			<h2>{receipt.person}</h2>
			<ul>
				<li>
					<span>Main: </span>
					{receipt.order.main}
				</li>
				<li>
					<span>Protein: </span>
					{receipt.order.protein}
				</li>
				<li>
					<span>Toppings:</span>
					<ul>
						{receipt.order.toppings.map((topping, index) => (
							<li key={index}>{topping}</li>
						))}
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default Receipt;
