import React, { SetStateAction, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmDetailsForUser from "./FilmDetailsForUser";
import FilmDetailsForAdmin from "./FilmDetailsForAdmin";
import FilmsContext from "../../FilmsContext";
import { getFilm, getFilms } from "../filmsServices";
import { IFilm } from "../../types";

interface FilmDetailsPageProps {
  admin: boolean;
}

const FilmDetailsPage = ({ admin }: FilmDetailsPageProps) => {
  let { films, setFilms } = useContext(FilmsContext);
  console.log(films);
  // const [film, setFilm] = useState<IFilm>();
  let params = useParams<{ id: string }>();

  // useEffect(() => {
  //   async function getData() {
  //     setFilms(await getFilms());
  //   }
  //
  //   getData();
  // });

  // console.log(params);
  // let film = films.find((item) => item.id === Number(params.id));

  // console.log(film);
  if (admin) {
    return (
      <FilmDetailsForAdmin
        film={films.find((item) => item.id === Number(params.id))}
      />
    );
  } else {
    return (
      <FilmDetailsForUser
        film={films.find((item) => item.id === Number(params.id))}
      />
    );
  }
};

export default FilmDetailsPage;
