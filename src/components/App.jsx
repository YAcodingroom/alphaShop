import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { CartProvider } from '../Contexts/CartContext'

export default function App() {
	return (
		<CartProvider>
			<Header />
			<Main />
			<Footer />
		</CartProvider>
	)
}
