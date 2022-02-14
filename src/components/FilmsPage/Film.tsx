import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./styles/Film.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { IFilm } from "../../types";

interface FilmProps {
  film: IFilm;
  admin: boolean;
  remove: (film: IFilm) => void;
}

const Film = ({ film, admin, remove }: FilmProps) => {
  return (
    <Card
      sx={{
        margin: 2,
        width: "280px",
        overflow: "initial",
      }}
    >
      <CardContent sx={{ position: "relative" }}>
        <Link to={`/films/${film.id}`} style={{ textDecoration: "none" }}>
          <div className={classes.img}>
            <img src={film.img} alt="film-img" />
          </div>
        </Link>

        <span className={classes.price}>{film.price}$</span>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ minHeight: 80, textAlign: "center", fontWeight: 700 }}
        >
          {film.title}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ minHeight: 80 }}
        >
          Director: <br />
          {film.director}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ minHeight: 80 }}
        >
          Duration: <br />
          {film.duration} minutes
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button>
            <Link
              to={`/films/${film.id}`}
              style={{ textDecoration: "none", color: "rgb(24, 118, 210)" }}
            >
              <ReadMoreIcon sx={{ position: "relative", top: "6px" }} />
              More
            </Link>
          </Button>
          {admin && (
            <Button
              onClick={() => remove(film)}
              style={{ color: "rgb(228, 96, 73)" }}
            >
              <DeleteIcon />
              Remove
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Film;
