import React from "react";
import { Link, Router, NavLink} from "react-router-dom";
import styled from "styled-components";



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: "#fff" }}></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white  ml-5" to="/news">
              All
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white  ml-5" to="/Login">
              My Subscription
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white  ml-5" to="/">
              My Favorate
            </Link>
          </li>
        </ul>
        <Link className="btn btn-outline-dark my-2 my-sm-0 ml-2 font-weight-bold" type="submit" to="/Login">
          Login
        </Link>
        <Link className="btn btn-outline-dark my-2 my-sm-0 ml-2 font-weight-bold" type="submit" to="/Login">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;


const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 2rem;
    color: var(--mainWhite);
    align-items: center
  }
  .footer-bottom {
    background: var(--mainDark);
    padding-top: 2rem;
    padding-bottom: 0.5rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
