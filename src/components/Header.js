import React from 'react';
import logoimg from '../images/logo-white.png';
import bibahlogo from '../images/a123.png';
const Header = () => {
		return (
			<header>

				<div className="container">

					<a className="logo" href="#"><img src={bibahlogo} alt="Logo" /></a>

					<div className="menu-nav-icon" data-nav-menu="#main-menu"><i className="icon icon-bars"></i></div>

					<ul className="main-menu visible-on-click" id="main-menu">
						<li><a href="#">HOME</a></li>

						<li><a href="#">WEDDING DETAILS</a></li>
						<li><a href="#">OUR STORIES</a></li>
						<li><a href="#">CONTACT</a></li>
					</ul>

				</div>
			</header>
		);
}

export default Header;