import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handlClick = () => setClick(!click);

  return (
    <>
      <div className="navbarSticky">
        <div className="container ">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/">
              DSC BIET
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handlClick}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item active ">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home <span className="sr-only"></span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/events">
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="team">
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
