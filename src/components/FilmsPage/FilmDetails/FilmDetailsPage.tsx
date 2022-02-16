import React, { SetStateAction, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmDetailsForUser from "./FilmDetailsForUser";
import FilmDetailsForAdmin from "./FilmDetailsForAdmin";
import FilmsContext from "../../../contexts/FilmsContext";
import { getFilms } from "../../../services/filmsServices";
import { IFilm } from "../../../types";

interface FilmDetailsPageProps {
  admin: boolean;
}

const FilmDetailsPage = ({ admin }: FilmDetailsPageProps) => {
  let { films, setFilms } = useContext(FilmsContext);
  console.log(films);
  // const [film, setFilm] = useState<IFilm>();
  let params = useParams<{ id: string }>();

  const film = films.find((item) => item.id === Number(params.id));

  if (film == null) {
    return <div>Loading...</div>;
  }

  if (admin) {
    return <FilmDetailsForAdmin film={film} />;
  } else {
    return <FilmDetailsForUser film={film} />;
  }
};

export default FilmDetailsPage;
