/** @format */

import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/bgPizza.svg";
 

const Home = () => {
	return (
		<div>
			<div
				className="bg-no-repeat bg-center bg-cover h-screen"
				style={{
					backgroundImage: `url(${headerImage})`,
				}}>
				<div className="pt-16">
					<h1 className=" pt-48 pb-2 font-semibold leading-none tracking-tight text-white text-3xl md:text-5xl lg:text-6xl dark:text-white text-left pl-16">
						Sam's Pizza
					</h1>
					<h2 className="pb-16 text-2xl md:text-4xl lg:text-5xl font-normal text-white dark:text-white text-left pl-16">
						Pizza to fit any taste
					</h2>
					<div className="text-left pl-16">
						<Link to="/menu">
							<button
								type="button"
								className="text-white bg-[#A20000] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2 p-2">
								Order Now
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Home;
