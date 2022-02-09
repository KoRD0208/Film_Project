import React, {useState} from 'react';
import {FilmT} from "../../types";

const UseFilmInfo = (initialState) => {
    const [title, setTitle] = useState<string>(initialState.title || '');
    const [director, setDirector] = useState<string>(initialState.director || '');
    const [description, setDescription] = useState<string>(initialState.description || '');
    const [duration, setDuration] = useState<string>(initialState.description || '');
    const [price, setPrice] = useState<string>(initialState.price || '');
    const [films, setFilms] = useState<FilmT[]>([]);

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
        films,
        setFilms
    }
};

export default UseFilmInfo;
