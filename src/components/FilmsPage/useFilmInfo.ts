import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import FilmsContext from "../../contexts/FilmsContext";
import { IFilm } from "../../types";

const UseFilmInfo = (initialState?: IFilm) => {
  const [title, setTitle] = useState<string>(initialState?.title || "");
  const [director, setDirector] = useState<string>(
    initialState?.director || ""
  );
  const [description, setDescription] = useState<string>(
    initialState?.description || ""
  );
  const [duration, setDuration] = useState<string>(
    initialState?.description || ""
  );
  const [price, setPrice] = useState<string>(initialState?.price || "");
  return {
    title,
    setTitle,
    director,
    setDirector,
    description,
    setDescription,
    duration,
    setDuration,
    price,
    setPrice,
  };
};

export default UseFilmInfo;
