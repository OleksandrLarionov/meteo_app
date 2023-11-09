import { combineReducers, configureStore } from '@reduxjs/toolkit';
import meteoDataReducer from '../reducers/countryMeteoData';
import fourDataDaysReducer from '../reducers/forecastData';

const allMeteoDataReducers = combineReducers({
	countryMeteoData: meteoDataReducer,
	forecastData: fourDataDaysReducer,
});
const store = configureStore({
	reducer: allMeteoDataReducers,
});

export default store;
