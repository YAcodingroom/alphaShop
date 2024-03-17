import { createContext, useContext, useReducer, useState } from 'react'

const productDatas = [
	{
		id: '1',
		name: '貓咪罐罐',
		img: 'https://picsum.photos/300/300?text=1',
		price: 100,
		quantity: 2,
	},
	{
		id: '2',
		name: '貓咪干干',
		img: 'https://picsum.photos/300/300?text=2',
		price: 200,
		quantity: 1,
	},
]

const CartContext = createContext()

function CartProvider({ children }) {
	const [fee, setFee] = useState(0)
	const [total, setTotal] = useState(0)
	const [formData, setFormData] = useState({})

	function calcTotal(price) {
		setTotal(total + price)
	}

	function calcFee(price) {
		calcTotal(price - fee)
		setFee(price)
	}

	function showLog() {
		console.log(`購物車小計：${total}`)
		console.log(formData)
	}

	return (
		<CartContext.Provider
			value={{
				productDatas,
				fee,
				total,
				onCalcTotal: calcTotal,
				onCalcFee: calcFee,
				formData,
				setFormData,
				showLog,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

// custom Hook
function useCart() {
	const context = useContext(CartContext)
	if (context === undefined)
		throw new Error('CartContext is used outside of CartProvider')
	return context
}

export { CartProvider, useCart }
