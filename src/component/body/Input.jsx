import { TextField } from "@mui/material";
import React from "react";

export default function Input(props) {
  return (
    <div className="text-input">
      <label>{props.label}</label>
      <br />
      <TextField
        placeholder={props.placeholder}
        inputProps={{ inputMode: props.datatype }}
      />
    </div>
  );
}
