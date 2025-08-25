import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Hosting from "./Pages/Hosting";
import Domain from "./Pages/Domain";
import Auth from "./Pages/Auth";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/hosting" element={<Hosting />} />
				<Route path="/domain" element={<Domain />} />
			</Routes>
		</div>
	);
}

export default App;
