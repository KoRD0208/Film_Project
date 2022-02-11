import React from "react";
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MovieIcon from "@mui/icons-material/Movie";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

interface HeaderProps {
  authorized: boolean;
}

const styles = (isActive) => {
  return {
    borderBottom: isActive ? "2px solid #000" : "none",
    paddingBottom: "28px",
    transition: "all linear .2s",
  };
};

const Header = ({ authorized }: HeaderProps) => {
  return (
    <nav className={classes.header}>
      <ul className={classes.menu}>
        <li className={classes.item}>
          <NavLink
            style={({ isActive }) => {
              return styles(isActive);
            }}
            to="/home"
          >
            <HomeIcon sx={{ position: "relative", top: "4px" }} />
            Home
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            style={({ isActive }) => {
              return styles(isActive);
            }}
            to="/films"
          >
            <MovieIcon sx={{ position: "relative", top: "4px" }} />
            Films
          </NavLink>
        </li>

        {authorized ? (
          <>
            <li className={classes.item}>
              <NavLink
                style={({ isActive }) => {
                  return styles(isActive);
                }}
                to="/profile"
              >
                <AccountBoxIcon sx={{ position: "relative", top: "4px" }} />
                Profile
              </NavLink>
            </li>
            <li className={classes.item}>
              <NavLink
                style={({ isActive }) => {
                  return styles(isActive);
                }}
                to="/logout"
              >
                <LogoutIcon sx={{ position: "relative", top: "4px" }} />
                Log out
              </NavLink>
            </li>
          </>
        ) : (
          <li className={classes.item}>
            <NavLink
              style={({ isActive }) => {
                return styles(isActive);
              }}
              to="/auth"
            >
              <LoginIcon sx={{ position: "relative", top: "4px" }} />
              Log in
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
