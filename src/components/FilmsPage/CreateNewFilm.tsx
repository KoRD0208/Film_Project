import React, { useContext, useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";
import useFilmInfo from "./useFilmInfo";
import { useNavigate } from "react-router-dom";
import { addFilm } from "../../services/filmsServices";
import FilmsContext from "../../contexts/FilmsContext";
import { handleChange } from "../../helpfullFuncs/handleChange";
import { IFilm } from "../../types";

const CreateNewFilm = () => {
  const {
    title,
    setTitle,
    director,
    setDirector,
    description,
    setDescription,
    duration,
    setDuration,
    price,
    setPrice,
  } = useFilmInfo();
  const [imgUrl, setUrl] = useState("");
  const navigate = useNavigate();
  const { setFilms } = useContext(FilmsContext);

  async function create() {
    const newFilm = {
      id: Date.now(),
      title,
      director,
      duration,
      price,
      img: imgUrl,
      featured: false,
      description,
    };
    await addFilm(newFilm);
    setFilms((oldFilms) => [...oldFilms, newFilm]);
    navigate("/films");
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            margin: 2,
            width: "540px",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TextField
              value={imgUrl}
              placeholder="Image url"
              onChange={(e) => handleChange(e, setUrl)}
            />
            <TextField
              value={title}
              placeholder="Title"
              onChange={(e) => handleChange(e, setTitle)}
            />
            <TextField
              value={director}
              placeholder="Director"
              onChange={(e) => handleChange(e, setDirector)}
            />
            <TextField
              value={price}
              placeholder="Price"
              onChange={(e) => handleChange(e, setPrice)}
            />
            <TextField
              value={duration}
              placeholder="Duration"
              onChange={(e) => handleChange(e, setDuration)}
            />
            <textarea
              value={description}
              style={{
                height: "340px",
                border: "none",
                resize: "none",
              }}
              placeholder="Description"
              onChange={(e) => handleChange(e, setDescription)}
            />
            <Button variant="outlined" onClick={create}>
              Create
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateNewFilm;
