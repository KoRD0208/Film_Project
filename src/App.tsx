import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/HomePage/Home";
import FilmsPage from "./components/FilmsPage/FilmsPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Alert } from "@mui/material";
import FilmDetailsPage from "./components/FilmsPage/FilmDetailsPage";
import Auth from "./components/AuthPage/Auth";
import Register from "./components/AuthPage/Register";
import LogOut from "./components/AuthPage/LogOut";
import Profile from "./components/AuthPage/Profile";
import CreateNewFilm from "./components/FilmsPage/CreateNewFilm";
import usePullStorage from "./components/pullStorage";
import FilmsContext from "./FilmsContext";
import { IFilm, User } from "./types";
import { getFilms } from "./components/filmsServices";
import WelcomePage from "./components/WelcomePage";
import UsersContext from "./UsersContext";
import { getUsers } from "./components/usersServices";

const keepAuth = {
  auth: false,
};

function App() {
  const [films, setFilms] = useState<IFilm[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isAuthorized, setAuth] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const { authStatus, adminStatus } = usePullStorage(keepAuth);

  useEffect(() => {
    async function getData() {
      setFilms(await getFilms());
      setUsers(await getUsers());
    }

    setAdmin(adminStatus?.isAdmin || false);
    setAuth(authStatus?.auth || false);

    getData();
  }, []);

  function handleLog(valueAuth: boolean, valueAdmin = false) {
    keepAuth.auth = valueAuth;
    setAuth(keepAuth.auth);
    setAdmin(valueAdmin);
    localStorage.setItem("isAuthorized", JSON.stringify(keepAuth));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <FilmsContext.Provider value={{ films, setFilms }}>
          <UsersContext.Provider value={{ users, setUsers }}>
            <Header authorized={isAuthorized} />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route
                path="home"
                element={
                  isAuthorized ? (
                    <Home />
                  ) : (
                    <Alert severity="warning">You are not authorized</Alert>
                  )
                }
              />
              <Route path="films" element={<FilmsPage admin={isAdmin} />} />
              <Route
                path="films/:id"
                element={<FilmDetailsPage admin={isAdmin} />}
              />
              <Route
                path="films/newfilm"
                element={isAdmin ? <CreateNewFilm /> : <Navigate to="/auth" />}
              />
              <Route path="auth" element={<Auth handleAuth={handleLog} />} />
              <Route
                path="register"
                element={<Register handle={handleLog} />}
              />
              <Route path="logout" element={<LogOut handle={handleLog} />} />
              <Route path="profile" element={<Profile />} />
              <Route
                path="*"
                element={<Alert severity="error">Page is not found</Alert>}
              />
            </Routes>
          </UsersContext.Provider>
        </FilmsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
