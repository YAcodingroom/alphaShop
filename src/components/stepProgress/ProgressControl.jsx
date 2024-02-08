import React from 'react'

function Button({ className, label, imgURL }) {
	return (
		<button className={className}>
			{label}
			<img className="cursor-point" src={imgURL} alt="" />
		</button>
	)
}

function Section({ phase }) {
	return (
		<section className="button-group col col-12" data-phase={phase}>
			{phase !== 'address' && (
				<Button
					className="prev"
					label="上一步"
					imgURL="./icons/left-arrow.svg"
				/>
			)}
			{phase !== 'credit-card' ? (
				<Button
					className="next"
					label="下一步"
					imgURL="./icons/right-arrow.svg"
				/>
			) : (
				<button className="next">確認下單</button>
			)}
		</section>
	)
}

export default function ProgressControl() {
	return (
		<section className="progress-control-container col col-lg-6 col-sm-12">
			<Section phase="address" />
		</section>
	)
}
