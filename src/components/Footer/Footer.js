import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/images/logo_header.png';

const Footer = () => {
	return (
		<footer className="foot-cont">
			<div className="whole-container">
				<div className="foot-logo">
					<img src={logo} alt="" />
				</div>
				<div className="foot-content">
					<div className="box foot-link">
						<ul>
							<li>
								<NavLink exact to="/" className="foot-nav-links">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/about" className="foot-nav-links">
									Who are we?
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/products" className="foot-nav-links">
									Products
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/contact" className="foot-nav-links">
									Let's Connect
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="box foot-head-office">
						<p>HEAD OFFICE - DELHI (INDIA)</p>

						<p>
							<b>Sapphire Sourcings</b>
							127, Arihant Nagar, Punjabi Bagh West New Delhi 110026
						</p>

						<p>+91 98 10 00 46 63 | ravi@sapphiresourcings.com</p>
					</div>
					<div className="copyright">
						<p>Copyright ©2022 All rights reserved | by Hotelerre</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
