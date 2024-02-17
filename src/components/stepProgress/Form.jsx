import React from 'react'

const appellation = [
	{ value: 'mr', label: '先生' },
	{ value: 'ms', label: '女士' },
	{ value: 'mx', label: '不明' },
]
const cities = [
	{ value: 'KLU', label: '基隆市' },
	{ value: 'TPH', label: '新北市' },
	{ value: 'TPE', label: '臺北市' },
	{ value: 'TYC', label: '桃園市' },
	{ value: 'HSH', label: '新竹縣' },
	{ value: 'HSC', label: '新竹市' },
	{ value: 'MAC', label: '苗栗市' },
	{ value: 'MAL', label: '苗栗縣' },
	{ value: 'TXG', label: '臺中市' },
	{ value: 'CWH', label: '彰化縣' },
	{ value: 'CWS', label: '彰化市' },
	{ value: 'NTC', label: '南投市' },
	{ value: 'NTO', label: '南投縣' },
	{ value: 'YLH', label: '雲林縣' },
	{ value: 'CHY', label: '嘉義縣' },
	{ value: 'CYI', label: '嘉義市' },
	{ value: 'TNN', label: '臺南市' },
	{ value: 'KHH', label: '高雄市' },
	{ value: 'IUH', label: '屏東縣' },
	{ value: 'PTS', label: '屏東市' },
	{ value: 'ILN', label: '宜蘭縣' },
	{ value: 'ILC', label: '宜蘭市' },
	{ value: 'HWA', label: '花蓮縣' },
	{ value: 'HWC', label: '花蓮市' },
	{ value: 'TTC', label: '臺東市' },
	{ value: 'TTT', label: '臺東縣' },
	{ value: 'PEH', label: '澎湖縣' },
	{ value: 'KMN', label: '金門縣' },
	{ value: 'LNN', label: '連江縣' },
]

function Select({ largeWidth, smallWidth, label, datas }) {
	return (
		<div
			className={`input-group input-w-lg-${largeWidth} input-w-sm-${smallWidth}`}
		>
			<div className="input-label">{label}</div>
			<div className="select-container">
				<select required>
					<option value="" hidden>
						請選擇{label}
					</option>

					{datas.map((data) => (
						<option key={data.value} value={data.value}>
							{data.label}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

function Input({ largeWidth, smallWidth, label, placeholder, type }) {
	return (
		<>
			<div
				className={`input-group input-w-lg-${largeWidth} input-w-sm-${smallWidth}`}
			>
				<div className="input-label">{label}</div>
				<input type={type} placeholder={placeholder} />
			</div>
		</>
	)
}

// address phase
function AddressPhase() {
	return (
		<>
			<div className="col col-12">
				<Select
					largeWidth="2"
					smallWidth="s1"
					label="稱謂"
					datas={appellation}
				/>
				<Input
					largeWidth="4"
					smallWidth="s2"
					label="姓名"
					placeholder="請輸入姓名"
					type="text"
				/>
			</div>
			<div className="col col-12">
				<Input
					largeWidth="3"
					smallWidth="full"
					label="電話"
					placeholder="請輸入行動電話"
					type="tel"
				/>
				<Input
					largeWidth="3"
					smallWidth="full"
					label="Email"
					placeholder="請輸入電子郵件"
					type="email"
				/>
			</div>
			<div className="col col-12">
				<Select largeWidth="2" smallWidth="full" label="縣市" datas={cities} />
				<Input
					largeWidth="4"
					smallWidth="full"
					label="地址"
					placeholder="請輸入地址"
					type="text"
				/>
			</div>
		</>
	)
}

// shipping phase
function Shipping({
	price,
	shippingId,
	shippingName,
	period,
	checked,
	onCalcFee,
}) {
	return (
		<label className="radio-group col col-12" data-price={price}>
			<input
				id={shippingId}
				type="radio"
				name="shipping"
				onChange={() => onCalcFee(Number(price))}
			/>
			<div className="radio-info">
				<div className="col col-12">
					<div className="text">{shippingName}</div>
					<div className="price"></div>
				</div>
				<div className="period col col-12">{period}</div>
			</div>
			<div className="radio-box-border"></div>
		</label>
	)
}
function ShippingPhase({ onCalcFee }) {
	return (
		<>
			<Shipping
				price="0"
				shippingId="shipping-standard"
				shippingName="標準運送"
				period="約 3~7 個工作天"
				onCalcFee={onCalcFee}
			/>
			<Shipping
				price="500"
				shippingId="shipping-dhl"
				shippingName="DHL 貨運"
				period="48 小時內送達"
				onCalcFee={onCalcFee}
			/>
		</>
	)
}

// credit-card phase
function CreditCardPhase() {
	return (
		<>
			<div className="col col-12">
				<Input
					largeWidth="4"
					smallWidth="full"
					label="持卡人姓名"
					placeholder="John Doe"
					type="text"
				/>
			</div>
			<div className="col col-12">
				<Input
					largeWidth="4"
					smallWidth="full"
					label="卡號"
					placeholder="1111 2222 3333 4444"
					type="text"
				/>
			</div>
			<div className="col col-12">
				<Input
					largeWidth="3"
					smallWidth="s3"
					label="有效期限"
					placeholder="MM/YY"
					type="text"
				/>
				<Input
					largeWidth="3"
					smallWidth="s3"
					label="CVC / CCV"
					placeholder="123"
					type="text"
				/>
			</div>
		</>
	)
}

export default function Form({ phase, onCalcFee }) {
	return (
		<section className="form-container col col-12">
			<form className="col col-12" data-phase={phase}>
				<h3 className="form-title">
					{phase === 'address' && '寄送地址'}
					{phase === 'shipping' && '運送方式'}
					{phase === 'credit-card' && '付款資訊'}
				</h3>
				<section className="form-body col col-12">
					{phase === 'address' && <AddressPhase />}
					{phase === 'shipping' && <ShippingPhase onCalcFee={onCalcFee} />}
					{phase === 'credit-card' && <CreditCardPhase />}
				</section>
			</form>
		</section>
	)
}
