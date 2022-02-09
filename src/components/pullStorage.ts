import React from 'react';
import {User} from "../types";
import {usersData} from "./AuthPage/Auth";
import {getFilms} from "./filmsServices";
import {data} from "../films";

const usePullStorage = (auth) => {
    const authStatus = JSON.parse(localStorage.getItem("isAuthorized"));
    const adminStatus = JSON.parse(localStorage.getItem("authorizedUser"));
    const usersFromLocalStorage: User[] = JSON.parse(localStorage.getItem("users"));
    console.log(authStatus);
    if(authStatus === null) {
        localStorage.setItem("isAuthorized", JSON.stringify(auth));
    }
    if(usersFromLocalStorage === null) {
        localStorage.setItem("users", JSON.stringify(usersData));
    }
    if(adminStatus === null) {
        localStorage.setItem("authorizedUser", JSON.stringify({}));
    }
    if(getFilms() === null) {
        localStorage.setItem("films", JSON.stringify(data))
        console.log('True');
    }

    return {
        authStatus,
        adminStatus
    }
};

export default usePullStorage;