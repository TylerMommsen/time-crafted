import { useState, useEffect } from 'react';

const Footer = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

	const sections = [
		{ title: 'Company', items: ['Our Company', 'Our Story', 'Philanthropy', 'Site Map', 'Career'] },
		{ title: 'Brand', items: ['Reviews', 'Blog', 'Press'] },
		{
			title: 'Support',
			items: ['FAQ', 'Warranty', 'Contact Us', 'Customer Care', 'Size Guide', 'Track Your Order'],
		},
		{
			title: 'Official Channels',
			items: ['Instagram', 'Facebook', 'Twitter', 'Pinterest', 'LinkedIn', 'YouTube'],
		},
		{
			title: 'Privacy And Terms',
			items: [
				'Return Policy',
				'Shopping',
				'Privacy',
				'Accessibility',
				'Terms Of Service',
				'Legal Notice',
			],
		},
	];

	const maxHeight = {
		maxHeight: '0',
	};

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// when a section title is clicked
	const handleSectionClick = (e, clickedElement) => {
		let element = e.target;
		if (clickedElement !== 'title') {
			element = element.parentElement.parentElement;
		} else {
			element = element.parentElement;
		}
		const sectionInfo = element.querySelector('ul');
		if (sectionInfo) {
			const contentHeight = sectionInfo.scrollHeight + 'px';
			sectionInfo.style.maxHeight = sectionInfo.style.maxHeight === '0px' ? contentHeight : '0px';
		}
	};

	// if the screen size is small, then render the footer sections to be collapsable
	const renderSections = (sections) => {
		return sections.map((section, index) => (
			<div className="footer-section" key={index}>
				<div className="title" onClick={(e) => handleSectionClick(e, 'title')}>
					<div className="footer-title" onClick={(e) => handleSectionClick(e, 'footer-title')}>
						{section.title}
					</div>
					<img
						src="/arrow-down.png"
						className="arrow"
						onClick={(e) => handleSectionClick(e, 'arrow')}
					></img>
				</div>

				<ul style={maxHeight}>
					{section.items.map((item, itemIndex) => (
						<li key={itemIndex}>
							<button>{item}</button>
						</li>
					))}
				</ul>
			</div>
		));
	};

	return (
		<>
			<footer>
				<div className="company-guarantees">
					<div className="guarantees-section">
						<img className="guarantee-img" src="/shipping-icon.png"></img>
						<h3>Free Shipping</h3>
						<p>Free shipping for all products</p>
					</div>
					<div className="guarantees-section">
						<img className="guarantee-img" src="/verified-icon.png"></img>
						<h3>Authentic</h3>
						<p>All watches are authenticated and certified</p>
					</div>
					<div className="guarantees-section">
						<img className="guarantee-img" src="/tracking-icon.png"></img>
						<h3>Tracking</h3>
						<p>Access to 24/7 tracking</p>
					</div>
				</div>

				<div className="footer-links">
					{isSmallScreen ? (
						renderSections(sections)
					) : (
						<>
							{sections.map((section, index) => (
								<div className="footer-section" key={index}>
									<div className="footer-title">{section.title}</div>
									<ul>
										{section.items.map((item, itemIndex) => (
											<li key={itemIndex}>
												<button>{item}</button>
											</li>
										))}
									</ul>
								</div>
							))}
						</>
					)}
				</div>
			</footer>
		</>
	);
};

export default Footer;
