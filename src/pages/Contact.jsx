/** @format */

import React from "react";
import oven from "../assets/oven2.svg";
import Form from "../components/Form";

const Contact = () => {
	return (
		<div className="flex flex-col lg:flex-row bg-black">
			<div
				className="left min-h-[50vh] lg:h-[90vh] bg-no-repeat bg-center bg-cover flex flex-1"
				style={{
					backgroundImage: `url(${oven})`,
				}}></div>
			<div className="right flex-1">
				<p className="text-2xl mt-12">
					Want to book a table?
				</p>
				<Form />
			</div>
		</div>
	);
};

export default Contact;
