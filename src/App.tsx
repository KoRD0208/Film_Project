import React, {useEffect, useState} from 'react';
import "./App.css"
import Header from "./components/Header/Header";
import Home from "./components/HomePage/Home";
import FilmsPage from "./components/FilmsPage/FilmsPage";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Alert} from "@mui/material";
import FilmDetailsPage from "./components/FilmsPage/FilmDetailsPage";
import Auth from "./components/AuthPage/Auth";
import Register from "./components/AuthPage/Register";
import LogOut from "./components/LoggedUser/LogOut";
import Profile from "./components/LoggedUser/Profile";
import CreateNewFilm from "./components/FilmsPage/CreateNewFilm";
import {data} from "./films";
import {usersData} from "./components/AuthPage/Auth"
import {getFilms} from "./components/filmsServices";
import {User} from "./types";
import usePullStorage from "./components/pullStorage";

const keepAuth = {
    auth: false
}

function App() {
    const [isAuthorized, setAuth] = useState(false);
    const [isAdmin, setAdmin] = useState(false);
    const {authStatus, adminStatus} = usePullStorage(keepAuth);

    useEffect(() => {
        setAdmin(adminStatus?.isAdmin || false);
        setAuth(authStatus?.auth || false);
        }, [])

    function handleLog(valueAuth,  valueAdmin = false) {
        keepAuth.auth = valueAuth;
        setAuth(keepAuth.auth);
        setAdmin(valueAdmin);
        localStorage.setItem("isAuthorized", JSON.stringify(keepAuth));
    }


    return <div className="App">
        <BrowserRouter>
            <Header authorized={isAuthorized}/>
            <Routes>
                <Route  path='/' element={<>Hello</>}/>
                <Route path='home'
                       element={isAuthorized ? <Home/> : <Alert severity="warning">You are not authorized</Alert>}/>
                <Route path='films' element={<FilmsPage admin={isAdmin}/>}/>
                <Route path="films/:id" element={<FilmDetailsPage admin={isAdmin}/>} />
                <Route path="films/newfilm"
                       element={isAdmin ?
                           <CreateNewFilm films={JSON.parse(localStorage.getItem("films"))}/>
                           : <Navigate to="/auth"/>} />
                <Route path="auth" element={<Auth handleAuth={handleLog}/>}/>
                <Route path="register" element={<Register handle={handleLog}/>} />
                <Route path="logout" element={<LogOut handle={handleLog}/>}/>
                <Route path="profile" element={<Profile isAuthorized={isAuthorized} handle={handleLog}/>}/>
                <Route path="*" element={<Alert severity="error">Page is not found</Alert>}/>

            </Routes>
        </BrowserRouter>
    </div>
}

export default App;