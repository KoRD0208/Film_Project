import React, {useEffect, useState} from 'react';
import {Alert, Button, TextField} from "@mui/material";
import useAuth from "./useAuth";
import {User} from "../../types";
import {Link, useNavigate} from "react-router-dom";

const Register = ({handle}) => {
    const {email, setEmail, password, setPassword, handleChange} = useAuth();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let usersFromLocalStorage: User[] = JSON.parse(localStorage.getItem("users"));
        setUsers(usersFromLocalStorage)
    }, [])

    function register(e: any) {
        e.preventDefault();
        users.forEach(user => {
            if(user.email === email || user.username === username) {
                console.log("This user with same email and username is existed");
                setError(true);
            } else {
                const newUsers = [
                    ...users,
                    {
                        id: Date.now(),
                        name,
                        username,
                        email,
                        password,
                        isAdmin: false,
                    }
                ];
                setUsers(newUsers)
                handle(true);
                localStorage.setItem("authorizedUser", JSON.stringify(newUsers[newUsers.length - 1]));
                localStorage.setItem("users", JSON.stringify(newUsers));
                navigate("/profile");
            }
        })

    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Register Form</h2>
            <form onSubmit={register} style={{display: "inline-flex", flexDirection: "column"}}>
                <TextField type="text" label={"Enter your name:"}
                           required={true}
                           placeholder={"Name"}
                           value={name}
                           onChange={(e) => handleChange(e, setName)}
                />
                <TextField
                    required={true}
                    type="text"
                    label={"Enter your username:"}
                    placeholder={"Username"}
                    sx={{marginTop: 2}}
                    value={username}
                    onChange={(e) => handleChange(e, setUsername)}
                />
                <TextField
                    type="text"
                    label={"Enter your e-mail:"}
                    placeholder={"Email"}
                    required={true}
                    sx={{marginTop: 2}}
                    value={email}
                    onChange={(e) => handleChange(e, setEmail)}
                />
                <TextField
                    type="password"
                    label={"Enter your password:"}
                    required={true}
                    placeholder={"Password"}
                    sx={{marginTop: 2}}
                    value={password}
                    onChange={(e) => handleChange(e, setPassword)}
                />
                <Button type="submit">Register</Button>
                {error && <Alert severity="error">User with same email and username is existed</Alert>}
            </form>
            <div>
                Already have an account? <Link to={"/auth"}>Log in!</Link>
            </div>
        </div>
    );
};

export default Register;