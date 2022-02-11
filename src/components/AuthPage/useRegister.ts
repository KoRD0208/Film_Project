import React, { useState } from "react";
import { User } from "../../types";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

function useRegister(handle) {
  const { email, setEmail, password, setPassword, handleChange } = useAuth();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(false);

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const navigate = useNavigate();

  function emailHandler(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setEmail(e.target.value);
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        String(e.target.value)
      )
    ) {
      setEmailErr(true);
      console.log("NO");
    } else {
      setEmailErr(false);
    }
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 4) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
  }

  function register(e: React.SyntheticEvent) {
    e.preventDefault();

    users.forEach((user) => {
      if (user.email === email || user.username === username) {
        setError(true);
        console.log("This user with same email and username is existed");
      } else if (passwordErr) {
        console.log("Password error");
      } else if (emailErr) {
        console.log("Email error");
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
          },
        ];
        setUsers(newUsers);
        handle(true);
        localStorage.setItem(
          "authorizedUser",
          JSON.stringify(newUsers[newUsers.length - 1])
        );
        localStorage.setItem("users", JSON.stringify(newUsers));
        navigate("/profile");
      }
    });
  }

  return {
    email,
    password,
    name,
    setName,
    username,
    setUsername,
    users,
    setUsers,
    error,
    emailErr,
    passwordErr,
    handleChange,
    emailHandler,
    passwordHandler,
    register,
  };
}

export default useRegister;
