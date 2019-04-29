import { combineReducers } from 'redux';
import { weatherReducer } from './reducer.weather';

const rootReducer = combineReducers({
    locationData: weatherReducer
});

export default rootReducer;