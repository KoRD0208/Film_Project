import React, { createContext } from "react";
import { IFilm } from "./types";

interface IFilmsContext {
  films: IFilm[];
  setFilms: React.Dispatch<React.SetStateAction<IFilm[]>>;
}

const FilmsContext = createContext<IFilmsContext>({
  films: [],
  setFilms: (films) => {},
});

export default FilmsContext;
