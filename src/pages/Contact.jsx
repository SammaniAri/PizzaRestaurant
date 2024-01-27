/** @format */

import React from "react";
import oven from "../assets/oven2.svg";
import Form from "../components/Form";

const Contact = () => {
	return (
		<div class="flex flex-wrap min-h-screen bg-no-repeat bg-cover">
			<div
				class="leftSide w-1/2"
				style={{
					backgroundImage: `url(${oven})`,
				}}></div>
			<div class="rightSide w-1/2">
				<p>Want to book a table?</p>
				<Form />
			</div>
		</div>
	);
};

export default Contact;
