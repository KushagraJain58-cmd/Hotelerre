import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Cover from '../../components/Cover/Cover';
import './About.css';
import about_cover from '../../assets/images/About/about_cover.png';
import img from '../../assets/images/Home/demo4.jpg';

const About = () => {
	return (
		<Fragment>
			<Navbar />
			<Cover
				coverImageSrc={about_cover}
				title="Who we are?"
				subTitle="About the Company About the Company About the Company"
			/>
			<section>
				<div className="intro">
					<div class="intro-img">
						<img className="image-inside1" src={img} alt="" />
						<img className="image-inside2" src={img} alt="" />
					</div>
					<div className="intro-content">
						<h1>About Us</h1>
						<p className="f-intro-para">
							A brand backed by a heritage of nearly half a century, FnS assures excellence and
							credibility in every aspect of our products and services. With the core competence of
							manufacturing a wide range of household and gastronomy goods with the finest stainless
							steel, FnS unveils the most distinctive products with superlative designs. Our strength lies
							in a highly dexterous and dedicated team endowed with the skills to forge steel to their
							will, including creating dazzling shapes and unique chemical compositions in steel, thus
							helping manifest products of great form, function and comfort.
							<br />
							<br />
							Riding on the overwhelming acceptance and success globally , FnS is today proud to be able
							to serve the needs and requirements of people, brands and businesses across continents. The
							extensive collections across categories with noteworthy advantages like the use of FDA
							standard stainless steel, 24k real gold plating, lifetime guarantees, matching servings and
							customizable designs are sure to meet the requisites of even the most discerning buyers.
						</p>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default About;
