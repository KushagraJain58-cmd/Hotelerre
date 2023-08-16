import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Products from './pages/ProductsPage/Product';
import Contact from './pages/ContactPage/Contact';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} exact />
			<Route path="/about" element={<About />} />
			<Route path="/products" element={<Products />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
}

export default App;
