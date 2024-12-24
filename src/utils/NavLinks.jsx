import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavLinks = ({ onLinkClick }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Authentication state
  const navigate = useNavigate(); // For navigation

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Remove authentication status from localStorage
    navigate("/", { replace: true });
    window.scrollTo({ top: 0 });
  };

  const baseClasses =
    "text-navbarText dark:text-darkNavbarText block md:inline-block hover:text-navbarText/70 dark:hover:text-darkNavbarText/50 transition duration-300";

  return (
    <>
      <Link to="home" onClick={onLinkClick} className={baseClasses}>
        Home
      </Link>
      <Link to="route" onClick={onLinkClick} className={baseClasses}>
        Route
      </Link>
      <Link to="profile" onClick={onLinkClick} className={baseClasses}>
        Profile
      </Link>

      {isAuthenticated && (
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick();
            handleLogout();
          }}
          className={baseClasses}
        >
          Logout
        </Link>
      )}
    </>
  );
};

export default NavLinks;
