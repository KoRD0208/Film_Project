import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, CardMedia, TextField, Typography} from "@mui/material";
import {User} from "../../types";
import {FilmT} from "../../types";
import {getFilms} from "../filmsServices";
import useFilmInfo from "./useFilmInfo";
import classes from "./styles/Textarea.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const FilmDetailsForAdmin = ({film}: any) => {
    const {
        title,
        setTitle,
        director,
        setDirector,
        description,
        setDescription,
        price,
        setPrice,
        films,
        setFilms
    } = useFilmInfo(film);

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, hook: any) {
        hook(e.target.value);
    }

    useEffect(() => {
        let filmsFromLocalStorage: FilmT[] = getFilms();
        setFilms(filmsFromLocalStorage);

    }, []);

    function refactorFilm() {
        console.log("Applied")
        setFilms((oldFilms) => {
            oldFilms.forEach((item) => {
                if(item._id === film._id) {
                    item.title = title;
                    item.director = director;
                    item.description = description;
                    item.price = Number(price);
                    console.log(oldFilms);

                }
            })
            console.log(film)
            localStorage.setItem("films", JSON.stringify([...oldFilms]));
            return [...oldFilms];
        })
    }



    return (
        <div>
            <div style={{display: "flex"}}>
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
                        <TextField value={title} onChange={(e) => handleChange(e, setTitle)}/>
                        <TextField value={director} onChange={(e) => handleChange(e, setDirector)}/>
                        <TextField value={price} onChange={(e) => handleChange(e, setPrice)}/>
                    </CardContent>
                    </Card>
                <div style={{display:"flex", flexDirection: "column", marginTop: "30px"}}>
                    <textarea className={classes.description} value={description} onChange={(e) => handleChange(e, setDescription)}/>
                    <Button variant="outlined" onClick={refactorFilm} style={{color: "rgb(24, 118, 210)"}}>
                        Apply
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default FilmDetailsForAdmin;