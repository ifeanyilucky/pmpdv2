import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-lg">
          {/* Brand */}
          <Link className="navbar-brand d-lg-none" to="/">
            <img src="/static/img/logo.png" alt="logo" width="50" />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              setOpen(true);
              console.log("shit's been clicked");
              if (open === true) {
                console.log("toggle is clicked now");
              }
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navigation */}
            <ul className="navbar-nav justify-content-end w-100">
              <li className="nav-item dropdown">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="pagesDropdown"
                  href="#"
                  role="button"
                >
                  Services
                </a>
              </li>
            </ul>

            {/* Brand */}
            <Link className="navbar-brand d-none d-lg-block px-lg-6" to="/">
              <img src="/static/img/logo.png" alt="logo" width="50" />
            </Link>

            {/* Navigation */}
            <ul className="navbar-nav justify-content-start w-100">
              <li className="nav-item">
                <a className="nav-link" href="#" role="button">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" role="button">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
