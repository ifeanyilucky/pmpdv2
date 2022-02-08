import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-lg">
          {/* Brand */}
          <a className="navbar-brand d-lg-none" href="./index.html">
            Goodkit
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
                <div className="dropdown-positioner">
                  <div
                    className="dropdown-menu dropdown-menu-xl dropdown-menu-flush"
                    aria-labelledby="landingsDropdown"
                  ></div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="pagesDropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
              </li>
            </ul>

            {/* Brand */}
            <Link className="navbar-brand d-none d-lg-block px-lg-6" to="/">
              PMPD
            </Link>

            {/* Navigation */}
            <ul className="navbar-nav justify-content-start w-100">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="accountDropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="docsDropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Docs
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <div className="nav-link">
                  {/* Text */}
                  <span>Sans Serif Headers</span>

                  {/* Switch */}
                  <form className="ms-auto me-n3">
                    <div className="form-check form-switch mb-0">
                      <input
                        className="form-check-input family-switch"
                        type="checkbox"
                        id="familySwitchMobile"
                        onchange="switchFamily(this.checked)"
                      />
                      <label
                        className="form-check-label"
                        for="familySwitchMobile"
                      ></label>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
