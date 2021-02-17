import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./BMI.css";

function BMI() {
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");

  const calcBMI = () => {
    setBMI((weight / 2.89).toFixed(2));
    setWeight("");
  };

  return (
    <div className="bmi">
      <h1>BMI Calculator</h1>
      <div className="bmi__input">
        <TextField
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          id="outlined-basic"
          label="Weight"
          variant="outlined"
        />
        <Button onClick={calcBMI} variant="contained" color="primary">
          SUBMIT
        </Button>
      </div>

      <div className="bmi__result">
        <h2>Your Current BMI is: {bmi}</h2>
      </div>
    </div>
  );
}

export default BMI;
