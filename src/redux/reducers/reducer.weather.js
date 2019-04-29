import {
    GET_WEATHER,
    GET_WEATHER_ERROR
} from '../types';

const initialState = {
    weather: null,
    name: null,
    main: null,
    wind: null,
    error: ''
};

export const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_WEATHER:
            return {
                weather: action.payload.weather,
                main: action.payload.main,
                wind: action.payload.wind,
                name: action.payload.name,
                error: ''
            };
        case GET_WEATHER_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

