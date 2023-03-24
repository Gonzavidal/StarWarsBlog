import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import Navbar from "./component/navbar";
import Characters from "./views/Characters.js"
import Planets from "./views/Planets.js"
import Vehicles from "./views/Vehicles.js"

function App () {
	return (
		<div>
			<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/" element={<Characters />} />
						<Route path="/" element={<Vehicles />} />
						<Route path="/" element={<Vehicles />} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
