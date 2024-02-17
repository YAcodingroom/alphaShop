import React from 'react'
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
				<div className="price">${price}</div>
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

export default function Cart({ deliveryFee }) {
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
					/>
				))}
			</section>
			<CartInfo info="shipping" infoLabel="運費" amount={deliveryFee} />
			<CartInfo info="total" infoLabel="小計" amount="$0" />
		</section>
	)
}
