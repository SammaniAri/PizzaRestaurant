/** @format */

import React from "react";
import thankyouImage from "../assets/steaming.svg";

const Thankyou = () => {
	return (
		<div
			className="bg-no-repeat bg-center bg-cover h-screen text-black flex flex-col justify-center items-center "
			style={{
				backgroundImage: `url(${thankyouImage})`,
			}}>
			<div class="block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bg-[#E1DAC7]">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Thank you for ordering our
					pizzas!
				</h5>
				<p class="font-normal text-gray-700 dark:text-gray-400">
					We hope you enjoy them!
				</p>
			</div>
		</div>
	);
};

export default Thankyou;
