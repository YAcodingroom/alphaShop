import React, { useState } from 'react'
import { useCart } from '../../Contexts/CartContext'

function Product({ price, imgURL, productName }) {
	const [amount, setAmount] = useState(0)
	const { onCalcTotal } = useCart()

	function handClick(action) {
		if (action === 'minus' && amount !== 0) {
			setAmount((amount) => (amount -= 1))
			onCalcTotal(-price)
		} else if (action === 'plus') {
			setAmount((amount) => (amount += 1))
			onCalcTotal(price)
		}
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
							onClick={(e) => handClick(e.target.name)}
						/>
						<span className="product-count">{amount}</span>
						<img
							className="product-action"
							name="plus"
							src="./icons/plus.svg"
							alt=""
							role="button"
							onClick={(e) => handClick(e.target.name)}
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

export default function Cart() {
	const { productDatas, fee, total } = useCart()

	return (
		<section className="cart-container col col-lg-5 col-sm-12">
			<h3 className="cart-title">購物籃</h3>
			<section className="product-list col col-12" data-total-price="0">
				{productDatas.map((product) => (
					<Product
						key={product.id}
						price={Number(product.price)}
						imgURL={product.img}
						productName={product.name}
					/>
				))}
			</section>
			<CartInfo info="shipping" infoLabel="運費" price={`$${fee}`} />
			<CartInfo info="total" infoLabel="小計" price={`$${total}`} />
		</section>
	)
}
