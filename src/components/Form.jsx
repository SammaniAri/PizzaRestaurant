/** @format */

import React, { useState } from "react";
import {
	collection,
	addDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";

const Form = () => {
	const [userData, setUserData] =
		useState({
			name: "",
			mail: "",
			phone: "",
			date: "",
			time: "",
			headCount: "",
		});

	let name, value;

	const data = (e) => {
		name = e.target.name;
		value = e.target.value;
		setUserData({
			...userData,
			[name]: value,
		});
	};

	const sendData = async (e) => {
		e.preventDefault();

		try {
			const docRef = await addDoc(
				collection(db, "user-data"),
				{
					...userData,
				}
			);
			setUserData({
				name: "",
				mail: "",
				phone: "",
				date: "",
				time: "",
				headCount: "",
				message: "",
			});
			alert("Reservation is made");
			console.log(
				"Document written with ID: ",
				docRef.id
			);
		} catch (e) {
			console.error(
				"Error adding document: ",
				e
			);
		}
	};

	return (
		<div className="border-2 rounded-md m-4 md:mx-24">
			<form
				method="POST"
				className="m-12 ">
				<div className="mb-8">
					<label
						htmlFor="name"
						className="block text-sm font-medium text-white">
						Name:
					</label>
					<input
						name="name"
						value={userData.name}
						onChange={data}
						placeholder="Enter full name"
						type="text"
						required
						className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
					/>
				</div>
				<div className="mb-8">
					<label
						htmlFor="mail"
						className="block text-sm font-medium   text-white">
						E-mail:
					</label>
					<input
						name="mail"
						value={userData.mail}
						onChange={data}
						placeholder="Enter your e-mail address"
						type="email"
						required
						className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
					/>
				</div>
				<div className="mb-8">
					<label
						htmlFor="phone"
						className="block text-sm font-medium  text-white">
						Phone:
					</label>
					<input
						name="phone"
						value={userData.phone}
						onChange={data}
						placeholder="Enter your phone number"
						type="number"
						required
						className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
					/>
				</div>
				<div className="mb-8">
					<label
						htmlFor="date"
						className="block text-sm font-medium  text-white">
						Reservation Date:
					</label>
					<input
						name="date"
						value={userData.date}
						onChange={data}
						type="date"
						required
						className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
					/>
				</div>
				<div className="mb-8">
					<label
						htmlFor="time"
						className="block text-sm font-medium">
						Reservation Time:
					</label>
					<input
						name="time"
						value={userData.time}
						onChange={data}
						type="time"
						required
						className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
					/>
				</div>
				<div className="mb-8">
					<label
						htmlFor="headCount"
						className="block text-sm font-medium   text-white">
						Number of people:
					</label>
					<input
						name="headCount"
						value={userData.headCount}
						onChange={data}
						type="text"
						className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
					/>
				</div>

				<button
					onClick={sendData}
					className="text-white bg-[#A20000] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 m-8 p-2">
					{" "}
					Make a Reservation
				</button>
			</form>
		</div>
	);
};

export default Form;
