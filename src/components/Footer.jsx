/** @format */

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
	return (
		<div class="h-32 pt-8">
			<div className="socialMedia">
				<a
					href="https://www.linkedin.com/in/sammani-ariyarathne/"
					target="_blank"
					rel="noopener noreferrer">
					<LinkedInIcon fontSize="large" />
				</a>
				<a
					href="https://www.instagram.com/sammani_simonette/"
					target="_blank"
					rel="noopener noreferrer">
					<InstagramIcon fontSize="large" />
				</a>
				<a
					href="https://github.com/SammaniAri"
					target="_blank"
					rel="noopener noreferrer">
					<GitHubIcon fontSize="large" />
				</a>
			</div>
			<p> &copy; 2024 SamsPizza.com</p>
		</div>
	);
};

export default Footer;
