import React, { createContext } from "react";
import { User } from "./types";

interface IUsersContext {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UsersContext = createContext<IUsersContext>({
  users: [],
  setUsers: (users) => {},
});

export default UsersContext;
