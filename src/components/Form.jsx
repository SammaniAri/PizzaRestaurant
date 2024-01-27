/** @format */

import React from "react";

const Form = () => {
	return (
		<div>
			<form
				method="POST"
				class="m-12">
				<div>
					<label
						htmlFor="name"
						class="block text-sm font-medium text-white">
						Name:
					</label>
					<input
						name="name"
						placeholder="Enter full name"
						type="text"
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor="mail"
						class="block text-sm font-medium text-white">
						E-mail:
					</label>
					<input
						name="mail"
						placeholder="Enter your e-mail address"
						type="email"
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor="phone"
						class="block text-sm font-medium text-white">
						Phone:
					</label>
					<input
						name="phone"
						placeholder="Enter your phone number"
						type="number"
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor="date"
						class="block text-sm font-medium text-white">
						Reservation Date:
					</label>
					<input
						name="date"
						type="date"
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor="time"
						class="block text-sm font-medium text-white">
						Reservation Time:
					</label>
					<input
						name="time"
						type="time"
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor="headCount"
						class="block text-sm font-medium text-white">
						Number of people:
					</label>
					<input
						name="headCount"
						type="text"
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor="headCount"
						class="block text-sm font-medium text-white">
						Additional Notes (Optional)
					</label>
					<textarea
						rows="6"
						name="headCount"
						placeholder="Anything else you would like us to know?"
						type="text"
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
				</div>
				<button class="text-white bg-[#050708] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 m-8 p-2">
					{" "}
					Make Reservation
				</button>
			</form>
		</div>
	);
};

export default Form;
