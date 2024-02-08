import React from 'react'
import Progress from './Progress'
import Form from './Form'

export default function Register() {
	return (
		<section
			className="register-container col col-lg-6 col-sm-12"
			data-phase="1"
			data-total-price="0"
		>
			<h2 className="register-title col col-12">結帳</h2>

			<Progress />
			<Form />
		</section>
	)
}
