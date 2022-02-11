import React, { useState } from "react";
import { handleChange } from "../handleChange";

function useAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleChange,
  };
}

export default useAuth;
