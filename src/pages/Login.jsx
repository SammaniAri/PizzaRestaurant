/** @format */

import React, {
	useState,
	useEffect,
} from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

const Login = () => {
	const [
		registerMail,
		setRegisterMail,
	] = useState("");
	const [
		registerPassword,
		setRegisterPassword,
	] = useState("");
	const register = async () => {
		//console.log("yo");
		try {
			const user =
				await createUserWithEmailAndPassword(
					auth,
					registerMail,
					registerPassword
				);
			console.log(user);
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
	const login = async () => {};

	const logout = async () => {};

	const [user, setUser] =
		useState(null);

	/*	useEffect(() => {
		onAuthStateChanged(
			auth,
			(currentUser) => {
				setUser(currentUser);
			}
		);
	}, []);    */

	return (
		<div className="mx-56">
			<div className="signup">
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
								value={registerPassword}
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

						<p className="text-sm font-light text-gray-500 dark:text-gray-400">
							Already have an account?
							<a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
								Login here
							</a>
						</p>
					</form>
				</div>
			</div>
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
					<button className="text-white bg-[#A20000] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 m-8 p-2">
						{" "}
						Sign in
					</button>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Don’t have an account yet?{" "}
						<a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
							Sign up
						</a>
					</p>
				</form>
			</div>
			<div className="logout">
				{" "}
				<button className="text-white bg-[#A20000] hover:bg-[#A20000]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 m-8 p-2">
					{" "}
					Log out
				</button>
			</div>
		</div>
	);
};

export default Login;
