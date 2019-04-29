import axios from 'axios';
import {
    GET_WEATHER,
    GET_WEATHER_ERROR
} from './types';
import * as Config from '../config';

const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${Config.API_KEY}`;

export const getWeather = (latitude, longitude) => async dispatch => {
    try {
        const requestUrl = `${URL}&lat=${latitude}&lon=${longitude}`;
        console.log(requestUrl)
        const get = await axios.get(requestUrl);

        dispatch({
            type: GET_WEATHER,
            payload: get.data
        });
    } catch(err) {
        dispatch({
            type: GET_WEATHER_ERROR,
            payload: err.message
        })
    }
}