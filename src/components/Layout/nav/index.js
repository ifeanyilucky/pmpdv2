// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-lg">
//           {/* Brand */}
//           <Link className="navbar-brand d-lg-none" to="/">
//             <img src="/static/img/logo.png" alt="logo" width="50" />
//           </Link>

//           {/* Toggler */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={() => {
//               setOpen(true);
//               console.log("shit's been clicked");
//               if (open === true) {
//                 console.log("toggle is clicked now");
//               }
//             }}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Collapse */}
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             {/* Navigation */}
//             <ul className="navbar-nav justify-content-end w-100">
//               <li className="nav-item">
//                 <Link to="/about" className="nav-link">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item ">
//                 <a className="nav-link" href="#" role="button">
//                   Services
//                 </a>
//               </li>
//             </ul>

//             {/* Brand */}
//             <Link className="navbar-brand d-none d-lg-block px-lg-6" to="/">
//               <img src="/static/img/logo.png" alt="logo" width="50" />
//             </Link>

//             {/* Navigation */}
//             <ul className="navbar-nav justify-content-start w-100">
//               <li className="nav-item">
//                 <a className="nav-link" href="#" role="button">
//                   Contact us
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#" role="button">
//                   Testimonials
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//     </>
//   );
// }
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: [
      {
        id: 1,
        text: "About",
        url: "/about",
      },
      {
        id: 2,
        text: "Services",
        url: "#services",
      },
      {
        id: 3,
        text: "Testimonials",
        url: "#testimonials",
      },
      {
        id: 4,
        text: "Contact",
        url: "/contact",
      },
    ],
  };

  // navbar toggler button
  navbarToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-lg">
          <Link className="navbar-brand d-lg-none" to="/">
            <img src="/static/img/logo.png" alt="logo" width="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.navbarToggler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={this.state.navbarClass}>
            {this.state.menus.slice(0, 2).map((menu) => {
              return (
                <ul className="navbar-nav justify-content-end w-100">
                  <li key={menu.id} className="nav-item">
                    <a href={menu.url} className="nav-link text-dark">
                      {menu.text}
                    </a>
                  </li>
                </ul>
              );
            })}
            <Link className="navbar-brand d-none d-lg-block px-lg-6" to="/">
              <img src="/static/img/logo.png" alt="logo" width="50" />
            </Link>
            {this.state.menus.slice(2, 4).map((menu) => {
              return (
                <ul className="navbar-nav justify-content-start w-100">
                  <li className="nav-item">
                    <a className="nav-link" href={menu.url} role="button">
                      {menu.text}
                    </a>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
}
