import { useState } from "react";
import "./input-css.css";

const Inputs = (props) => {
  //Destructuration

  const { type = "text" } = props;

  const handleChange = (e) => {
    props.updateValue(e.target.value);
  };

  return (
    <div className={`inputs inputs-${type}`}>
      <label htmlFor={props.field}>{props.field}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};

export default Inputs;
