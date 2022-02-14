import React, { useContext, useState } from "react";
import classes from "./FilmPage.module.css";
import Film from "./Film";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { IFilm } from "../../types";
import { deleteFilm } from "../filmsServices";
import FilmsContext from "../../FilmsContext";
import SearchFilms from "../SearchFilms/SearchFilms";

interface FilmsPageProps {
  admin: boolean;
}

const FilmsPage = ({ admin }: FilmsPageProps) => {
  const { films, setFilms } = useContext(FilmsContext);
  const [searchVal, setSearchVal] = useState("");
  let navigate = useNavigate();

  function handleChange(value) {
    setSearchVal(value);
  }

  function addFilm() {
    console.log("Yes");
    navigate(`/films/newfilm`);
  }

  async function removeFilm(film: IFilm) {
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
      <SearchFilms value={searchVal} changeState={handleChange} />
      <div
        className={classes.list}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {films
          .filter((film) =>
            film.title.toLowerCase().includes(searchVal.toLowerCase())
          )
          .map((film: IFilm) => {
            return (
              <Film
                film={film}
                admin={admin}
                remove={removeFilm}
                key={film.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FilmsPage;
