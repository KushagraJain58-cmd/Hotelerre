import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slideshow from '../../components/Slideshow/Slideshow';
import './Home.css';
// import about_back from '../../assets/images/Home/about_back.png';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<Slideshow />
			<section className="about">
				{/* <div class="about-img">
					<img src={about_back} alt="" />
				</div> */}
				<div class="about-content">
					<div class="about-tagline">
						<h1>One Stop solution to all your hotel needs</h1>
					</div>
					<div className="about-card-cont">
						<div className="about-card">
							<h1>WHO ARE WE?</h1>
							<p>
								Hotelerre Offers A Comprehensive Solution For Your Restaurant Needs, Eliminating The
								Need To Visit Multiple Vendors For Quotes And Materials. With Our Pan-India Presence And
								Competitive Pricing, You Can Find Everything You Require Under One Roof. Say Goodbye To
								The Hassle Of Running To Various Vendors And Let Us Simplify Your Restaurant Procurement
								Process.
							</p>
						</div>
					</div>
					<div className="about-card-cont left-cont">
						<div className="about-card">
							<h1>WHAT WE DO?</h1>
							<p>
								Hotelerre Offers A Comprehensive Solution For Your Restaurant Needs, Eliminating The
								Need To Visit Multiple Vendors For Quotes And Materials. With Our Pan-India Presence And
								Competitive Pricing, You Can Find Everything You Require Under One Roof. Say Goodbye To
								The Hassle Of Running To Various Vendors And Let Us Simplify Your Restaurant Procurement
								Process.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Home;
