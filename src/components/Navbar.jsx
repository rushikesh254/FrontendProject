import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaServer } from "react-icons/fa";
function Navbar() {
	const location = useLocation();
	return (
		<div className="w-full bg-white fixed z-50 shadow">
			<div className="flex items-center justify-between px-6 sm:px-12 md:px-24 py-8"></div>

			{/* menu items here... */}

			<div className="flex items-center space-x-6">
				<div className="flex items-center gap-2">
					<FaServer className="text-primary text-2xl" />
					<span className="text-2xl font-bold text-dark">EliteHosting</span>
				</div>
				<div className="hidden md:flex items-center space-x-6 font-semibold text-dark ml-6">
					<Link
						to="/"
						className={location.pathname === "/" ? "text-primary" : ""}>
						Home
					</Link>
					<Link
						to="/hosting"
						className={
							location.pathname === "/hosting"
								? "text-primary"
								: "hover:text-primary"
						}>
						Hosting
					</Link>
					<Link
						to="/domain"
						className={
							location.pathname === "/domain"
								? "text-primary"
								: "hover:text-primary"
						}>
						Domain
					</Link>

					<Link
						to="/about"
						className={
							location.pathname === "/about"
								? "text-primary"
								: "hover:text-primary"
						}>
						About
					</Link>
					<Link to="/contact" className="hover:text-primary">
						Contact
					</Link>
				</div>
			</div>

			{/* Auth button here */}
			<div className="hidden md:flex items-center space-x-6 font-semibold  ">
				<Link
					to="/auth"
					className="text-dark rounded cursor-pointer font-semibold ">
					Login
				</Link>
				<Link
					to="/signup"
					className="px-6 py-2.5 bg-primary text-white rounded cursor-pointer font-semibold ">
					Sign Up
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
