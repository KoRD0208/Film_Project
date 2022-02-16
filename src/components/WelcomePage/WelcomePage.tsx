import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import classes from "./WelcomeLink.module.css";

const WelcomePage = () => {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <h1
        style={{
          fontSize: "72px",
        }}
      >
        Welcome on Films Library!
      </h1>
      <h2>You can find the best films here!</h2>
      <Link to={"/films"} className={classes.link}>
        <h1 style={{ marginTop: "100px" }}>
          <ArrowForwardIosIcon />
          Go to library
          <ArrowBackIosNewIcon />
        </h1>
      </Link>
    </div>
  );
};

export default WelcomePage;
