import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";

const key = "&appid=4ae11f107f5df537f8acd62b74030866";
export const fiveDayApiAction = createAsyncThunk("cityname", async (city) => {
  try {
    const res = await axios.get(`${apiUrl}${city}${key}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
   return err.message
  }
});
