import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Slider.css';
// import './Slider2.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider3 = (props) => {
	const { data } = props;
	const [ areImagesLoaded, setAreImagesLoaded ] = useState(true);
	console.log(data);
	useEffect(
		() => {
			const imagePromises = data.map((src) => {
				return new Promise((resolve) => {
					const img = new Image();
					img.src = src;
					img.onload = resolve;
				});
			});

			Promise.all(imagePromises).then(() => {
				setAreImagesLoaded(true);
			});
		},
		[ data ]
	);

	const CustomPrevArrow = (props) => {
		const { onClick } = props;
		return (
			<button className="carousel__btn carousel__btn--prev" onClick={onClick}>
				<i className="carousel__btn-arrow carousel__btn-arrow--left" />
			</button>
		);
	};

	const CustomNextArrow = (props) => {
		const { onClick } = props;
		return (
			<button className="carousel__btn carousel__btn--next" onClick={onClick}>
				<i className="carousel__btn-arrow carousel__btn-arrow--right" />
			</button>
		);
	};

	const renderSlides = () =>
		data.map((slide, index) => (
			<div className="slide-container" key={index}>
				<div class="second-cont">
					<div className="client-slide-img">
						<img src={slide.image} alt={`${index + 1}`} onLoad={() => setAreImagesLoaded(true)} />
					</div>
					<div className="client-content">
						{/* <h2>{slide.heading}</h2> */}
						<h2>{slide.heading}</h2>
					</div>
				</div>
			</div>
		));

	const settings = {
		dots: false,
		customPaging: (i) => <button className="custom-dot" />,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 570,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	};

	return (
		<div className="client-carousel-container">
			{!areImagesLoaded && <h1>Loading Images</h1>}
			{areImagesLoaded && <Slider {...settings}>{renderSlides()}</Slider>}
		</div>
	);
};

export default Slider3;
