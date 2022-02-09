import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const FilmDetailsForUser = ({film}: any) => {
    return (
        <div style={{display: "flex"}}>
            <Card
                sx={{
                    margin: 2,
                    width: "540px",
                }}
            >
                <CardContent>
                    <CardMedia
                        component="img"
                        height="300"
                        src={film.img}
                        alt="Paella dish"
                    />
                    <Typography gutterBottom variant="h5" component="div" sx={{height: 80}}>
                        {film.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{height: 80}}>
                        Director: <br />
                        {film.director}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{height: 80}}>
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