/** @format */

import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
	const {
		cartItems,
		//addToCart,
		removeFromCart,
		//clearCart,
	} = useCart();
	const [quantity, setQuantity] =
		useState(cartItems.length);
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
															<div className="text-black cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-600 hover:text-orange-50">
																<RemoveIcon
																	onClick={() =>
																		setQuantity(
																			quantity -
																				1
																		)
																	}
																/>
															</div>
															<input
																className="h-8 w-8 border bg-white text-black text-center text-xs outline-none"
																type="number"
																name="pizzaAmount"
																value={
																	quantity
																}
																min="1"
															/>
															<div className="text-black cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-600 hover:text-orange-50">
																<AddIcon
																	onClick={() =>
																		setQuantity(
																			quantity +
																				1
																		)
																	}
																/>
															</div>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
