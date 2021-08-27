import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import HourlyData from "./hourlyData/HourlyData";
import NavBar from "./navbar/NavBar";
import { fiveDayApiAction } from "./store/actions/fiveDayApiAction";
import SearchForm from "./weatherCard/SearchForm";
import WeatherCard from "./weatherCard/WeatherCard";

function App() {
  const [city, setCity] = useState("Dhaka");
  const { apiData, errors } = useSelector((state) => state.fiveDayWeather);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fiveDayApiAction(city));
    e.target.reset();
  };

  return (
    <div className="container-fluid px-0">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/hourlyData/:city/:sun">
             <HourlyData/> 
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-4 offset-md-4">
            <div className="searchForm">
              <SearchForm
                city={city}
                setCity={setCity}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
        {!apiData.list ? <h3>{errors}</h3> : <WeatherCard data={apiData} />}
      </div>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
