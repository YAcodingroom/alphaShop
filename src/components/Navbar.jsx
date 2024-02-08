import React from 'react'

// ActionList
const icons = [
	{
		name: 'search',
		imgSrc: './icons/search.svg',
	},
	{
		name: 'cart',
		imgSrc: './icons/cart.svg',
	},
	{
		name: 'moon theme',
		imgSrc: './icons/moon.svg',
	},
	// {
	// 	name: 'sun theme',
	// 	imgSrc: './icons/sun.svg',
	// },
]

function Icon({ imgSrc, name }) {
	return (
		<li className="nav-item">
			<img className="nav-icon cursor-point" src={imgSrc} alt={name} />
		</li>
	)
}

function ActionList() {
	return (
		<ul className="nav-list site-action-list">
			{icons.map((icon) => (
				<Icon key={icon.name} imgSrc={icon.imgSrc} name={icon.name} />
			))}
		</ul>
	)
}

// MenuList
function Menu({ categories }) {
	return (
		<li className="nav-item">
			<a className="nav-link" href="# " aria-hidden="true">
				{categories}
			</a>
		</li>
	)
}

function MenuList() {
	return (
		<ul className="nav-list site-menu-list mr-auto">
			<Menu categories="男款" />
			<Menu categories="女款" />
			<Menu categories="最新消息" />
			<Menu categories="客製商品" />
			<Menu categories="聯絡我們" />
		</ul>
	)
}

export default function Navbar() {
	return (
		<nav className="navbar-menu">
			<MenuList />
			<ActionList />
		</nav>
	)
}
