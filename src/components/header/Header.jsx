import React from 'react'
import Navbar from './Navbar'

function Logo({ imgURL }) {
	return (
		<a className="header-logo-container" href="# " aria-label="Alpha shop">
			<img src={imgURL} className="cursor-point" alt="" />
		</a>
	)
}

function Toggle() {
	return (
		<>
			<input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
			<label for="navbar-toggle" class="burger-container">
				<img
					className="icon-toggle cursor-point"
					src="./icons/toggle.svg"
					alt=""
				/>
			</label>
		</>
	)
}

export default function Header() {
	return (
		<header className="site-header">
			<div className="header-container mx-auto">
				<Toggle />
				<Navbar />
				<Logo imgURL="./icons/logo.svg" />
			</div>
		</header>
	)
}
