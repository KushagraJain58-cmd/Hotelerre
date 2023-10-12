import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Cover from '../../components/Cover/Cover';
import './About.css';
import about_cover from '../../assets/images/About/about_cover.jpg';
import img from '../../assets/images/About/about.jpg';
// import img2 from '../../assets/images/About/about2.jpeg';
import Footer from '../../components/Footer/Footer';

const About = () => {
	return (
		<Fragment>
			<Navbar />
			<Cover
				coverImageSrc={about_cover}
				title="Who we are?"
				subTitle="A dedicated team of professionals who have made it our mission to elevate the guest experience in the hospitality industry by providing top-quality hotel supplies."
			/>
			<section className="section-main section-top section-about">
				<div className="intro">
					<div class="intro-img">
						<img className="image-inside1" src={img} alt="" />
						{/* <img className="image-inside2" src={img2} alt="" /> */}
					</div>
					<div className="intro-content">
						<h1>Meet Tanvi Bhageria- Founder of Hotelerre</h1>
						<p className="f-intro-para">
							In the competitive and ever-evolving world of hotel supply, it takes a visionary leader to
							make a lasting impact. Our journey is led by Tanvi Bhageria, a seasoned professional with
							over 9 years of experience in the hotel supply business. Her career path has been marked by
							dedication and a deep understanding of the industry, which eventually led her to identify a
							critical gap in the services provided to purchase managers in the hotel sector. With a
							resolve to address these challenges, Tanvi took the bold step to establish her own business.
							Her unwavering dedication to excellence has inspired our team to provide an unmatched level
							of service that transcends traditional supplier-purchaser relationships.
							<br />
							<br />
							In conclusion, she is not just a founder but a visionary who has harnessed her extensive
							industry knowledge to redefine the standards of hotel supply.
						</p>
					</div>
				</div>
			</section>
			<section className="section-main section-top section-about what-we-do">
				<div className="intro">
					<div className="intro-content what-content-2">
						<h1>What we do</h1>
						<p className="f-intro-para">
							At Hotelerre, we take pride in offering a comprehensive range of high-quality hotel and
							restaurant supplies. Our commitment to excellence and our deep understanding of the
							hospitality industry enable us to provide you with the products and solutions you need to
							create memorable guest experiences. Partner with Hotelerre to enhance your hotel or
							restaurant's offerings, delight your guests, and achieve new levels of success in the
							hospitality industry. We are your trusted source for all things hospitality supply.
							<br />
							<br />
							Our commitment is to make your life easier, so you can focus on what you do best -
							delivering exceptional experiences to your guests. We understand the unique and demanding
							requirements of the hospitality industry. Whether you're managing a boutique hotel, a
							sprawling resort, or anything in between, we're here to simplify your procurement process
							and elevate your experience.
						</p>
					</div>
					{/* <div class="intro-img">
						<img className="image-inside1" src={img} alt="" />
						<img className="image-inside2" src={img} alt="" />
					</div> */}
				</div>
			</section>
			<section className="section-company mission-vision section-about">
				<div className="mv-card">
					{/* <img src={mission} alt="" /> */}

					<div class="mv-heading heading-mission">
						<h1>MISSION</h1>
					</div>
					<div className="mv-content">
						<p className="para">
							We understand the unique challenges and demands of this industry, and we are dedicated to
							offering the finest supplies that meet your exact needs.
						</p>
						<h2>Our Priorities</h2>
						<div className="priority">
							<p>Trust</p>
							<p>Transparency</p>
							<p>Communication</p>
						</div>
						<p>
							Our mission is simple but profound: to be the supplier of choice for businesses in the
							hospitality sector.
						</p>
					</div>
				</div>
				<div className="mv-card">
					{/* <img src={mission} alt="" /> */}
					<div class="mv-heading heading-vision">
						<h1>VISION</h1>
					</div>
					<div className="mv-content">
						<p className="para">
							We aspire to lead the industry into a future where quality, sustainability, and innovation
							converge to create unparalleled guest experiences.
						</p>
						<h2>Our Priorities</h2>
						<div className="priority">
							<p>Innovation</p>
							<p>Adaptation</p>
							<p>Values</p>
						</div>
						<p>
							Our vision is clear: to be a transformative force in the hotel and restaurant supplies
							industry, shaping the future of hospitality.
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	);
};

export default About;
