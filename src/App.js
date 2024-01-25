/** @format */

import "./App.css";
//import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
//import Navbar from "./components/Navbar";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
