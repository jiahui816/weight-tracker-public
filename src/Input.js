import React, { useState } from "react";
import "./Input.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import db from "./firebase";

function Input() {
  const [weight, setWeight] = useState();
  const date = new Date();
  const todayDate = date.toLocaleDateString();

  const addWeight = (e) => {
    e.preventDefault();
    db.collection("Health").add({
      weight: weight,
      timestampp: todayDate,
    });
    setWeight("");
    alert("Weight Added Successfully for Today !!");
  };
  return (
    <div className="input">
      <div className="input__weight">
        <TextField
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          id="outlined-basic"
          label="Weight"
          variant="outlined"
        />
      </div>
      <div className="input__submit">
        <Button onClick={addWeight} variant="contained" color="primary">
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

export default Input;
