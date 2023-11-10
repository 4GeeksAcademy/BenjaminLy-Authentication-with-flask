import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/workspaces/BenjaminLy-Authentication-with-flask/src/front/styles/home.css';

export const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Username:', username, 'Password:', password, 'Email:', email);
  };

  return (
    <div className="signup-container container mt-4">
		<form>
		  <div className="form-group">
			<label>Username</label>
			<input type="username" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" 
			onChange={(e) => setUsername(e.target.value)}/>
		  </div>
		  <div className="form-group">
			<label>Password</label>
			<input type="password" className="form-control mt-2" id="exampleInputPassword1" placeholder="Enter password"
			onChange={(e) => setPassword(e.target.value)}/>
		  </div>
      <div className="form-group">
			<label>Email</label>
			<input type="email" className="form-control mt-2" id="exampleInputPassword1" placeholder="Enter email"
			onChange={(e) => setEmail(e.target.value)}/>
		  </div>
      <div className="form-group">
			<label>Address</label>
			<input type="address" className="form-control mt-2" id="exampleInputPassword1" placeholder="Enter address"
			onChange={(e) => setAddress(e.target.value)}/>
		  </div>
      <div className="form-group">
			<label>Phone</label>
			<input type="phone" className="form-control mt-2" id="exampleInputPassword1" placeholder="Enter phone number"
			onChange={(e) => setPhone(e.target.value)}/>
		  </div>
		  <button type="submit" className="btn btn-primary mt-2">Submit</button>
		</form>
	  </div>
  );
};


