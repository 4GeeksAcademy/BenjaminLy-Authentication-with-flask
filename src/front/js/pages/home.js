import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			This is the home page.
			<Link to="/private">
				<button className="btn btn-primary">Private</button>
			</Link>
		</div>
	);
};
