import React, { useContext } from "react";
import classes from "./FilmPage.module.css";
import Film from "./Film";
// import {data} from "../../films"
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { IFilm } from "../../types";
import { deleteFilm } from "../filmsServices";
import FilmsContext from "../../FilmsContext";

const FilmsPage = ({ admin }: any) => {
  const { films, setFilms } = useContext(FilmsContext);
  let navigate = useNavigate();
  console.log(films);

  function addFilm() {
    console.log("Yes");
    navigate(`/films/newfilm`);
  }

  async function removeFilm(film) {
    await deleteFilm(film.id);
    setFilms((prevFilms) => {
      return prevFilms.filter((item) => item.id !== film.id);
    });
  }

  // console.log(films);
  return (
    <div>
      {admin && (
        <Button sx={{ margin: 2 }} onClick={addFilm} variant="outlined">
          Add film
        </Button>
      )}
      <div
        className={classes.list}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {films.map((film: IFilm) => {
          return (
            <Film film={film} admin={admin} remove={removeFilm} key={film.id} />
          );
        })}
      </div>
    </div>
  );
};

export default FilmsPage;
