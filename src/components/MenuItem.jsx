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
				<div class="productCard m-6 hover:scale-105 transition-transform">
					<div class="w-full max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<a href="#">
							<img
								class="p-8 rounded-lg"
								src={image}
								alt="product image"
							/>
						</a>
						<div class="px-5 pb-5">
							<a href="#">
								<h5 class="text-xl font-semibold tracking-tight  dark:text-white">
									{name}
								</h5>
							</a>
							<div class="flexjustify-center items-center mt-2.5 mb-5">
								<div class="bg-black text-white text-xs font- px-2.5 py-2 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
									{ingredients}
								</div>
							</div>
							<div class="flex items-center justify-between">
								<span class="text-l font-semibold pl-4  dark:text-white">
									{price} SEK
								</span>
								<a
									href="#"
									class="text-black  bg-orange-600 hover:bg-[#A20000] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#A20000] dark:focus:ring-blue-800">
									Add to cart
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
