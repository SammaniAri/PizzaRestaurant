/** @format */

import React, {
	useState,
	useEffect,
} from "react";
import Logo from "../assets/testLogo.jpg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "./Logout";
import {
	getAuth,
	onAuthStateChanged,
} from "firebase/auth";

const Header = () => {
	const [hamburger, setHamburger] =
		useState(false);
	const toggleHamburger = () => {
		setHamburger(!hamburger);
	};

	const handleCloseMenu = () => {
		setHamburger(false);
	};

	const [showLogout, setShowLogout] =
		useState(false);
	const toggleLogoutVisibility = () => {
		setShowLogout(!showLogout);
	};

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setShowLogout(true);
			} else {
				setShowLogout(false);
			}
		});
	}, []);

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
					to="/cart"
					className="hover:text-[#A20000]"
					onClick={handleCloseMenu}>
					Cart
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
				<div>
					{showLogout ? (
						<Logout
							toggleLogout={
								toggleLogoutVisibility
							}
							onLogout={
								handleCloseMenu
							}></Logout>
					) : (
						<Link
							to="/authpage"
							className="hover:text-[#A20000]"
							onClick={handleCloseMenu}>
							Log in
						</Link>
					)}
				</div>
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
					to="/cart"
					className="hover:text-[#A20000]">
					Cart
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

				<div>
					{showLogout ? (
						<Logout
							toggleLogout={
								toggleLogoutVisibility
							}
							onLogout={
								handleCloseMenu
							}></Logout>
					) : (
						<Link
							to="/authpage"
							className="hover:text-[#A20000]">
							Log in
						</Link>
					)}
				</div>
			</div>

			<div></div>
		</div>
	);
};

export default Header;
