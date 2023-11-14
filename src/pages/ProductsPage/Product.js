import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Cover from '../../components/Cover/Cover';
import './Product.css';
import Footer from '../../components/Footer/Footer';
import product_cover from '../../assets/images/products/products_cover.png';
import kitchen from '../../assets/images/products/kitchen.jpg';
import cooking from '../../assets/images/products/cooking.jpg';
import fnb from '../../assets/images/products/fnb.jpg';
import housekeeping from '../../assets/images/products/housekeeping.jpg';
import lineware from '../../assets/images/products/lineware.jpg';
import paper from '../../assets/images/products/paper.jpg';
import leaf from '../../assets/images/products/leaf.png';
import leaf2 from '../../assets/images/products/leaf2.png';
import leaf3 from '../../assets/images/products/leaf3.png';
import leaf4 from '../../assets/images/products/leaf4.png';
import kitchen_img from '../../assets/images/products/kitchen/kitchen_main.jpg';
import cooking_img from '../../assets/images/products/cooking/cooking_main.jpg';
import fnb_img from '../../assets/images/products/fnb/fnb_main.jpg';
import housekeeping_img from '../../assets/images/products/housekeeping/housekeeping_main.jpg';
import lineware_img from '../../assets/images/products/lineware/lineware_main.jpg';
import paper_img from '../../assets/images/products/paper/paper_main.jpg';
import ProductCarousel from '../../components/ProductsCarousel/ProductCarousel';
import {
	product_img,
	product_img2,
	product_img3,
	product_img4,
	product_img5,
	product_img6
} from '../../components/data';

