import React, { useEffect } from "react";
import { Alert, Button, TextField } from "@mui/material";
import { User } from "../../types";
import { Link } from "react-router-dom";
import useRegister from "./useRegister";

const Register = ({ handle }) => {
  const {
    email,
    password,
    name,
    setName,
    username,
    setUsername,
    setUsers,
    error,
    emailErr,
    passwordErr,
    handleChange,
    emailHandler,
    passwordHandler,
    register,
  } = useRegister(handle);

  useEffect(() => {
    let usersFromLocalStorage: User[] = JSON.parse(
      localStorage.getItem("users")
    );
    setUsers(usersFromLocalStorage);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Register Form</h2>
      <form
        onSubmit={register}
        style={{
          display: "inline-flex",
          flexDirection: "column",
          width: "450px",
        }}
      >
        <TextField
          type="text"
          label={"Enter your name:"}
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
          sx={{ marginTop: 2 }}
          value={username}
          onChange={(e) => handleChange(e, setUsername)}
        />
        <TextField
          type="text"
          label={"Enter your e-mail:"}
          placeholder={"Email"}
          required={true}
          sx={{ marginTop: 2 }}
          value={email}
          onChange={emailHandler}
        />
        <TextField
          type="password"
          label={"Enter your password:"}
          required={true}
          placeholder={"Password"}
          sx={{ marginTop: 2 }}
          value={password}
          onChange={passwordHandler}
        />
        <Button type="submit">Register</Button>
        {error && (
          <Alert severity="error">
            User with same email or username is existed
          </Alert>
        )}
        {passwordErr && (
          <Alert severity="error">Password should be more than 3 symbols</Alert>
        )}
        {emailErr && <Alert severity="error">Email isn't correct</Alert>}
      </form>
      <div>
        Already have an account? <Link to={"/auth"}>Log in!</Link>
      </div>
    </div>
  );
};

export default Register;
