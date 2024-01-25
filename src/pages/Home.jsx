/** @format */

import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/Steaming-slice.svg";

const Home = () => {
	return (
		<div>
			<div
				class="bg-no-repeat bg-center bg-cover h-screen"
				style={{
					backgroundImage: `url(${headerImage})`,
				}}>
				<div class="pt-16">
					<h1 class=" pt-48 pb-2 font-semibold leading-none tracking-tight text-gray-900 text-3xl md:text-5xl lg:text-6xl dark:text-white">
						Sam's Pizza
					</h1>
					<h2 class="pb-16 text-2xl md:text-4xl lg:text-5xl font-normal dark:text-white">
						Pizza to fit any taste
					</h2>
					<Link>
						<button
							type="button"
							class="text-white bg-[#050708] hover:bg-[#BA4918]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2 p-2">
							Order Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
