import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const LogOut = ({handle}: any) => {
    const navigate = useNavigate();
    function logout() {
        localStorage.setItem("authorizedUser", JSON.stringify({}));
        handle(false);
        navigate("/auth");
    }

    return (
        <div style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%%", height: "400px"} }>
            <h1>Are you want to Log out?</h1>
            <Button variant="outlined" sx={{width: "100px"}} onClick={logout}>Yes</Button>
        </div>
    );
};

export default LogOut;