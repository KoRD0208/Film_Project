import React, { useContext } from "react";
import { Button, Card, CardContent, CardMedia, TextField } from "@mui/material";
import useFilmInfo from "../useFilmInfo";
import classes from "./FilmsDetails.module.css";
import FilmsContext from "../../../contexts/FilmsContext";
import { editFilm } from "../../../services/filmsServices";
import { handleChange } from "../../../helpfullFuncs/handleChange";
import { IFilm } from "../../../types";

interface FilmDetailsForAdminProps {
  film: IFilm;
}

const FilmDetailsForAdmin = ({ film }: FilmDetailsForAdminProps) => {
  const {
    title,
    setTitle,
    director,
    setDirector,
    description,
    setDescription,
    price,
    setPrice,
  } = useFilmInfo(film);
  const { setFilms } = useContext(FilmsContext);

  async function refactorFilm() {
    console.log("Applied");

    setFilms((oldFilms) => {
      oldFilms.forEach((item) => {
        if (item.id === film.id) {
          item.title = title;
          item.director = director;
          item.description = description;
          item.price = String(price);
        }
      });
      return [...oldFilms];
    });
    await editFilm(film);
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Card
          sx={{
            margin: 2,
            width: "540px",
          }}
        >
          <CardContent>
            <CardMedia
              component="img"
              height="600"
              src={film.img}
              alt="Paella dish"
            />
            <TextField
              value={title}
              onChange={(e) => handleChange(e, setTitle)}
            />
            <TextField
              value={director}
              onChange={(e) => handleChange(e, setDirector)}
            />
            <TextField
              type="number"
              value={price}
              onChange={(e) => handleChange(e, setPrice)}
            />
          </CardContent>
        </Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
          }}
        >
          <textarea
            className={classes.description}
            value={description}
            onChange={(e) => handleChange(e, setDescription)}
          />
          <Button
            variant="outlined"
            onClick={refactorFilm}
            style={{ color: "rgb(24, 118, 210)" }}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilmDetailsForAdmin;
