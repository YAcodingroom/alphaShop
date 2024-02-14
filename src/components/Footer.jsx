import React from 'react'

function Logo({ imgURL }) {
	return (
		<div className="footer-logo-container">
			<img src={imgURL} className="cursor-point" alt="" />
		</div>
	)
}

function Section({ children }) {
	return <section className="footer-section">{children}</section>
}

function Content({ children, title }) {
	return (
		<>
			<h2 className="section-title">{title}</h2>
			<div className="section-content">{children}</div>
		</>
	)
}

function PageLink({ label }) {
	return (
		<a className="page-link" href="# ">
			{label}
		</a>
	)
}

function SocialIcon({ iconURL }) {
	return <img className="social-icon cursor-point" src={iconURL} alt="" />
}

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-container">
				<Section>
					<Logo imgURL="./icons/logo.svg" />
				</Section>
				<Section>
					<Content title="客戶服務">
						<PageLink label="運送說明" />
						<PageLink label="退換貨相關" />
						<PageLink label="付款資訊" />
						<PageLink label="FAQ" />
					</Content>
				</Section>
				<Section>
					<Content title="關於我們">
						<PageLink label="品牌故事" />
						<PageLink label="媒體聯繫" />
						<PageLink label="Press kit" />
					</Content>
				</Section>
				<Section>
					<Content title="資訊">
						<PageLink label="隱私權政策" />
						<PageLink label="Cookie" />
						<PageLink label="GDPR" />
					</Content>
				</Section>
				<Section>
					<Content title="追蹤 ALPHA Shop">
						<div className="tel-info">+886 02123-45678</div>
						<div className="social-icon-group">
							<SocialIcon iconURL="./icons/facebook.svg" />
							<SocialIcon iconURL="./icons/instagram.svg" />
							<SocialIcon iconURL="./icons/whatsapp.svg" />
						</div>
					</Content>
				</Section>
			</div>
		</footer>
	)
}
