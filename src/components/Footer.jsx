/** @format */

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
	return (
		<div class="h-32 pt-8">
			<div className="socialMedia">
				<InstagramIcon fontSize="large" />
				<LinkedInIcon fontSize="large" />
				<GitHubIcon fontSize="large" />
			</div>
			<p> &copy; 2024 SamsPizza.com</p>
		</div>
	);
};

export default Footer;
