import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import FilmDetailsForUser from "./FilmDetailsForUser";
import FilmDetailsForAdmin from "./FilmDetailsForAdmin";
import FilmsContext from "../../FilmsContext";
import { getFilms } from "../filmsServices";

const FilmDetailsPage = ({ admin }: any) => {
  let { films, setFilms } = useContext(FilmsContext);
  useEffect(() => {
    async function getData() {}

    getData();
  }, []);

  let params = useParams<{ id: string }>();
  console.log(params);
  let film = films.find((item: any) => item.id === Number(params.id));
  console.log(film);
  if (admin) {
    return <FilmDetailsForAdmin film={film} />;
  } else {
    return <FilmDetailsForUser film={film} />;
  }
};

export default FilmDetailsPage;
