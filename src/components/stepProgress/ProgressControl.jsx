import React from 'react'
import { useCart } from '../../Contexts/CartContext'

function Button({ className, label, imgURL, onChangeStep, phase }) {
	const { showLog } = useCart()

	function handleClick(e) {
		if (label !== '確認下單') {
			onChangeStep(e.target.dataset.phase, label)
		} else {
			showLog()
		}
	}

	return (
		<button
			className={`cursor-point ${className}`}
			onClick={handleClick}
			data-phase={phase}
		>
			{label}
			{!imgURL || <img src={imgURL} alt={label} data-phase={phase} />}
		</button>
	)
}

function Section({ phase, onChangeStep }) {
	return (
		<section className="button-group col col-12" data-phase={phase}>
			{phase !== 'address' && (
				<Button
					className="prev"
					label="上一步"
					imgURL="./icons/left-arrow.svg"
					onChangeStep={onChangeStep}
					phase={phase}
				/>
			)}
			{phase !== 'credit-card' ? (
				<Button
					className="next"
					label="下一步"
					imgURL="./icons/right-arrow.svg"
					onChangeStep={onChangeStep}
					phase={phase}
				/>
			) : (
				<Button
					className="next"
					label="確認下單"
					onChangeStep={onChangeStep}
					phase={phase}
				/>
			)}
		</section>
	)
}

export default function ProgressControl({ onChangeStep, phase }) {
	return (
		<section className="progress-control-container col col-lg-6 col-sm-12">
			<Section phase={phase} onChangeStep={onChangeStep} />
		</section>
	)
}
