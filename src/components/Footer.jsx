/** @format */

import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
	return (
		<div class="h-32 pt-8 bg-black">
			<div class="socialMedia flex justify-center">
				<div class="scale-100 hover:scale-110 transition-transform">
					<a
						href="https://www.linkedin.com/in/sammani-ariyarathne/"
						target="_blank"
						rel="noopener noreferrer">
						<LinkedInIcon fontSize="large" />
					</a>
				</div>
				<div class="scale-100 hover:scale-110 transition-transform">
					<a
						href="https://www.instagram.com/sammani_simonette/"
						target="_blank"
						rel="noopener noreferrer">
						<InstagramIcon fontSize="large" />
					</a>{" "}
				</div>
				<div class="scale-100 hover:scale-110 transition-transform">
					<a
						href="https://github.com/SammaniAri"
						target="_blank"
						rel="noopener noreferrer">
						<GitHubIcon fontSize="large" />
					</a>{" "}
				</div>
			</div>
			<p> &copy; 2024 SamsPizza.com</p>
		</div>
	);
};

export default Footer;
