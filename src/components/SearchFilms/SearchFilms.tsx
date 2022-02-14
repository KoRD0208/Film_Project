import React from "react";
import { TextField } from "@mui/material";

const SearchFilms = ({ value, changeState }) => {
  function handleChange(e) {
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
