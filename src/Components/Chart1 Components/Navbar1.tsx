import { useState } from "react";
import { NavLink } from "react-router-dom";
function NavBar1() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/Chart1" className="nav-logo">
          E-Commerce Analytics
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
                OrderTrend
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Chart4"
                className="nav-links"
                onClick={handleClick}
              >
                Company Level OrderTrends 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Chart2"
                className="nav-links"
                onClick={handleClick}
              >
                New Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Chart3"
                className="nav-links"
                onClick={handleClick}
              >
                Inactive Customers
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
