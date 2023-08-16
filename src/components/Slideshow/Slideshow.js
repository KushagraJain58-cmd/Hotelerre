import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Slideshow.css';
import demo from '../../assets/images/Home/demo.jpg';
import demo2 from '../../assets/images/Home/demo2.jpg';
import demo3 from '../../assets/images/Home/demo3.jpeg';

const Slideshow = () => {
	return (
		<div className="slide-cont">
			<Carousel showStatus={false} stopOnHover useKeyboardArrows infiniteLoop interval={5000}>
				<div className="slide-card">
					<img src={demo} alt="Slide 1" />
					<p className="slideshow-cont">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium?
					</p>
				</div>
				<div className="slide-card">
					<img src={demo2} alt="Slide 2" />
					<p className="slideshow-cont">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium?
					</p>
				</div>
				<div className="slide-card">
					<img src={demo3} alt="Slide 3" />
					<p className="slideshow-cont">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium?
					</p>
				</div>
				<div className="slide-card">
					<img src={demo} alt="Slide 3" />
					<p className="slideshow-cont">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium?
					</p>
				</div>
				<div className="slide-card">
					<img src={demo3} alt="Slide 3" />
					<p className="slideshow-cont">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium?
					</p>
				</div>
			</Carousel>
		</div>
	);
};

export default Slideshow;
