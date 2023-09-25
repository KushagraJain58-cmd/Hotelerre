import React, { useState, useEffect } from 'react';
import './ProductSlider.css';

const ProductSlider = () => {
	const slides = [
		{ title: 'Pink Cherrish', description: 'to evolve into care' },
		{ title: 'Yellow Luck', description: 'to evolve into care' },
		{ title: 'Redness Lust', description: 'to evolve into care' },
		{ title: 'Lavanda Love', description: 'to evolve into care' }
	];

	const [ activeSlideIndex, setActiveSlideIndex ] = useState(0);
	const slidesLength = slides.length; // The number of slides

	useEffect(
		() => {
			const sliderHeight = document.querySelector('.slider-container').clientHeight;
			const slideRight = document.querySelector('.right-slide');
			const slideLeft = document.querySelector('.left-slide');

			slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

			slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
			slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
			// const leftSlideTransform = activeSlideIndex === 0 ? '0' : `${(activeSlideIndex - 1) * sliderHeight}px`;
			// slideLeft.style.transform = `translateY(${leftSlideTransform})`;
		},
		[ activeSlideIndex ]
	);

	const changeSlide = (direction) => {
		if (direction === 'up') {
			setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesLength);
		} else if (direction === 'down') {
			setActiveSlideIndex((prevIndex) => (prevIndex === 0 ? slidesLength - 1 : prevIndex - 1));
		}
	};

	return (
		<div className="slider-container">
			{/* Left Slide */}
			<div className="left-slide">
				{slides.map((slide, index) => (
					<div key={index} className={index === activeSlideIndex ? 'active' : ''}>
						<h1>{slide.title}</h1>
						<p>{slide.description}</p>
					</div>
				))}
			</div>

			{/* Right Slide */}
			<div className="right-slide">
				<div className="back-img" />
				<div className="back-img2" />
				<div className="back-img3" />
				<div className="back-img4" />
				{/* Add background images or images from demo1, demo2, etc. */}
			</div>

			{/* Action Buttons */}
			<div className="action-buttons">
				<button className="down-button" onClick={() => changeSlide('down')}>
					<i className="fas fa-arrow-down" />
				</button>
				<button className="up-button" onClick={() => changeSlide('up')}>
					<i className="fas fa-arrow-up" />
				</button>
			</div>
		</div>
	);
};

export default ProductSlider;
