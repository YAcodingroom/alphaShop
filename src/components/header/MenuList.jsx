import React from 'react'

function Menu({ categories }) {
	return (
		<li className="nav-item">
			<a className="nav-link" href="# " aria-hidden="true">
				{categories}
			</a>
		</li>
	)
}

export default function MenuList() {
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
