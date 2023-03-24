import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="mt-5">
		<h1>Characters</h1>
		<p>
			<img src={rigoImage} />
		</p>
	</div>
);
