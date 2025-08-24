import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaServer } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
function Navbar() {
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);

	const closeMobile = () => setMobileOpen(false);
	return (
		<div className="w-full bg-white fixed z-50 shadow flex justify-between">
			<div className="hidden md:flex items-center justify-between px-6 sm:px-12 md:px-24 py-8 w-full">
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
			</div>

			{/* Auth button here */}
			<div className="hidden md:flex items-center space-x-6 font-semibold mx-7  ">
				<Link
					to="/auth"
					className="text-dark rounded cursor-pointer font-semibold ">
					Login
				</Link>
				<Link
					to="/auth"
					className="px-6 py-2.5 bg-primary text-white rounded cursor-pointer font-semibold ">
					Sign Up
				</Link>
			</div>

			{/* mobile view */}
			<div className="md:hidden flex items-center justify-between px-6 py-4 relative w-full">
				<div className="flex items-center gap-2">
					<FaServer className="text-primary text-2xl" />
					<span className="text-2xl font-bold text-dark">EliteHosting</span>
				</div>
				<button
					aria-label={mobileOpen ? "Close menu" : "Open menu"}
					className="p-2 rounded-md text-dark"
					onClick={() => setMobileOpen((o) => !o)}>
					{mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
				</button>

				{mobileOpen && (
					<div className="absolute left-0 right-0 top-full mt-2 bg-primary text-white rounded-md shadow-lg overflow-hidden">
						<nav className="flex flex-col px-6 py-4 gap-3">
							<Link to="/" onClick={closeMobile} className="py-2">
								Home
							</Link>
							<Link to="/hosting" onClick={closeMobile} className="py-2">
								Hosting
							</Link>
							<Link to="/domain" onClick={closeMobile} className="py-2">
								Domain
							</Link>
							<Link to="/about" onClick={closeMobile} className="py-2">
								About
							</Link>
							<Link to="/contact" onClick={closeMobile} className="py-2">
								Contact
							</Link>
							<div className="h-px bg-white/20 my-2" />
							<div className="flex flex-col gap-2">
								<Link
									to="/auth"
									onClick={closeMobile}
									className="text-white/90 rounded cursor-pointer font-semibold py-2 text-center">
									Login
								</Link>
								<Link
									to="/auth"
									onClick={closeMobile}
									className="px-6 py-2.5 bg-white text-primary rounded cursor-pointer font-semibold text-center">
									Sign Up
								</Link>
							</div>
						</nav>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
