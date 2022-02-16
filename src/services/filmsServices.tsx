import React from "react";
import { IFilm, User } from "../types";
import axios from "axios";

const SERVER_URL = "http://localhost:4000/films";

export async function getFilms() {
  const response = await axios.get<IFilm[]>(SERVER_URL);
  return response.data;
}

// export async function getFilms(): Promise<IFilm[]> {
//   const data = await fetch(SERVER_URL);
//   return await data.json();
// }

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

// export async function addFilm(newFilm: IFilm) {
//   const response = await axios.post(SERVER_URL, {
//     method: "POST",
//     body: newFilm,
//   });
//   return response.data;
// }

export async function addFilm(newFilm: IFilm) {
  await fetch(SERVER_URL, {
    method: "POST",
    body: JSON.stringify(newFilm),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
