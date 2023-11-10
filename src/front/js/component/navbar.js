import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const removeToken = () =>{
		sessionStorage.removeItem('token')
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">JWT Authentication Example</span>
				</Link>
				<div className="ml-auto">
						<button className="btn btn-danger"
						onClick={() => removeToken()}>Logout</button>
				</div>
			</div>
		</nav>
	);
};
