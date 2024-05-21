/** @format */
import React from "react";
import "./App.css";
import Home from "./pages/Home";
//import Menu from "./pages/Menu";

//import About from "./pages/About";
//import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Authpage from "./pages/Authpage";
//import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

const LazyMenu = React.lazy(() =>
	import("./pages/Menu")
);
const LazyAbout = React.lazy(() =>
	import("./pages/About")
);
const LazyContact = React.lazy(() =>
	import("./pages/Contact")
);
const LazyCart = React.lazy(() =>
	import("./pages/Cart")
);

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
							element={
								<React.Suspense fallback="loading...">
									<LazyMenu />
								</React.Suspense>
							}
						/>
						<Route
							path="/about"
							element={
								<React.Suspense fallback="loading...">
									<LazyAbout />
								</React.Suspense>
							}
						/>
						<Route
							path="/contact"
							element={
								<React.Suspense fallback="loading...">
									<LazyContact />
								</React.Suspense>
							}
						/>
						<Route
							path="/checkout"
							element={<Checkout />}
						/>
						<Route
							path="/thankyou"
							element={<Thankyou />}
						/>
						<Route
							path="/authpage"
							element={<Authpage />}
						/>
						<Route
							path="/cart"
							element={
								<React.Suspense fallback="loading...">
									<LazyCart />
								</React.Suspense>
							}
						/>
					</Routes>
					<Footer />
				</Router>
			</CartProvider>
		</div>
	);
}

export default App;
