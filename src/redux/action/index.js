export const key = '1b473b286344e47b4f21a6bfa60c9db9';
export const keyMeteo = `&appid=${key}`;
export const GET_CITY_DATA = 'GET_CITY_DATA';
export const GET_FORECAST_DATA = 'GET_FORECAST_DATA';
export const RESET_METEO_DATA = 'RESET_METEO_DATA';
export const resetMeteoData = () => ({
	type: RESET_METEO_DATA,
});

export const getMeteoData = (cityName, setCityName, setIsLoading) => {
	return async (dispatch) => {
		const apiCities = `https://api.openweathermap.org/data/2.5/weather?q=`;
		try {
			const cityResponse = await fetch(
				apiCities + cityName + keyMeteo + '&units=metric&lang=en'
			);
			if (cityResponse.ok) {
				const data = await cityResponse.json();
				setTimeout(() => {
					dispatch({
						type: GET_CITY_DATA,
						payload: data,
					});
					setCityName('');
					setIsLoading(false);
				}, 500);
			} else {
				throw new Error('Errore nel download dei dati');
			}
		} catch (error) {
			console.log('Errore', error);
			setIsLoading(false);
		}
	};
};

export const getForecast = (nameOfCity) => {
	const dataFour = `https://api.openweathermap.org/data/2.5/forecast/?q=`;
	return async (dispatch) => {
		try {
			const response = await fetch(dataFour + nameOfCity + keyMeteo + '&units=metric&lang=en');
			if (response.ok) {
				const data = await response.json();
				setTimeout(() => {
					dispatch({
						type: GET_FORECAST_DATA,
						payload: data.list.filter((day, index) => index % 8 === 0),
					});
				}, 500);
			} else {
				throw new Error('Errore nel download dei dati');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
};
