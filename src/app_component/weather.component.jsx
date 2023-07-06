import React from "react";
import "./weather.style.css";

const Weather = (props) => {
  return (
    <div className="container text-light">
      <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-2">
            Current Temperature: {props.temp_celsius}&deg;C
          </h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        {props.description && (
          <h4 className="py-3">
            {props.description.charAt(0).toUpperCase() +
              props.description.slice(1)}{" "}
            should be expected
          </h4>
        )}
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">Min. Temp: {min}&deg;C</span>
        <span className="px-4">Max Temp: {max}&deg;C</span>
      </h3>
    );
  }
}
