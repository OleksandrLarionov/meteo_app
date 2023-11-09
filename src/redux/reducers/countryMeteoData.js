import { GET_CITY_DATA } from '../action';

const initialState = {
	dataCity: [],
};

const meteoDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CITY_DATA:
			return {
				...state,
				dataCity: [action.payload],
			};

		default:
			return state;
	}
};

export default meteoDataReducer;
