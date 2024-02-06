/** @format */

import React, { useState } from "react";
import Logo from "../assets/testLogo.jpg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "./Logout";

const Header = () => {
	const [hamburger, setHamburger] =
		useState(false);
	const toggleHamburger = () => {
		setHamburger(!hamburger);
	};

	const handleCloseMenu = () => {
		setHamburger(false);
	};


	return (
		<div className="bg-[#050708] sticky top-0 z-[20] mx-auto flex w-full items-center justify-between">
			<div className="hamburger md:hidden fixed top-4 left-4 z-50">
				<button
					onClick={toggleHamburger}>
					<MenuIcon fontSize="large" />
				</button>
			</div>
			<div
				//mobileLinks

				className={`sm:hidden ${
					hamburger
						? "flex flex-col space-y-1 fixed top-12 left-12 z-50 bg-[#050708] rounded-lg w-64"
						: "hidden"
				}`}>
				<Link
					to="/"
					className="hover:bg-[#A20000] font-bold"
					onClick={handleCloseMenu}>
					Home
				</Link>
				<Link
					to="/menu"
					className="hover:bg-[#A20000]"
					onClick={handleCloseMenu}>
					Menu
				</Link>
				<Link
					to="/about"
					className="hover:bg-[#A20000]"
					onClick={handleCloseMenu}>
					About
				</Link>
				<Link
					to="/contact"
					className="hover:bg-[#A20000]"
					onClick={handleCloseMenu}>
					Contact
				</Link>
				<Link
					to="/authpage"
					className="hover:text-[#A20000]"
					onClick={handleCloseMenu}>
					Log in
				</Link>
				<Logout
					onLogout={
						handleCloseMenu
					}></Logout>
			</div>
			<img
				className="h-16 w-16 hidden md:inline "
				src={Logo}
				alt="Your Company"
			/>
			<div className="navLinks hidden md:flex w-1/3 justify-between">
				<Link
					to="/"
					className="hover:text-[#A20000]">
					Home
				</Link>
				<Link
					to="/menu"
					className="hover:text-[#A20000]">
					Menu
				</Link>
				<Link
					to="/about"
					className="hover:text-[#A20000]">
					About
				</Link>
				<Link
					to="/contact"
					className="hover:text-[#A20000]">
					Contact
				</Link>
				<Link
					to="/authpage"
					className="hover:text-[#A20000]">
					Log in
				</Link>
				<Logout></Logout>
			</div>

			<div></div>
		</div>
	);
};

export default Header;
