import { useSelector } from "react-redux";
import moment from "moment";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const HourlyData = () => {
  const { apiData } = useSelector((state) => state.fiveDayWeather);
  const data = apiData;
  console.log(data);
  let forcasts = [];
  console.log(forcasts);
  if (data.list) {
    for (let i = 0; i < data.list.length; i++) {
      const temDay = moment(data.list[i].dt_txt).format("LT");
      const Max_temp = (data.list[i].main.temp_max - 273.15).toFixed();
      const Min_temp = (data.list[i].main.temp_min - 273.15).toFixed();
      const Humidity = data.list[i].main.humidity;
      forcasts.push({
        temDay,
        Max_temp,
        Min_temp,
        Humidity,
      });
    }
  }

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5 pt-5">
          <BarChart
            width={500}
            height={300}
            data={forcasts}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={`temDay`} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={`Max_temp`} fill="#8884d8" />
            <Bar dataKey={`Min_temp`} fill="#82ca9d" />
            <Bar dataKey={`Humidity`} fill="#a2b" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default HourlyData;
