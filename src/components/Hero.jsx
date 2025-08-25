import React from "react";
import grid from "../assets/grid.jpg";

function Hero() {
	return (
		<div className="py-40 relative">
			<div className="absolute inset-0 opacity-15">
				<img
					src={grid}
					alt="Grid pattern"
					className="w-full h-screen  object-cover object-center"
				/>
			</div>
		</div>
	);
}

export default Hero;
