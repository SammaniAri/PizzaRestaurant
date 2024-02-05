/** @format */

import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const Logout = () => {
	const logout = async () => {
		await signOut(auth);
		console.log("logged out");
	};
	return (
		<div className="logout">
			{" "}
			<div className="logout">
				{" "}
				<button
					className="text-white bg-[#A20000] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 m-8 p-2"
					onClick={logout}>
					{" "}
					Log out
				</button>
			</div>
		</div>
	);
};

export default Logout;
