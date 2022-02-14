import React, { useContext, useEffect, useState } from "react";
import { Alert, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../types";
import { handleChange } from "../handleChange";
import { getUsers } from "../usersServices";
import UsersContext from "../../UsersContext";

// export const usersData = ;

interface AuthProps {
  handleAuth: (valueAuth: boolean, valueAdmin?: boolean) => void;
}

const Auth = ({ handleAuth }: AuthProps) => {
  const [inputVal, setInputVal] = useState("");
  const [password, setPassword] = useState("");
  const { users } = useContext(UsersContext);
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  console.log(users);

  // useEffect(() => {
  //   async function getData() {
  //     setUsers(await getUsers());
  //   }

  //   getData();
  // }, []);

  function checkUser(e: React.SyntheticEvent) {
    e.preventDefault();
    users.forEach((user) => {
      if (inputVal === user.email && password === user.password) {
        console.log("User is authorized");
        localStorage.setItem("authorizedUser", JSON.stringify(user));
        handleAuth(true, user.isAdmin);
        console.log(user.isAdmin);
        navigate(`/profile`);
      } else {
        setErr(true);
        console.log("User not found");
      }
    });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login Form</h1>
      <form
        onSubmit={checkUser}
        style={{
          display: "inline-flex",
          flexDirection: "column",
          width: "450px",
        }}
      >
        <TextField
          type="text"
          label={"Enter your email:"}
          placeholder={"Email"}
          value={inputVal}
          onChange={(e) => handleChange(e, setInputVal)}
        />
        <TextField
          type="password"
          label={"Enter your password:"}
          placeholder={"Password"}
          sx={{ marginTop: 2 }}
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
        />
        <Button type="submit">Log in</Button>
        {err && (
          <Alert severity="error" sx={{ display: "inline-block" }}>
            Account is not defined
          </Alert>
        )}
      </form>

      <div>
        Don`t have a profile? <Link to={"/register"}>Register now!</Link>
      </div>
    </div>
  );
};

export default Auth;
