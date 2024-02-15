/** @format */

import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Authpage from "./pages/Authpage";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<CartProvider>
				<Router>
					<Header />
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/menu"
							element={<Menu />}
						/>
						<Route
							path="/about"
							element={<About />}
						/>
						<Route
							path="/contact"
							element={<Contact />}
						/>
						<Route
							path="/checkout"
							element={<Checkout />}
						/>
						<Route
							path="/authpage"
							element={<Authpage />}
						/>
						<Route
							path="/cart"
							element={<Cart />}
						/>
					</Routes>
					<Footer />
				</Router>
			</CartProvider>
		</div>
	);
}

export default App;
