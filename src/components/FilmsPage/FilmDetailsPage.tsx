import React from 'react';
import {Link, useParams} from "react-router-dom";
import FilmDetailsForUser from "./FilmDetailsForUser";
import FilmDetailsForAdmin from "./FilmDetailsForAdmin";
import {getFilms} from "../filmsServices";

const FilmDetailsPage = ({admin}: any) => {
    let params = useParams<{id: string}>();
    let film: any = getFilms().find((item: any) => item._id === Number(params.id))
    if(admin) {
        return <FilmDetailsForAdmin film={film}/>
    } else {
        return <FilmDetailsForUser film={film}/>
    }
};

export default FilmDetailsPage;