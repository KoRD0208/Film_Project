import React, {useEffect, useState} from 'react';
import classes from "./FilmPage.module.css";
import Film from "./Film";
// import {data} from "../../films"
import {Outlet, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import { FilmT } from "../../types";
import {data} from "../../films";
import {getFilms} from "../filmsServices";
import useFilmInfo from "./useFilmInfo";


const FilmsPage = ({admin}: any) => {
    const {
        films,
        setFilms
    } = useFilmInfo([]);
    let navigate = useNavigate();

    useEffect(() => {
        let filmsFromLocalStorage = getFilms();
        // console.log(filmsFromLocalStorage)

        if(filmsFromLocalStorage === null) {
            localStorage.setItem("films", JSON.stringify(data))
            console.log('True');
        }
        setFilms(filmsFromLocalStorage);
    }, [])

    function addFilm() {
        console.log("Yes");
        navigate(`/films/newfilm`);
    }

    function removeFilm(film) {
        const updatedFilms = films.filter(item => item._id !== film._id);
        for(let i = 0; i < updatedFilms.length; i++) {
            updatedFilms[i]._id = i;
        }
        localStorage.setItem("films", JSON.stringify(updatedFilms));
        setFilms(updatedFilms);
    }

    // console.log(films);
    return (
        <div>
            {admin && <Button sx={{margin: 2}} onClick={addFilm} variant="outlined">Add film</Button>}
            <div className={classes.list} style={{display: "flex", flexWrap: "wrap"}}>
                {films.map((film: FilmT) => {
                    return <Film film={film} admin={admin} remove={removeFilm} key={film._id}/>
                })}
            </div>
        </div>

    );
};

export default FilmsPage;