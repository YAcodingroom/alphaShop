import React, { useState } from 'react'
import Cart from './stepProgress/Cart'
import ProgressControl from './stepProgress/ProgressControl'
import StepProgressBar from './stepProgress/StepProgressBar'
import Form from './stepProgress/Form'
import { stepProgressData } from './stepProgress/StepProgressBar'

function Register({ children, phase }) {
	return (
		<section
			className="register-container col col-lg-6 col-sm-12"
			data-phase={phase}
			data-total-price="0"
		>
			<h2 className="register-title col col-12">結帳</h2>
			{children}
		</section>
	)
}

export default function Main() {
	const [step, setStep] = useState('address')
	const [fee, setFee] = useState(0)
	const [totalCash, setTotalCash] = useState(0)

	function handleChangeStep(phase, active) {
		let newPhaseObj
		// 確認目前步驟
		const currentPhaseObj = stepProgressData.filter(
			(stepData) => phase === stepData.dataPhase
		)
		// 依據動作 返回新步驟
		if (active === '上一步' && currentPhaseObj[0].step !== 1) {
			newPhaseObj = stepProgressData.filter(
				(stepData) => currentPhaseObj[0].step - 1 === stepData.step
			)
		} else if (active === '下一步' && currentPhaseObj[0].step !== 3) {
			newPhaseObj = stepProgressData.filter(
				(stepData) => currentPhaseObj[0].step + 1 === stepData.step
			)
		} else return

		setStep(newPhaseObj[0].dataPhase)
	}

	function handleCalcFee(price) {
		handleCalcTotal(price - fee)
		setFee(price)
	}

	function handleCalcTotal(price) {
		setTotalCash(totalCash + price)
	}

	return (
		<main className="site-main">
			<div className="main-container">
				<Register phase={step}>
					<StepProgressBar />
					<Form phase={step} onCalcFee={handleCalcFee} />
				</Register>
				<Cart
					deliveryFee={fee}
					onCalcTotal={handleCalcTotal}
					total={totalCash}
				/>
				<ProgressControl phase={step} onChangeStep={handleChangeStep} />
			</div>
		</main>
	)
}
