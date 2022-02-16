import React from "react";
import { TextField } from "@mui/material";

interface SearchFilmsProps {
  value: string;
  changeState: (value: string) => void;
}

const SearchFilms = ({ value, changeState }: SearchFilmsProps) => {
  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    changeState(e.target.value);
  }

  return (
    <div>
      <TextField
        placeholder="Search film by name"
        value={value}
        onChange={handleChange}
        sx={{ width: "220px", marginLeft: "15px" }}
      />
    </div>
  );
};

export default SearchFilms;
