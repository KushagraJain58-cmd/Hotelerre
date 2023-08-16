import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/images/logo_header.png';

function Navbar() {
	const [ click, setClick ] = useState(false);
	const [ showNavbar, setShowNavbar ] = useState(false);
	const [ prevScrollPos, setPrevScrollPos ] = useState(0);
	const [ atTop, setAtTop ] = useState(true);

	const handleScroll = useCallback(
		() => {
			const currentScrollPos = window.pageYOffset;
			const isScrollingDown = currentScrollPos > prevScrollPos;
			setShowNavbar(!isScrollingDown || currentScrollPos < 10); // Show navbar if scrolling up or at the top
			setPrevScrollPos(currentScrollPos);
			if (currentScrollPos === 0) {
				setShowNavbar(false);
				setAtTop(true);
			} else {
				setAtTop(false);
			}
		},
		[ prevScrollPos ]
	);

	useEffect(
		() => {
			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		},
		[ prevScrollPos, handleScroll ]
	);

	const handleClick = () => setClick(!click);

	const handleLogoClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<Fragment>
			{/* <nav className={`navbar ${showNavbar ? 'active-scroll' : ''}`}> */}
			<nav className={`navbar ${showNavbar ? 'active-scroll' : ''} ${atTop ? 'atTop' : ''}`}>
				{/* <div className="nav-container"> */}
				<div className="nav-logo">
					<NavLink exact to="/" onClick={handleLogoClick}>
						<img src={logo} alt="Logo" />
					</NavLink>
				</div>
				{/* <NavLink exact to="/" className="nav-logo" onClick={handleLogoClick}>
					<img src={logo} alt="Logo" />
				</NavLink> */}

				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						<NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
							Who are we?
						</NavLink>
					</li>

					<li className="nav-item">
						<NavLink
							exact
							to="/products"
							activeClassName="active"
							className="nav-links"
							onClick={handleClick}
						>
							Products
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/contact"
							activeClassName="active"
							className="nav-links contact"
							onClick={handleClick}
						>
							Let's Connect
						</NavLink>
					</li>
				</ul>
				{/* <div className="nav-icon" onClick={handleClick}>
					{!click && <MenuIcon className="icon" />}
					{click && <CloseIcon className="icon" />}
				</div> */}
			</nav>
		</Fragment>
		// <nav
		// 	style={{
		// 		position: 'fixed',
		// 		top: 0,
		// 		left: 0,
		// 		width: '100%',
		// 		backgroundColor: '#f0f0f0',
		// 		padding: '10px',
		// 		zIndex: '200'
		// 	}}
		// >
		// 	{showNavbar && (
		// 		<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
		// 			<li style={{ display: 'inline-block', marginRight: '10px' }}>Home</li>
		// 			<li style={{ display: 'inline-block', marginRight: '10px' }}>About</li>
		// 			<li style={{ display: 'inline-block', marginRight: '10px' }}>Contact</li>
		// 		</ul>
		// 	)}
		// </nav>
	);
}

export default Navbar;
