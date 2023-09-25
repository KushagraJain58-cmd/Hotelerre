import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slideshow from '../../components/Slideshow/Slideshow';
import './Home.css';
import Slider from '../../components/Slider/Slider';
import Slider2 from '../../components/Slider2/Slider2';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import { client_data, why_data } from '../../components/data';

// import about_back from '../../assets/images/Home/about_back.png';

// const images = [
// 	{
// 		source:
// 			'https://images.pexels.com/photos/6447203/pexels-photo-6447203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		title: 'Little Venice in Colmar'
// 	},
// 	{
// 		source:
// 			'https://images.pexels.com/photos/3283186/pexels-photo-3283186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		title: 'Back View of a Man Standing on a Rock near the Waterfalls'
// 	},
// 	{
// 		source:
// 			'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		title: 'Machu Pichu, Peru'
// 	},
// 	{
// 		source:
// 			'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		title: 'Train With Smoke'
// 	},
// 	{
// 		source:
// 			'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		title: 'Hot air ballons in the sky'
// 	},
// 	{
// 		source:
// 			'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		title: 'Canal Beside Houses'
// 	},
// 	{
// 		source:
// 			'https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		title: 'Brown Wooden House on Green Grass Field Near Green Trees and Mountains'
// 	}
// ];

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<Slideshow />
			<section className="about">
				<div class="about-content">
					<div class="about-tagline">
						<h1>One Stop solution to all your Hotel needs</h1>
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
			<section className="product-section">
				<h1 class="section-head">Products</h1>
				<ProductSlider />
			</section>
			<section className="section-container">
				<h1 class="section-head">Why Hotelerre</h1>
				<Slider2 data={why_data} />
			</section>
			<section className="section-container client-section">
				<h1 class="section-head">Our Prestigious Clients</h1>
				<Slider data={client_data} />
			</section>
		</Fragment>
	);
};

export default Home;
