import React, { useState } from 'react'
const productDatas = [
	{
		id: '1',
		name: '貓咪罐罐',
		img: 'https://picsum.photos/300/300?text=1',
		price: 100,
		quantity: 2,
	},
	{
		id: '2',
		name: '貓咪干干',
		img: 'https://picsum.photos/300/300?text=2',
		price: 200,
		quantity: 1,
	},
]

function Product({ price, imgURL, productName, onCalcTotal }) {
	const [amount, setAmount] = useState(0)
	function handleClick(action) {
		let productAmount = amount
		if (action === 'minus' && amount !== 0) {
			productAmount -= 1
			onCalcTotal(-price)
		} else if (action === 'plus') {
			productAmount += 1
			onCalcTotal(price)
		}
		setAmount(productAmount)
	}

	return (
		<div
			className="product-container col col-12"
			data-count={amount}
			data-price={price}
		>
			<img className="img-container" src={imgURL} alt="" />
			<div className="product-info">
				<div className="product-name">{productName}</div>
				<div className="product-control-container">
					<div className="product-control">
						<img
							className="product-action"
							name="minus"
							src="./icons/minus.svg"
							alt=""
							role="button"
							onClick={(e) => handleClick(e.target.name)}
						/>
						<span className="product-count">{amount}</span>
						<img
							className="product-action"
							name="plus"
							src="./icons/plus.svg"
							alt=""
							role="button"
							onClick={(e) => handleClick(e.target.name)}
						/>
					</div>
				</div>
				<div className="price">${price}</div>
			</div>
		</div>
	)
}

function CartInfo({ info, infoLabel, price }) {
	return (
		<section className={`cart-info ${info} col col-12`}>
			<div className="text">{infoLabel}</div>
			<div className="price">{price}</div>
		</section>
	)
}

export default function Cart({ deliveryFee, onCalcTotal, total }) {
	return (
		<section className="cart-container col col-lg-5 col-sm-12">
			<h3 className="cart-title">購物籃</h3>
			<section className="product-list col col-12" data-total-price="0">
				{productDatas.map((product) => (
					<Product
						key={product.id}
						price={product.price}
						imgURL={product.img}
						productName={product.name}
						onCalcTotal={onCalcTotal}
					/>
				))}
			</section>
			<CartInfo info="shipping" infoLabel="運費" price={`$${deliveryFee}`} />
			<CartInfo info="total" infoLabel="小計" price={`$${total}`} />
		</section>
	)
}
