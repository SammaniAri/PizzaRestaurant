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

	const addToCart = (id) => {
		setCartItems((prevItems) => [
			...prevItems,
			id,
		]);

		alert(" pizza added to the cart");
	};

	const removeFromCart = (id) => {
		setCartItems((prevItems) =>
			prevItems.filter(
				(item) => item.id !== id
			)
		);
	};

	const addMorePizzas = (
		id,
		quantity
	) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id
					? {
							...item,
							quantity:
								item.quantity + 1,
					  }
					: item
			)
		);
	};

	const reducePizzaQuantity = (
		id,
		quantity
	) => {
		setCartItems((cartItems) =>
			cartItems.map((item) =>
				item.id === id &&
				item.quantity >= 1
					? {
							...item,
							quantity:
								item.quantity - 1,
					  }
					: item
			)
		);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				addMorePizzas,
				reducePizzaQuantity,
			}}>
			{children}
		</CartContext.Provider>
	);
};

// Custom hook to use the cart context
export const useCart = () =>
	useContext(CartContext);
