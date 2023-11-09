import { GET_FORECAST_DATA } from '../action';

const initialState = {
	dataDays: [],
};

const fourDataDaysReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FORECAST_DATA:
			return {
				...state,
				dataDays: action.payload,
			};

		default:
			return state;
	}
};

export default fourDataDaysReducer;
