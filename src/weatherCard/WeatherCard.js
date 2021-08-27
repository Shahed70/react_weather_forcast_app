import moment from "moment";
import sunriseIcon from "../assets/sunrise.svg";
import sunsetIcon from "../assets/sunset.svg";
import hotTemp from "../assets/hot.svg";
import coldTemp from "../assets/cold.svg";
import "./weather.css";
import SkyType from "./SkyType";
import { Link } from "react-router-dom";

const WeatherCard = ({ data }) => {
  const { lat, lon } = data.city.coord;
  const { sunrise, sunset, name, country } = data.city;

  let forcasts = [];

  if (data.list) {
    for (let i = 0; i < data.list.length; i += 8) {
      const temDay = data.list[i].dt_txt;
      const tempMax = data.list[i].main.temp_max;
      const tempMin = data.list[i].main.temp_min;
      const tempHumidity = data.list[i].main.humidity;
      const tempIcon = data.list[i].weather[0].icon;
      const weatherType = data.list[i].weather[0].main;
      const desCription = data.list[i].weather[0].description;
      forcasts.push({
        temDay,
        tempMin,
        tempMax,
        tempHumidity,
        tempIcon,
        weatherType,
        desCription,
      });
    }
  }
  if (!data) {
    return <h1>Loadin...</h1>;
  }

  return (
    <div className="container">
      <div className="row">
        {forcasts.map((forcast, ind) => (
          <div key={ind} className="col-md-4">
            <div className="card-deck">
              <div className="card shadow mb-4">
                <div className="card-body">
                  <h5 className="card-title border p-2">
                    {moment(forcast.temDay).format("dddd")} weather forcast
                  </h5>

                  <div className="weatherType">
                    <SkyType
                      weather={forcast.weatherType}
                      desc={forcast.desCription}
                      temp={forcast.tempMax}
                      icon = {forcast.tempIcon}
                    />
                  </div>

                  <div className="city_info mt-3 mb-4">
                    <Link
                      className="text-decoration-none"
                      to={`/hourlyData/${name}/${country}`}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Click to get hourly data"
                    >
                      <h3>
                        {name},{country}
                      </h3>
                    </Link>
                    <div className="d-flex justify-content-between">
                      <span>Lat: {lat}</span>
                      <span>Lon: {lon}</span>
                    </div>
                  </div>
                  <h5 className="temp_info">Temperature info</h5>
                  <hr />

                  <div className="card-text d-flex justify-content-center mt-4">
                    <p className="mx-5">
                      <span>High temp</span>
                      <img
                        style={{ width: 30, height: 30 }}
                        src={hotTemp}
                        alt=""
                      />
                    </p>
                    <p>
                      {(forcast.tempMax - 273.15).toFixed(2)}
                      <sup>0</sup>C
                    </p>
                  </div>
                  <div className="card-text d-flex justify-content-center">
                    <p className="mx-5">
                      <span>Low temp</span>
                      <img
                        style={{ width: 30, height: 30 }}
                        src={coldTemp}
                        alt=""
                      />
                    </p>
                    <p>
                      {(forcast.tempMin - 273.15).toFixed(2)}
                      <sup>0</sup>C
                    </p>
                  </div>

                  <div className="d-flex justify-content-center">
                    <p className="mx-4">
                      <img
                        style={{ width: 40, height: 40 }}
                        src={sunriseIcon}
                        alt=""
                      />
                      <span className="ml-2">
                        {moment(sunrise).format("LT")}
                      </span>
                      <span className="ml-5 d-block">Sunrise</span>
                    </p>
                    <p>
                      <img
                        style={{ width: 40, height: 40 }}
                        src={sunsetIcon}
                        alt=""
                      />
                      <span className="ml-2">
                        {moment(sunset).format("LT")}
                      </span>
                      <span className="ml-5 d-block">Sunrset</span>
                    </p>
                  </div>
                  <div className="humidity d-flex justify-content-between">
                    <p>Humidity {forcast.tempHumidity}</p>
                    <Link  className="btn btn-primary" to={`/hourlyData/${name}/${country}`}>
                      Get Hourly Forcast
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
