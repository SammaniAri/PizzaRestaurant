/** @format */
import React, { useState } from "react";
import {
	collection,
	addDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
	const {
		cartItems,
		subtotal,
		shipping,
	} = useCart();
	//console.log(cartItems);
	//console.log(subtotal);

	const [
		userDelivery,
		setUserDelivery,
	] = useState({
		name: "",
		mail: "",
		phone: "",
		address: "",
	});

	let name, value;

	const data = (e) => {
		name = e.target.name;
		value = e.target.value;
		setUserDelivery({
			...userDelivery,
			[name]: value,
		});
	};

	const sendData = async (e) => {
		e.preventDefault();

		try {
			const docRef = await addDoc(
				collection(
					db,
					"user-delivery-info"
				),
				{
					...userDelivery,
				}
			);
			setUserDelivery({
				name: "",
				mail: "",
				phone: "",
				address: "",
			});
			alert(
				"delivery information confirmed"
			);
			console.log(
				"Document written with ID: ",
				docRef.id
			);
		} catch (e) {
			console.error(
				"Error adding delivery Info: ",
				e
			);
		}
	};
	return (
		<div className="flex flex-col lg:flex-row bg-black">
			<div className="left flex-1">
				<p className="text-xl mt-12">
					Delivery Information
				</p>
				<form
					method="POST"
					className="m-12">
					<div className="mb-8">
						<label
							htmlFor="name"
							className="block text-sm font-medium text-white">
							Name:
						</label>
						<input
							name="name"
							value={userDelivery.name}
							onChange={data}
							placeholder="Enter full name"
							type="text"
							required
							className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
						/>
					</div>
					<div className="mb-8">
						<label
							htmlFor="mail"
							className="block text-sm font-medium   text-white">
							E-mail:
						</label>
						<input
							name="mail"
							value={userDelivery.mail}
							onChange={data}
							placeholder="Enter your e-mail address"
							type="email"
							required
							className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
						/>
					</div>
					<div className="mb-8">
						<label
							htmlFor="phone"
							className="block text-sm font-medium  text-white">
							Phone:
						</label>
						<input
							name="phone"
							value={userDelivery.phone}
							onChange={data}
							placeholder="Enter your phone number"
							type="number"
							required
							className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
						/>
					</div>

					<div className="mb-8">
						<label
							htmlFor="address"
							className="block text-sm font-medium   text-white">
							Adress:
						</label>
						<input
							name="address"
							value={
								userDelivery.address
							}
							onChange={data}
							placeholder="Enter where you want the pizzas to be delivered"
							type="text"
							className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
						/>
					</div>
					<button
						onClick={sendData}
						className="text-white bg-[#A20000] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 m-8 p-2">
						Confirm delivery Information
					</button>
				</form>
			</div>
			<div className="right flex-1">
				<p className="text-xl mt-12">
					Summery of your purchase
				</p>
				<div className="m-12">
					<div className="card text-white">
						<div class="flex justify-center items-center   text-gray-900">
							<div class="h-96  relative w-72 shadow-2xl p-3 bg-white mt-4">
								<div class="py-2">
									<div class="text-center text-xl font-bold">
										ORDER
									</div>
									<div class="text-center text-xs font-bold">
										The order details
									</div>
								</div>
								<div class="text-center text-xs font-bold mb-1">
									~~~~~~~~~~~~~~~~~~~~~~~~~~~~
								</div>
								<div class="text-xs pl-2">
									<div>
										OrderNumber：xxxxxxxxxxxxxxxxxxx
									</div>
								</div>

								<div class="border-double border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 my-3">
									<div class="flex text-sm pt-1 px-1">
										<span class="w-2/6">
											Name
										</span>
										<span class="w-2/6 text-right">
											Price
										</span>
										<span class="w-2/6 text-right">
											Number
										</span>
									</div>
									{/* list that needs to be made by mapping */}
									{cartItems.map(
										(cartItem, key) => {
											return (
												<div>
													<div class="border-dashed border-t border-b border-l-0 border-r-0 border-gray-900 mt-1 my-2 py-2 px-1">
														{}
														<div class="flex justify-between text-sm">
															<span class="w-2/6 truncate">
																{
																	cartItem.name
																}
															</span>
															<span class="w-2/6 text-right">
																{
																	cartItem.price
																}
																KR
															</span>
															<span class="w-2/6 text-right">
																{
																	cartItem.quantity
																}
															</span>
														</div>
													</div>
												</div>
											);
										}
									)}
								</div>

								<div class="mb-1 text-right">
									Subtotal：{subtotal}KR
								</div>
								<div class="mb-1 text-right">
									Delivery Chrages：
									{shipping}KR
								</div>
								<div class="mb-1 text-right font-bold">
									Total：
									{subtotal + shipping}
									KR
								</div>
								<Link to="/thankyou">
									<button className="text-white bg-[#A20000] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mt-0 p-2">
										Place Order
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;