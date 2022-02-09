import React, {useEffect, useState} from 'react';
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {User} from "../../types";

export const usersData = [
    {
        id: 0,
        name: "Oleg",
        username: "im_cool",
        email: "oleg@gmail.com",
        password: "1234",
        isAdmin: true,
    },
    {
        id: 1,
        name: "Oleg",
        username: "im_cool",
        email: "oleg@gmail.com",
        password: "oleg45",
        isAdmin: false,
    },
];






const Auth = ({handleAuth}: any) => {
    const [inputVal, setInputVal] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState<User[]>(JSON.parse(localStorage.getItem("users")) || []);
    const navigate = useNavigate();
    // const [isHidden, setHidden] = useState(true);
    useEffect(() => {

        let usersFromLocalStorage: User[] = JSON.parse(localStorage.getItem("users"));

        console.log(usersFromLocalStorage)
        setUsers(usersFromLocalStorage)
    }, [])

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, hook: any) {
        hook(e.target.value)
    }

    function checkUser(e: any) {
        e.preventDefault();
        users.forEach((user) => {
            if(inputVal === user.email && password === user.password) {
                console.log("User is authorized");
                localStorage.setItem("authorizedUser", JSON.stringify(user));
                handleAuth(true, user.isAdmin);
                console.log(user.isAdmin)
                navigate(`/profile`);
            } else {
                console.log("User not found");
            }
        })
    }


    return (
        <div style={{textAlign: "center"}}>
            <h1>Login Form</h1>
            <form onSubmit={checkUser} style={{display: "inline-flex", flexDirection:"column"}}>
                <TextField type="text" label={"Enter your email:"}
                           placeholder={"Email"}
                           value={inputVal}
                           onChange={(e) => handleChange(e, setInputVal)}/>
                    <TextField
                        type="password"
                        label={"Enter your password:"}
                        placeholder={"Password"}
                        sx={{marginTop: 2}}
                        value={password}
                        onChange={(e) => handleChange(e, setPassword)}/>
                <Button type="submit">Log in</Button>
            </form>
            <div>
                Don`t have a profile? <Link to={"/register"}>Register now!</Link>
            </div>

        </div>
    );
};

export default Auth;