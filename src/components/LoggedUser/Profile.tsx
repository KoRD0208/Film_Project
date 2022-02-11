import React, { useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("authorizedUser"));

  if (JSON.parse(localStorage.getItem("isAuthorized")).auth) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>My profile</h1>
        <Card
          sx={{
            margin: 2,
          }}
        >
          <CardContent sx={{ position: "relative" }}>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ height: 80 }}
            >
              Email: <br />
              {user.email}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ height: 80 }}
            >
              Username: <br />
              {user.username}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return <Navigate to="/auth" />;
  }
};

export default Profile;
