import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import"./Chart1 Components/Statistics Components/App.css";


function NavBar1() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/Chart1" className="nav-logo">
            Dashboard
            <i className="fas fa-code"></i>
          </NavLink>
.
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/Chart1"
                className="nav-links"
                onClick={handleClick}
              >
                Order-Trends
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Chart2"
                className="nav-links"
                onClick={handleClick}
              >
                New User Analytics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Chart3"
                className="nav-links"
                onClick={handleClick}
              >
                Inactive User Analytics
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar1;
