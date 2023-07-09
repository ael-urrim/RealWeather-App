import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="form">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="input">
          <div className="input-field">
            <input
              type="text"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="button">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

// Display errors if the input field is empty
const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Input fields cannot be empty
    </div>
  );
};

export default Form;
