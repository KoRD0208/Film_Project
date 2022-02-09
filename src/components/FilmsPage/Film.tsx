import React from 'react';
import {Card, CardContent, Typography, Button, CardMedia} from "@mui/material";
import {Link} from "react-router-dom";
import classes from "./styles/FilmArea.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

// 255 103 0

const Film = ({film, admin, remove}: any) => {
    return (
        <Card
            sx={{
                margin: 2,
                width: "280px",
                overflow: "initial"
            }}
        >
            <CardContent sx={{position: "relative"}}>
                <CardMedia
                    component="img"
                    height="300"
                    src={film.img}
                    alt="Paella dish"
                />
                <span className={classes.price}>{film.price}$</span>
                <Typography gutterBottom variant="h5" component="div" sx={{height: 80, textAlign: "center", fontWeight: 700}}>
                    {film.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{height: 80}}>
                    Director: <br />
                    {film.director}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{height: 80}}>
                    Duration: <br />
                    {film.duration} minutes
                </Typography>
                {admin && <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button>
                        <Link to={`/films/${film._id}`} style={{textDecoration: "none", color: "rgb(24, 118, 210)"}}>
                            <ReadMoreIcon sx={{position: "relative", top: "6px"}}/>More
                        </Link>
                    </Button>
                    <Button onClick={() => remove(film)} style={{color: "rgb(228, 96, 73)"}}>
                        <DeleteIcon/>
                        Remove
                    </Button>
                </div>}

            </CardContent>
        </Card>
    );
};

export default Film;