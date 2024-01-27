/** @format */

import React from "react";
import bg from "../assets/bgbgpizza.svg";

const About = () => {
	return (
		<div class="w-full h-[75vh] flex flex-col">
			<div
				class="w-full h-1/2 bg-center bg-no-repeat bg-cover font-sans"
				style={{
					backgroundImage: `url(${bg})`,
				}}></div>
			<div class="aboutBottom flex flex-col h-1/2 items-center mt-12 mx-72 justify-cente">
				<h1 class="text-4xl">
					ABOUT US
				</h1>
				<p class="text-2xl">
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
