import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slideshow from '../../components/Slideshow/Slideshow';
import './Home.css';
import Slider from '../../components/Slider/Slider';
import Slider2 from '../../components/Slider2/Slider2';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import { client_data, why_data } from '../../components/data';
import Footer from '../../components/Footer/Footer';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<Slideshow />
			<section className="section-main about">
				<div class="about-content">
					<div class="about-tagline">
						<h1>One Stop solution to all your Hotel needs</h1>
					</div>
					<div class="about-card-whole">
						<div className="about-card-cont">
							<div className="about-card">
								<h1>WHO ARE WE?</h1>
								<p>
									At Hotelerre, we are passionate about delivering top-notch hospitality solutions.
									Our journey in the industry spans over 9+ years, during which we have honed our
									expertise, built strong relationships, and perfected the art of providing
									high-quality products to hotels and restaurants.We are more than a supplier; we are
									your dedicated partner in hospitality success.
								</p>
							</div>
						</div>
						<div className="about-card-cont left-cont">
							<div className="about-card">
								<h1>WHAT WE DO?</h1>
								<p>
									Hotelerre Offers A Comprehensive Solution For Your Restaurant Needs, Eliminating The
									Need To Visit Multiple Vendors For Quotes And Materials. With Our Pan-India Presence
									And Competitive Pricing, You Can Find Everything You Require Under One Roof. Say
									Goodbye To The Hassle Of Running To Various Vendors And Let Us Simplify Your
									Restaurant Procurement Process.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-main product-section">
				<h1 class="section-head">Products</h1>
				<ProductSlider />
			</section>
			<section className="section-main section-container">
				<h1 class="section-head">Why Hotelerre</h1>
				<Slider2 data={why_data} />
			</section>
			<section className="section-main section-container client-section">
				<h1 class="section-head">Our Prestigious Clients</h1>
				<Slider data={client_data} />
			</section>
			<Footer />
		</Fragment>
	);
};

export default Home;
