import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Slideshow.css';
import cover1 from '../../assets/images/Home/cover1.jpg';
import cover2 from '../../assets/images/Home/cover2.jpg';
import cover3 from '../../assets/images/Home/cover3.jpg';
import cover4 from '../../assets/images/Home/cover4.jpg';
import cover5 from '../../assets/images/Home/cover5.jpg';

const Slideshow = () => {
	return (
		<div className="slide-cont">
			<Carousel showStatus={false} useKeyboardArrows infiniteLoop interval={4000} autoPlay autoFocus>
				<div className="slide-card">
					<img src={cover1} alt="Slide 1" />
					<p className="slideshow-cont">
						We take pride in providing exceptional hotel services that are truly among the finest in the
						industry.
					</p>
				</div>
				<div className="slide-card">
					<img src={cover2} alt="Slide 2" />
					<p className="slideshow-cont">One stop solution to elevate the beauty of your dining experience.</p>
				</div>
				<div className="slide-card">
					<img src={cover3} alt="Slide 3" />
					<p className="slideshow-cont">One stop solution to all your Housekeeping supplie</p>
				</div>
				<div className="slide-card">
					<img src={cover4} alt="Slide 3" />
					<p className="slideshow-cont">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium?
					</p>
				</div>
				<div className="slide-card">
					<img src={cover5} alt="Slide 3" />
					<p className="slideshow-cont">One Stop solution to all your Kitchen supplies</p>
				</div>
			</Carousel>
		</div>
	);
};

export default Slideshow;
