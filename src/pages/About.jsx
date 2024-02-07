/** @format */

import React from "react";
import bg from "../assets/bgbgpizza.svg";

const About = () => {
	return (
		<div className="w-full flex flex-col min-h-screen">
			<div
				className="md:w-full min-h-[25vh] flex-grow bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url(${bg})`,
				}}></div>

			<div className="flex flex-col items-center mt-12 mx-16 md:mx-72 justify-center">
				<h1 className="text-4xl pb-6">
					ABOUT US
				</h1>
				<p className="text-2xl pb-8">
					Lorem ipsum dolor sit amet,
					consectetur adipiscing elit,
					sed do eiusmod tempor
					incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim
					veniam, quis nostrud
					exercitation ullamco laboris
					nisi ut aliquip ex ea commodo
					consequat. Duis aute irure
					dolor in reprehenderit in
					voluptate velit esse cillum
					dolore eu fugiat nulla
					pariatur. Excepteur sint
					occaecat cupidatat non
					proident, sunt in culpa qui
					officia deserunt mollit anim
					id est laborum.
				</p>
			</div>
		</div>
	);
};

export default About;
