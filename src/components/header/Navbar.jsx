import React from 'react'
import ActionList from './ActionList'
import MenuList from './MenuList'

export default function Navbar() {
	return (
		<nav className="navbar-menu">
			<MenuList />
			<ActionList />
		</nav>
	)
}
