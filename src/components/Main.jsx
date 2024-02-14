import React from 'react'
import Cart from './stepProgress/Cart'
import ProgressControl from './stepProgress/ProgressControl'
import StepProgressBar from './stepProgress/StepProgressBar'
import Form from './stepProgress/StepProgressBar'

function Register({ children }) {
	return (
		<section
			className="register-container col col-lg-6 col-sm-12"
			data-phase="1"
			data-total-price="0"
		>
			<h2 className="register-title col col-12">結帳</h2>
			{children}
		</section>
	)
}

export default function Main() {
	return (
		<main className="site-main">
			<div className="main-container">
				<Register>
					<StepProgressBar />
					<Form />
				</Register>
				<Cart />
				<ProgressControl />
			</div>
		</main>
	)
}