const Products = () => {
	const scrollToKitchen = () => {
		const kitchenSection = document.getElementById('kitchen_sec');
		kitchenSection.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToCooking = () => {
		const kitchenSection = document.getElementById('cooking_sec');
		kitchenSection.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToFnb = () => {
		const kitchenSection = document.getElementById('fnb_sec');
		kitchenSection.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToHousekeeping = () => {
		const kitchenSection = document.getElementById('housekeeping_sec');
		kitchenSection.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToLineware = () => {
		const kitchenSection = document.getElementById('lineware_sec');
		kitchenSection.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToPaper = () => {
		const kitchenSection = document.getElementById('paper_sec');
		kitchenSection.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Fragment>
			<Navbar />
			<Cover coverImageSrc={product_cover} title="Products" subTitle="We want you to know all about us!" />
			<section className="product_sec">
				<div className="product_div">
					<div className="product_card card1" onClick={scrollToKitchen}>
						<img src={kitchen} alt="" />
						<div className="heading-cover heading1">
							<h1 className="textile_head">Kitchen Equipments</h1>
						</div>
					</div>
					<img className="leaf" src={leaf} alt="" />
					<div className="product_card card2" onClick={scrollToCooking}>
						<img src={cooking} alt="" />
						<div className="heading-cover heading2">
							<h1 className="furniture_head">Cooking Equipments</h1>
						</div>
					</div>
					<img className="leaf" src={leaf} alt="" />
					<div className="product_card card3" onClick={scrollToFnb}>
						<img src={fnb} alt="" />
						<div className="heading-cover heading3">
							<h1 className="furniture_head">F&B Products</h1>
						</div>
					</div>
				</div>
				<div className="product_tagline">
					<img className="leaf2" src={leaf2} alt="" />
					<h2>One Stop solution to all your hotel needs</h2>
					<img className="leaf2" src={leaf3} alt="" />
				</div>
				<div className="product_div">
					<div className="product_card card3" onClick={scrollToHousekeeping}>
						<img src={housekeeping} alt="" />
						<div className="heading-cover heading3">
							<h1 className="textile_head">Housekeeping</h1>
						</div>
					</div>
					<img className="leaf3" src={leaf4} alt="" />
					<div className="product_card card2" onClick={scrollToLineware}>
						<img src={lineware} alt="" />
						<div className="heading-cover heading2">
							<h1 className="furniture_head">Lineware</h1>
						</div>
					</div>
					<img className="leaf3" src={leaf4} alt="" />
					<div className="product_card card1" onClick={scrollToPaper}>
						<img src={paper} alt="" />
						<div className="heading-cover heading1">
							<h1 className="furniture_head">Paper Napkin</h1>
						</div>
					</div>
				</div>
			</section>
			<section className="product_sec sec_back" id="kitchen_sec">
				<div className="prod_container main-img-1">
					<img src={kitchen_img} alt="" />
					<div className="prod_content">
						<h1>Kitchen Equipments</h1>
						<p>
							Explore a <b>diverse range</b> of <b>fabrics</b> and <b>home textiles</b> sourced from top
							manufacturers in India<br />
							<br />
							From luxurious silks to durable cottons, we curate quality textiles to{' '}
							<b>meet your import needs</b>
							<br />
							<br />
							Discover an array of patterns, colours, and textures for your business success.
						</p>
					</div>
				</div>
				<ProductCarousel images={product_img} />
			</section>
			<section className="product_sec sec_back" id="cooking_sec">
				<div className="prod_container prod_reverse main-img-2">
					<img src={cooking_img} alt="" />
					<div className="prod_content content_reverse">
						<h1>Cooking Equipments</h1>
						<p className="p_furniture">
							Browse through a curated selection of exquisite furniture pieces, from{' '}
							<b>modern to classic designs</b>
							<br />
							<br />
							Our sourcing capabilities include <b>durable and stylish furniture</b> crafted with
							precision
							<br />
							<br />
							A blend of <b>aesthetic appeal and functionality</b>. Find the perfect pieces to elevate
							your market presence
						</p>
					</div>
				</div>
				<ProductCarousel images={product_img2} />
			</section>
			<section className="product_sec sec_back" id="fnb_sec">
				<div className="prod_container main-img-1">
					<img src={fnb_img} alt="" />
					<div className="prod_content">
						<h1>F&B Products</h1>
						<p>
							Discover an exclusive collection of{' '}
							<b>home decoration, accessories, kitchenware, tableware, cookware</b>, and <b>crockery</b>.
							<br />
							<br />
							<b>Functional</b> and <b>decorative products</b> to help your target customers elevate their
							living spaces and dining experiences - manufactured with care in India
							<br />
							<br />
							Tailored to meet your business’ functional, aesthetic and price-sensitive desires.
						</p>
					</div>
				</div>
				<ProductCarousel images={product_img3} />
			</section>
			<section className="product_sec sec_back" id="housekeeping_sec">
				<div className="prod_container prod_reverse main-img-2">
					<img src={housekeeping_img} alt="" />
					<div className="prod_content content_reverse">
						<h1>Housekeeping</h1>
						<p className="p_furniture">
							Discover a vast array of high-quality{' '}
							<b>floor tiles, durable hardware, sleek sanitary ware</b>, and <b>elegant bath fittings</b>
							<br />
							<br />
							Tailored to your business needs, succeed with products that seamlessly blend{' '}
							<b>functionality, style</b>, and <b>durability</b>
							<br />
							<br />
							Choose from a curated range of designs to suit your aesthetic preferences.
						</p>
					</div>
				</div>
				<ProductCarousel images={product_img4} />
			</section>
			<section className="product_sec sec_back" id="lineware_sec">
				<div className="prod_container main-img-1">
					<img src={lineware_img} alt="" />
					<div className="prod_content">
						<h1>Lineware</h1>
						<p>
							Discover an exclusive collection of{' '}
							<b>home decoration, accessories, kitchenware, tableware, cookware</b>, and <b>crockery</b>.
							<br />
							<br />
							<b>Functional</b> and <b>decorative products</b> to help your target customers elevate their
							living spaces and dining experiences - manufactured with care in India
							<br />
							<br />
							Tailored to meet your business’ functional, aesthetic and price-sensitive desires.
						</p>
					</div>
				</div>
				<ProductCarousel images={product_img5} />
			</section>
			<section className="product_sec sec_back" id="paper_sec">
				<div className="prod_container prod_reverse main-img-2">
					<img src={paper_img} alt="" />
					<div className="prod_content content_reverse">
						<h1>Paper Napkins and Disposables</h1>
						<p className="p_furniture">
							Discover a vast array of high-quality{' '}
							<b>floor tiles, durable hardware, sleek sanitary ware</b>, and <b>elegant bath fittings</b>
							<br />
							<br />
							Tailored to your business needs, succeed with products that seamlessly blend{' '}
							<b>functionality, style</b>, and <b>durability</b>
							<br />
							<br />
							Choose from a curated range of designs to suit your aesthetic preferences.
						</p>
					</div>
				</div>
				<ProductCarousel images={product_img6} />
			</section>
			<Footer />
		</Fragment>
	);
};

export default Products;
