/** @format */

import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../context/CartContext";

const Cart = () => {
	const {
		cartItems,
		//addToCart,
		removeFromCart,
		//clearCart,
	} = useCart();
	return (
		<div>
			Cart
			<div>
				<div className="h-screen bg-black pt-20">
					<h1 className="mb-10 text-center text-2xl font-bold">
						Cart Items
					</h1>

					<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
						{/* cart items section*/}
						<div className="rounded-lg md:w-2/3">
							{cartItems.map(
								(cartItem, key) => {
									return (
										<div>
											<div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
												<img
													alt="selected pizza"
													/*	src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
									alt="product" */
													src={
														cartItem.image
													}
													className="w-full rounded-lg sm:w-40"
												/>

												<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
													<div className="mt-5 sm:mt-0">
														<h2 className="text-lg font-bold text-gray-900">
															{
																cartItem.name
															}
														</h2>
														<p className="mt-1 text-xs text-gray-700">
															{
																cartItem.price
															}
														</p>
													</div>
													<div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
														<div className="flex items-center border-gray-100">
															<span className="text-black cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-600 hover:text-orange-50">
																-
															</span>
															<input
																className="h-8 w-8 border bg-white text-black text-center text-xs outline-none"
																type="number"
																value="2"
																min="1"
															/>
															<span className="text-black cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-600 hover:text-orange-50">
																+
															</span>
														</div>
														<div className="flex items-center space-x-4">
															<p className="text-sm text-black">
																259.000
																₭
															</p>
															<DeleteIcon
																aria-label="remove from cart"
																onClick={() =>
																	removeFromCart(
																		cartItem.id
																	)
																}
																className="text-black"></DeleteIcon>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								}
							)}
						</div>
						{/*  Sub total check out section */}
						<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
							<div className="mb-2 flex justify-between">
								<p className="text-gray-700">
									Subtotal
								</p>
								<p className="text-gray-700">
									$129.99
								</p>
							</div>
							<div className="flex justify-between">
								<p className="text-gray-700">
									Shipping
								</p>
								<p className="text-gray-700">
									$4.99
								</p>
							</div>
							<hr className="my-4" />
							<div className="flex justify-between text-black">
								<p className="text-lg  font-bold">
									Total
								</p>
								<div className="">
									<p className="mb-1 text-lg font-bold">
										$134.98 USD
									</p>
									<p className="text-sm text-gray-700">
										including VAT
									</p>
								</div>
							</div>
							<button className="mt-6 w-full  text-white bg-[#A20000] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center   items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2 p-2">
								Check out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
