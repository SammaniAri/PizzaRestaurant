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
const [totalPizzas, setTotalPizzas] =
	useState(0);
const addToCart = (newItem) => {
	//  some() method checks if any array elements pass a test
	const isItemInCart = cartItems.some(
		(cartItem) =>
			cartItem.id === newItem.id
	);
	if (isItemInCart) {
		alert("Item already in the cart");
	} else {
		setCartItems((prevItems) => [
			...prevItems,
			newItem,
		]);
		alert(" pizza added to the cart");
		countTotalPizzas();
	}
};

const removeFromCart = (id) => {
	setCartItems((prevItems) =>
		prevItems.filter(
			(item) => item.id !== id
		)
	);
	countTotalPizzas();
};

const addMorePizzas = (id) => {
	setCartItems((prevItems) =>
		prevItems.map((item) =>
			item.id === id
				? {
						...item,
						quantity: item.quantity + 1,
				  }
				: item
		)
	);
	countTotalPizzas();
};

const reducePizzaQuantity = (id) => {
	setCartItems((cartItems) =>
		cartItems.map((item) =>
			item.id === id &&
			item.quantity >= 1
				? {
						...item,
						quantity: item.quantity - 1,
				  }
				: item
		)
	);
	countTotalPizzas();
};
const countTotalPizzas = () => {
	const total = cartItems.reduce(
		(accumulator, item) =>
			accumulator + item.quantity,
		0
	);
	setTotalPizzas(total);
};
console.log(totalPizzas);
return (
	<CartContext.Provider
		value={{
			cartItems,
			addToCart,
			removeFromCart,
			addMorePizzas,
			reducePizzaQuantity,
			countTotalPizzas,
		}}>
		{children}
	</CartContext.Provider>
);
};

// Custom hook to use the cart context
export const useCart = () =>
	useContext(CartContext);
