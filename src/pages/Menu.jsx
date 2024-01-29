/** @format */

import React, {
	useState,
	useEffect,
} from "react";
import steaming from "../assets/steaming.svg";
import MenuItem from "../components/MenuItem";
import { db } from "../firebase-config";

import {
	collection,
	getDocs,
} from "firebase/firestore";

const Menu = () => {
	const [pizzas, setpizzas] = useState(
		[]
	);
	

	useEffect(() => {
		const pizzasCollectionRef =
			collection(db, "pizzas");
		const getPizzas = async () => {
			const data = await getDocs(
				pizzasCollectionRef
			);
			//console.log(data);
			setpizzas(
				data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
		};
		getPizzas();
	}, []);
	return (
		<div
			className="bg-no-repeat bg-center bg-cover min-h-screen"
			style={{
				backgroundImage: `url(${steaming})`,
			}}>
			{" "}
			<h1 className="pt-16 pb-16 font-semibold leading-none tracking-tight text-white text-3xl md:text-5xl lg:text-6xl dark:text-white">
				Our Menu
			</h1>
			<div className="menuList flex flex-wrap justify-center">
				{pizzas.map((pizza, key) => {
					return (
						<div>
							<MenuItem
								key={key}
								image={pizza.image}
								name={pizza.name}
								ingredients={
									pizza.ingredients
								}
								price={pizza.price}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Menu;
