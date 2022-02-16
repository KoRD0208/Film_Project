import React from "react";
import { User } from "../types";

const SERVER_URL = "http://localhost:4000/users";

export async function getUsers() {
  const data = await fetch(SERVER_URL);
  return await data.json();
}

export async function updateUser(updatedUser: User) {
  await fetch(`${SERVER_URL}/${updatedUser.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
