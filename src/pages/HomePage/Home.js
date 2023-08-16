import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slideshow from '../../components/Slideshow/Slideshow';
import './Home.css';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<Slideshow />
			<section className="tagline">
				<h1>
					One Stop solution to all<br /> your hotel needs
				</h1>
			</section>
		</Fragment>
	);
};

export default Home;
