/** @format */

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
//import NewNav from "./components/NewNav";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
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
