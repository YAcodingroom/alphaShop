import React from 'react'
import Register from './stepProgress/Register'
import Cart from './stepProgress/Cart'

export default function Main() {
	return (
		<main className="site-main">
			<div className="main-container">
				<Register />
				<Cart />
			</div>
		</main>
	)
}
