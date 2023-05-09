import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../../contexts/auth-context";

import classes from "./NavLinks.module.css";

function NavLinks() {
  const authContext = useContext(AuthContext);

  return (
    <ul className={classes["nav-links"]}>
      <li>
        <NavLink to={"/"} exact>
          All Users
        </NavLink>
      </li>
      {authContext.isLoggedIn && (
        <li>
          <NavLink to={"/u1/places"}>My Places</NavLink>
        </li>
      )}
      {authContext.isLoggedIn && (
        <li>
          <NavLink to={"/places/new"}>Add Place</NavLink>
        </li>
      )}
      {!authContext.isLoggedIn && (
        <li>
          <NavLink to={"/auth"}>Login</NavLink>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
