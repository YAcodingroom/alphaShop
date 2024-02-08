import React from 'react'
import Register from './stepProgress/Register'
import Cart from './stepProgress/Cart'
import ProgressControl from './stepProgress/ProgressControl'

export default function Main() {
	return (
		<main className="site-main">
			<div className="main-container">
				<Register />
				<Cart />
				<ProgressControl />
			</div>
		</main>
	)
}
