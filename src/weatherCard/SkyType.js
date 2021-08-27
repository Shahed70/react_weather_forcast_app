import React from "react";
import cloud from "../assets/cloud.svg";
import sun from "../assets/sun.svg";
import rain from "../assets/rainy.svg";
const SkyType = ({ temp, weather, desc, icon }) => {
  if (weather) {
    if (weather === "Rain") {
      return (
        <div className="d-flex justify-content-around">
          <p className="mt-5">
            <span>
              {(temp - 273.15).toFixed(2)}
              <sup>0</sup> |{" "}
            </span>
            {desc}
          </p>
          <p>
            <img style={{ width: 100, height: "auto" }} src={rain} alt="" />
          </p>
        </div>
      );
    }
    if (weather === "Clouds") {
      return (
        <div className="d-flex justify-content-around">
          <p className="mt-5">
            <span>
              {(temp - 273.15).toFixed(2)}
              <sup>0</sup> |{" "}
            </span>
            {desc}
          </p>
          <img style={{ width: 100, height: "auto" }} src={cloud} alt="" />
        </div>
      );
    }
    if (weather === "Clear") {
      <div className="d-flex justify-content-around">
        <p className="mt-5">
          <span>
            {(temp - 273.15).toFixed(2)}
            <sup>0</sup> |{" "}
          </span>
          {desc}
        </p>
        <img style={{ width: 100, height: "auto" }} src={sun} alt="" />
      </div>;
    } 

    if(weather !== "Rain" | "Clear" | "Clouds") {
      <div className="d-flex justify-content-around">
        <p className="mt-5">
          <span>
            {(temp - 273.15).toFixed(2)}
            <sup>0</sup> |
          </span>
          {desc}
        </p>
        <img style={{ width: 100, height: "auto" }} src={icon} alt="" />
      </div>;
    }
  }
  return <div></div>;
};

export default SkyType;
