/** @format */

import React from "react";
import steaming from "../assets/steaming.svg";
import MenuItem from "../components/MenuItem";
import { MenuList } from "../helpyers/MenuList";

const Menu = () => {
	return (
		<div
			class="bg-no-repeat bg-center bg-cover min-h-screen"
			style={{
				backgroundImage: `url(${steaming})`,
			}}>
			{" "}
			<h1 class="pt-16 pb-16 font-semibold leading-none tracking-tight text-white text-3xl md:text-5xl lg:text-6xl dark:text-white">
				Our Menu
			</h1>
			<div class="menuList flex flex-wrap justify-center">
				{MenuList.map(
					(menuItem, key) => {
						return (
							<div>
								<MenuItem
									key={key}
									image={menuItem.image}
									name={menuItem.name}
									ingredients={
										menuItem.ingredients
									}
									price={menuItem.price}
								/>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};

export default Menu;
