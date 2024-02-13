/** @format */
import React, {
	createContext,
	useState,
	useContext,
} from "react";

const CartContext = createContext();

export const CartProvider = ({
	children,
}) => {
	const [cartItems, setCartItems] =
		useState([]);

	const addToCart = (addedItem) => {
		setCartItems((prevItems) => [
			...prevItems,
			addedItem,
		]);

		alert(
			addedItem + " added to the cart"
		);
	};

	const removeFromCart = (name) => {
		setCartItems((prevItems) =>
			prevItems.filter(
				(item) => item.id !== name
			)
		);
		alert(
			name + "removed from the cart"
		);
	};

	/*const clearCart = () => {
		setCartItems([]);
		alert("your cart is empty");
	};  */

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				//clearCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};

// Custom hook to use the cart context
export const useCart = () =>
	useContext(CartContext);
