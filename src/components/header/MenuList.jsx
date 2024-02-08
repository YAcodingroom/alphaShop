import React from 'react'
const lists = ['男款', '女款', '最新消息', '客製商品', '聯絡我們']

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
			{lists.map((list) => (
				<Menu key={list} categories={list} />
			))}
		</ul>
	)
}
