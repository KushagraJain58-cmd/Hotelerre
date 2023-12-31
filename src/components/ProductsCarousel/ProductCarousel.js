// import { useState, useRef, useEffect } from 'React';

import { useEffect, useRef, useState } from 'react';
import './ProductCarousel.css';

const useInterval = (callback, delay) => {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(
		() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		},
		[ delay ]
	);
};

const ProductCarousel = (props) => {
	const { images } = props;
	const len = images.length;
	const [ activeIndex, setActive ] = useState(0);

	//Autoplay;
	useInterval(() => {
		setActive((activeIndex + 1) % len);
	}, 3000);

	//Return style according to index
	const getStyle = (idx) => {
		//Counting from the left, the distance between idx and currentKey
		const distance_left = idx - activeIndex;
		//Counting from the right, the distance between idx and currentKey
		const distance_right = distance_left > 0 ? distance_left - len : distance_left + len;
		//Select the distance with the smallest absolute value
		const distance = Math.abs(distance_left) > Math.abs(distance_right) ? distance_right : distance_left;

		const styleObj = {};

		if (distance === 0) {
			//activeIndex
			styleObj.left = '33.3%';
			styleObj.zIndex = 999;
			styleObj.opacity = 1;
			styleObj.transform = 'scale(1)';
		} else {
			styleObj.left = distance > 0 ? `${16.7 + distance * 40}%` : `${50 + distance * 40}%`;
		}

		//The distance is not less than 2, hide
		if (Math.abs(distance) >= 2) {
			styleObj.opacity = 0;
			styleObj.transform = 'scale(0)';
		}

		return styleObj;
	};

	return (
		<div className="carousel">
			<div className="card-container">
				{images.map((slide, index) => (
					<div className="card" key={index} onClick={() => setActive(index)} style={getStyle(index)}>
						<img src={slide.image} alt="" />
					</div>
				))}
			</div>
			<div className="rects">
				{images.map((value, index) => (
					<div
						key={index}
						className={activeIndex === index ? 'rect active' : 'rect'}
						onClick={() => setActive(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductCarousel;
