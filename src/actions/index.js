// Action creators are exactly that—functions that create actions. It's easy to conflate the terms “action” and “action creator”, so do your best to use the proper term. In Redux, action creators simply return an action:

//axios performs ajax requests to supplied url and returns a promis
import axios from 'axios';

const API_KEY = '866fe91df78957a8afcc6f4b6b9842f9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Holds action type to hold consitent value and prevent bugs
export const FETCH_WEATHER = 'FETCH_WEATHER';

//Action creators must always return an action with a type
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);



  return {
   type: FETCH_WEATHER,
   payload: request 
  };
 
}