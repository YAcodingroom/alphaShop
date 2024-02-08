import React from 'react'

function Product({ price, imgURL, productName }) {
	return (
		<div
			className="product-container col col-12"
			data-count="0"
			data-price={price}
		>
			<img className="img-container" src={imgURL} alt="" />
			<div className="product-info">
				<div className="product-name">{productName}</div>
				<div className="product-control-container">
					<div className="product-control">
						<img
							className="product-action minus"
							src="./icons/minus.svg"
							alt=""
						/>
						<span className="product-count">0</span>
						<img
							className="product-action minus"
							src="./icons/plus.svg"
							alt=""
						/>
					</div>
				</div>
				<div className="price">$0</div>
			</div>
		</div>
	)
}

function CartInfo({ info, infoLabel, amount }) {
	return (
		<section className={`cart-info ${info} col col-12`}>
			<div className="text">{infoLabel}</div>
			<div className="price">{amount}</div>
		</section>
	)
}

export default function Cart() {
	return (
		<section className="cart-container col col-lg-5 col-sm-12">
			<h3 className="cart-title">購物籃</h3>
			<section className="product-list col col-12" data-total-price="0">
				<Product
					price="3999"
					imgURL="./images/product-1.jpg"
					productName="破壞補丁修身牛仔褲"
				/>
				<Product
					price="1299"
					imgURL="./images/product-2.jpg"
					productName="刷色直筒牛仔褲"
				/>
			</section>
			<CartInfo info="shipping" infoLabel="運費" amount="免費" />
			<CartInfo info="total" infoLabel="小計" amount="$0" />
		</section>
	)
}
