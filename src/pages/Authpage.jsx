/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";

const Authpage = () => {
	const navigate = useNavigate();
	const [showSignUp, setShowSignUp] =
		useState(false);
	const toggleFormVisibility = () => {
		setShowSignUp(!showSignUp);
	};

	const [
		registerMail,
		setRegisterMail,
	] = useState("");
	const [
		registerPassword,
		setRegisterPassword,
	] = useState("");
	const register = async () => {
		try {
			const user =
				await createUserWithEmailAndPassword(
					auth,
					registerMail,
					registerPassword
				);
			console.log(user);
			console.log("signed up");
			navigate("/menu");
		} catch (error) {
			console.log(error);
		}
	};

	const [loginMail, setLoginMail] =
		useState("");
	const [
		loginPassword,
		setLoginPassword,
	] = useState("");

	const login = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(
				auth,
				loginMail,
				loginPassword
			);

			console.log("signed in!");
			navigate("/menu");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen">
			{showSignUp ? (
				<div className="signup mx-6 w-96">
					<div className="login border-2 rounded-md m-12">
						<form className="m-12">
							<div className="mb-8">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-white">
									E-mail:
								</label>
								<input
									name="email"
									value={registerMail}
									onChange={(event) => {
										setRegisterMail(
											event.target.value
										);
									}}
									placeholder="Enter full name"
									type="text"
									required
									className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
								/>
							</div>
							<div className="mb-8">
								<label
									htmlFor="password"
									className="block text-sm font-medium text-white">
									Password:
								</label>
								<input
									name="password"
									value={
										registerPassword
									}
									onChange={(event) => {
										setRegisterPassword(
											event.target.value
										);
									}}
									placeholder="Enter full name"
									type="text"
									required
									className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
								/>
							</div>

							<button
								type="button"
								onClick={register}
								className="text-white bg-[#A20000] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 m-8 p-2">
								{" "}
								Sign Up
							</button>

							<div className="text-sm font-light text-gray-500 dark:text-gray-400">
								Already have an account?{" "}
								<div>
									<button
										type="button"
										onClick={
											toggleFormVisibility
										}
										className="font-medium text-primary-600 hover:underline dark:text-primary-500">
										Login here
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			) : (
				<div className="login border-2 rounded-md  mx-6 w-96">
					<form className="m-12">
						<div className="mb-8">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-white">
								E-mail:
							</label>
							<input
								name="email"
								value={loginMail}
								onChange={(event) => {
									setLoginMail(
										event.target.value
									);
								}}
								placeholder="Enter full name"
								type="text"
								required
								className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
							/>
						</div>
						<div className="mb-8">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-white">
								Password:
							</label>
							<input
								name="password"
								value={loginPassword}
								onChange={(event) => {
									setLoginPassword(
										event.target.value
									);
								}}
								placeholder="Enter full name"
								type="text"
								required
								className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
							/>
						</div>
						<button
							className="text-white bg-[#A20000] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 m-8 p-2"
							onClick={login}>
							{" "}
							Sign in
						</button>
						<div className="text-sm font-light text-gray-500 dark:text-gray-400">
							Don’t have an account yet?{" "}
							<div>
								<button
									type="button"
									onClick={
										toggleFormVisibility
									}
									className="font-medium text-primary-600 hover:underline dark:text-primary-500">
									Sign up here
								</button>
							</div>
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default Authpage;
