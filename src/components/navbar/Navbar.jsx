import  { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
const pathName = location.pathname;
  useEffect(() => {
    // scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // close menu in mobile devices
/*     const menuBtn = btn.current;
    
    if(menuBtn){
      if(menuBtn.getAttribute('aria-expanded') == 'true'){
        menuBtn?.click();
      }
    } */


    // change header padding 
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [/* pathName */]);
  return (
    <div>
      <nav className={scrollPosition >= 1 ? "navbar navbar-expand-lg navbar-light show_background" : pathName === "/contact" ? "navbar contact_navbar navbar-expand-lg navbar-light" : pathName === "/privacy" ? "navbar privacy_navbar navbar-expand-lg navbar-light" : "navbar navbar-expand-lg navbar-light"}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home 
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Who We Are
                </Link>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/about">
                  About US
                  </NavLink>
                  <a className="dropdown-item" href="#">
                  CEO Message
                  </a>
                  <a className="dropdown-item" href="#">
                  Vision
                  </a>
                  <a className="dropdown-item" href="#">
                  Mission
                  </a>
                  <a className="dropdown-item" href="#">
                  Team
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle" 
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions & Sectors
                </Link>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/buildingAutomation">
                  Building Automation
                  </NavLink>
                  <NavLink className="dropdown-item" to="/industrialAutomation">
                  Industrial Automation
                  </NavLink>
                  <NavLink className="dropdown-item" to="/energyMonitoring">
                  Energy & Monitoring
                  </NavLink>
                  <NavLink className="dropdown-item" to="/wiringDevices">
                  Wiring Devices & UPS
                  </NavLink>
                  <NavLink className="dropdown-item" to="/electricVehiclesChargers">
                  Electric Vehicles Chargers
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/ourCompanies"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                Our Companies
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="#">
                  Sara Electrical Supplies

                  </Link>
                  <Link className="dropdown-item" href="#">
                  Sara Digital & Solution
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/news">
                  news
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
