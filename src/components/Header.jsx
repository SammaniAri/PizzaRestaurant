/** @format */

import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
	const [hamburger, setHamburger] =
		useState(false);
	const toggleHamburger = () => {
		setHamburger(!hamburger);
	};

	return (
		<div class="bg-[#050708] sticky top-0 z-[20] mx-auto flex w-full items-center justify-between">
			<div class="hamburger md:hidden fixed top-4 left-4 z-50">
				<button
					onClick={toggleHamburger}>
					<MenuIcon fontSize="large" />
				</button>
			</div>
			<div
				class="mobileLinks"
				className={`sm:hidden ${
					hamburger
						? "flex flex-col space-y-1 fixed top-12 left-12 z-50 bg-[#050708] rounded-lg w-64"
						: "hidden"
				}`}>
				<Link to="/">Home</Link>
				<Link to="/menu">Menu</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">
					Contact
				</Link>
			</div>
			<img
				class="h-16 w-16 hidden md:inline "
				src={Logo}
				alt="Your Company"
			/>
			<div class="navLinks hidden md:flex w-1/3 justify-between">
				<Link to="/">Home</Link>
				<Link to="/menu">Menu</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">
					Contact
				</Link>
			</div>

			<div></div>
		</div>
	);
};

export default Header;
