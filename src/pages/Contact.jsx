/** @format */

import React from "react";
import oven from "../assets/oven2.svg";
import Form from "../components/Form";

const Contact = () => {
	return (
		<div className="contact w-full h-[90vh] flex bg-white ">
			<div
				className="leftSide h-full flex-[1_1_50%] bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url(${oven})`,
				}}></div>
			<div className="rightSide h-full  flex-[1_1_50%] flex flex-col justify-center mt-12 text-2xl text-black">
				<p>Want to book a table?</p>
				<Form />
			</div>
		</div>
	);
};

export default Contact;
