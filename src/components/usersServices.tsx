import React from "react";

const SERVER_URL = "http://localhost:4000/users";

export async function getUsers() {
  const data = await fetch(SERVER_URL);
  return await data.json();
}
