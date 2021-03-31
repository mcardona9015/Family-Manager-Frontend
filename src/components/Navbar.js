import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({ setCurrentUser }) {
  const [navBarVisible, setNavBarVisible] = useState(false);
  function navButtonClick(e) {
    setNavBarVisible((navBarVisible) => !navBarVisible);
  }

  function handleLogout() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }

  return (
    <nav className="navbar">
      <NavLink to="/home" className="logo">
        Family Manager
      </NavLink>
      <div onClick={navButtonClick} className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={navBarVisible ? "visible navbar-links" : "navbar-links"}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/photos">Photo Album</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/lists">Lists</NavLink>
        {/* <NavLink to="/profile">Profile</NavLink> */}
        <a href="/logout" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
