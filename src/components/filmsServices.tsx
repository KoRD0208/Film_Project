import React from "react";
import { IFilm } from "../types";

const SERVER_URL = "http://localhost:4000/films";

export async function getFilms(): Promise<IFilm[]> {
  const data = await fetch(SERVER_URL);
  return await data.json();
}

export function getFilmsFromLS() {
  return JSON.parse(localStorage.getItem("films"));
}

export async function updateFilms(updatedFilms) {
  await fetch(SERVER_URL, {
    method: "POST",
    body: JSON.stringify(updatedFilms),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function deleteFilm(id: number) {
  await fetch(`${SERVER_URL}/${id}`, {
    method: "DELETE",
  });
}

export async function editFilm(updatedFilm: IFilm) {
  await fetch(`${SERVER_URL}/${updatedFilm.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedFilm),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function addFilm(newFilm: IFilm) {
  await fetch(SERVER_URL, {
    method: "POST",
    body: JSON.stringify(newFilm),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
