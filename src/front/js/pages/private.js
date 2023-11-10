import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			This is a private message
			<Link to="/Home">
				<button className="btn btn-primary">Back To Home</button>
			</Link>
		</div>
	);
};
