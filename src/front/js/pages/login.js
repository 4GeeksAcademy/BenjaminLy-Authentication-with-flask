import React, {useState} from "react";
import { Link } from "react-router-dom";
import '/workspaces/BenjaminLy-Authentication-with-flask/src/front/styles/home.css'

export const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  
  
	return (
		<div className="login-container container mt-4">
		<form>
		  <div className="form-group">
			<label for="exampleInputUsername">Username</label>
			<input type="username" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" 
			onChange={(e) => setUsername(e.target.value)}/>
		  </div>
		  <div className="form-group">
			<label for="exampleInputPassword1">Password</label>
			<input type="password" className="form-control mt-2" id="exampleInputPassword1" placeholder="Password"
			onChange={(e) => setPassword(e.target.value)}/>
		  </div>
		  <button type="submit" className="btn btn-primary mt-2">Submit</button>
		</form>
		<Link to="/signup">
		  <button type="signup" className="btn btn-primary mt-2">
			Signup
		  </button>
		</Link>
	  </div>
	);
  };
  
  