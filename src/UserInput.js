import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

// React component always takes only one argument/ property and
//that is "props". Props are read only. props is an object which has refernce to the arguments sent from Calling component.
//export default function UserInput(props) {

//ES6 feature - Object destructure - you can get the underneath properties of
//the props object directly. Using {}. Only one level of destructring.
export default function UserInput({ updateCityProps }) {
  const [localCity, setLocalCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //props.updateCityProps(event.target.value); // when Object destructuring is not used
    updateCityProps(localCity); // when Object destructure is used to get the properties/parameters
  }

  function handleCityChange(event) {
    // String interpolation, ES6 feature
    console.log(`City is updated to ${event.target.value}  `);
    setLocalCity(event.target.value);
  }

  return (
    <div className="UserInput">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            {/*<div className="col-6">  Note: Use when current city Button is also needed*/}
            <input
              type="search"
              placeholder="Enter a city name.."
              className="form-control shadow-sm"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-info shadow-sm"
            />
          </div>
          {/*<div className="col-3">
          <input
            value="Current city"
            className="form-control btn btn-info shadow-sm"
          />
        </div>*/}
        </div>
      </form>
    </div>
  );
}
