import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import useFilmInfo from "./useFilmInfo";
import classes from "./styles/Textarea.module.css";
import FilmsContext from "../../FilmsContext";
import { addFilm, editFilm } from "../filmsServices";

const FilmDetailsForAdmin = ({ film }: any) => {
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
  const { films, setFilms } = useContext(FilmsContext);

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    hook: any
  ) {
    hook(e.target.value);
  }

  async function refactorFilm() {
    console.log("Applied");

    setFilms((oldFilms) => {
      oldFilms.forEach((item) => {
        if (item.id === film.id) {
          item.title = title;
          item.director = director;
          item.description = description;
          item.price = Number(price);
          console.log(oldFilms);
        }
      });
      console.log(film);
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
