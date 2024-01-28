/** @format */

import React from "react";

const MenuItem = ({
	key,
	image,
	name,
	ingredients,
	price,
}) => {
	return (
		<div>
			<div>
				<div className="productCard m-6 hover:scale-105 transition-transform">
					<div className="w-full max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<div>
							<img
								className="p-8 rounded-lg"
								src={image}
								alt="pizza"
							/>
						</div>
						<div className="px-5 pb-5">
							<h5 className="text-xl font-semibold tracking-tight  dark:text-white">
								{name}
							</h5>

							<div className="flexjustify-center items-center mt-2.5 mb-5">
								<div className="bg-black text-white text-xs font- px-2.5 py-2 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
									{ingredients}
								</div>
							</div>
							<div className="flex items-center justify-between">
								<span className="text-l font-semibold pl-4  dark:text-white">
									{price} SEK
								</span>

								<button
									type="button"
									className="text-white bg-orange-600 hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2 p-2">
									Order Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
