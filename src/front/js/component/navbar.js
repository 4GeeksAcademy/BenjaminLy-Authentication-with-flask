import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/home">
          <span className="navbar-brand mb-0 h1">
            JWT Authentication Example
          </span>
        </Link>

        <div className="ml-auto">
          {!store.isLoggedIn ? (
            <div>
              <Link to="/signup">
                <button className="btn btn-primary me-2">Sign up</button>
              </Link>
              <Link to="/">
                <button className="btn btn-primary me-2">Sign in</button>
              </Link>
            </div>
          ) : (
            <button className="btn btn-danger" onClick={() => actions.logout()}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
