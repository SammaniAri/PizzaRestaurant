/** @format */

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

const Cart = () => {
	const {
		cartItems,
		subtotal,
		shipping,
		reducePizzaQuantity,
		removeFromCart,
		addMorePizzas,
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
									console.log(cartItem);
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
																		reducePizzaQuantity(
																			cartItem.id,
																			cartItem.quantity
																		)
																	}
																/>
															</div>
															<input
																className="h-8 w-8 border bg-white text-black text-center text-xs outline-none"
																type="number"
																name="pizzaAmount"
																min="1"
																value={
																	cartItem.quantity
																}
															/>
															<div className="text-black cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-600 hover:text-orange-50">
																<AddIcon
																	onClick={() =>
																		addMorePizzas(
																			cartItem.id,
																			cartItem.quantity
																		)
																	}
																/>
															</div>
														</div>
														<div className="flex items-center space-x-4">
															<p className="text-sm text-black">
																{cartItem.price *
																	cartItem.quantity}
																KR
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
						{/*  check out section */}
						<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
							<div className="mb-2 flex justify-between">
								<p className="text-gray-700">
									Subtotal
								</p>
								<p className="text-gray-700">
									{subtotal} KR
								</p>
							</div>
							<div className="flex justify-between">
								<p className="text-gray-700">
									Shipping
								</p>
								<p className="text-gray-700">
									{shipping} KR
								</p>
							</div>
							<hr className="my-4" />
							<div className="flex justify-between text-black">
								<p className="text-lg  font-bold">
									Total
								</p>
								<div className="">
									<p className="mb-1 text-lg font-bold">
										{subtotal +
											shipping}{" "}
										KR
									</p>
									<p className="text-sm text-gray-700">
										including VAT
									</p>
								</div>
							</div>
							<Link to="/checkout">
								<button className="mt-6 w-full  text-white bg-[#A20000] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center   items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2 p-2">
									Check out
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
