import React, {useEffect} from 'react';
import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import classes from "../FilmsPage/styles/FilmArea.module.css";
import {Link, Navigate} from "react-router-dom";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import DeleteIcon from "@mui/icons-material/Delete";

const Profile = ({isAuthorized}: any) => {

    const user = JSON.parse(localStorage.getItem("authorizedUser"));

    // if(isAuthorized) {
        return (
            <div style={{textAlign: "center"}}>
                <h1 >My profile</h1>
                <Card
                    sx={{
                        margin: 2,

                    }}
                >
                    <CardContent sx={{position: "relative"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {user.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{height: 80}}>
                            Email: <br />
                            {user.email}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{height: 80}}>
                            Username: <br />
                            {user.username}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    // } else{
    //     return <Navigate to="/auth"/>;
    // }
};

export default Profile;