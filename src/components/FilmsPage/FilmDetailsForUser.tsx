import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { getFilms } from "../filmsServices";
import { IFilm } from "../../types";

interface FilmDetailsForUserProps {
  film: IFilm;
}

const FilmDetailsForUser = ({ film }: FilmDetailsForUserProps) => {
  return (
    <div style={{ display: "flex" }}>
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
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ minHeight: 80 }}
          >
            {film.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ minHeight: 80 }}
          >
            Director: <br />
            {film.director}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ minHeight: 80 }}
          >
            Price: <br />
            {film.price}
          </Typography>
        </CardContent>
      </Card>
      <Typography gutterBottom variant="h6" component="div">
        Description: <br />
        {film.description}
      </Typography>
    </div>
  );
};

export default FilmDetailsForUser;
