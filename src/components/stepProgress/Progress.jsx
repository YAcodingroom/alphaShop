import React from 'react'
const stepProgress = [
	{
		label: '寄送地址',
		step: '1',
		dataPhase: 'address',
	},
	{
		label: '運送方式',
		step: '2',
		dataPhase: 'shipping',
	},
	{
		label: '付款資訊',
		step: '3',
		dataPhase: 'credit-card',
	},
]

function Step({ dataPhase, step, label }) {
	return (
		<>
			<span className="progress-group" data-phase={dataPhase}>
				<span className="progress-icon">
					<span className="text">{step}</span>
				</span>
				<span className="progress-label">{label}</span>
			</span>
			{step !== '3' ? (
				<span className="progress-bar" data-order={step}></span>
			) : (
				''
			)}
		</>
	)
}

export default function Progress() {
	return (
		<section className="progress-container col col-12">
			{stepProgress.map((step) => (
				<Step
					key={step.step}
					dataPhase={step.dataPhase}
					step={step.step}
					label={step.label}
				/>
			))}
		</section>
	)
}
