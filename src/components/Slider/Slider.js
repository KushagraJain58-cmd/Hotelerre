import { useEffect, useRef, useState } from 'react';
import './Slider.css';

const Slider = ({ title, slides }) => {
	const [ slideNumber, setSlideNumber ] = useState(0);
	const sliderRef = useRef(null);
	const nextArrow = useRef(null);

	const navigationHandle = (direction) => {
		let newSlideNumber;
		const totalNoofSlides = sliderRef.current.children.length - 1;
		direction === 'left'
			? (newSlideNumber = slideNumber === 0 ? totalNoofSlides : slideNumber - 1)
			: (newSlideNumber = slideNumber === totalNoofSlides ? 0 : slideNumber + 1);
		setSlideNumber(newSlideNumber);

		// adding/removing active class from slides
		Array.from(sliderRef.current.children).forEach((slide) => slide.classList.remove('active'));
		sliderRef.current.children[newSlideNumber].classList.add('active');

		// setting current slide's bg image as body background image
		document.body.style.backgroundImage = `url(${slides[newSlideNumber].source})`;
		if (direction === 'left') {
			sliderRef.current.children[newSlideNumber].classList.add('left-slide');
			console.log('left slide');
		}
	};

	// autoplay
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		nextArrow.current.click();
	// 	}, 10000);
	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, []);

	// checking if no slides available
	if (slides.length <= 0) {
		return 'No slides available..';
	}

	return (
		<div className="sliderWrapper">
			{title && <h3 className="sliderTitle">{title}</h3>}
			<button className="prevArrow" onClick={() => navigationHandle('left')}>
				«
			</button>
			<div className="slider" ref={sliderRef}>
				{slides.map((slide, index) => (
					<div className={`slide${index === 0 ? ' active' : ''}`}>
						{slide.source && <img src={slide.source} alt={slide.title} loading="lazy" draggable={false} />}
						{slide.title && <h3>{slide.title}</h3>}
					</div>
				))}
			</div>
			<button className="nextArrow" onClick={() => navigationHandle('right')} ref={nextArrow}>
				»
			</button>
			<div className="sliderPagination">
				{slideNumber + 1} / {slides.length}
			</div>
		</div>
	);
};

export default Slider;
// ReactDOM.createRoot(document.body).render(
//   <Slider title="React Slider" slides={images} />
// );
