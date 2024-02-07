import React from 'react'
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

export default function ActionList() {
	return (
		<ul className="nav-list site-action-list">
			{icons.map((icon) => (
				<Icon key={icon.name} imgSrc={icon.imgSrc} name={icon.name} />
			))}
		</ul>
	)
}
