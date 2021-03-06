import {
	PLANETS_FETCHING,
	PLANETS_FETCH_SUCCESS,
	PLANETS_FETCH_FAIL,
	SET_CURRENT_PLANET
} from './actions';

const initialState = {
	fetching: false,
	fetchSuccess: false,
	currentPage: 1,
	planetsCollection: null,
	currentPlanet: null,
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case PLANETS_FETCHING: {
			return {
				...state,
				fetching: true,
			};
		}
		case PLANETS_FETCH_SUCCESS: {
			const {currentPage, planetsCollection} = action;
			return {
				...state,
				fetching: false,
				fetchSuccess: true,
				planetsCollection,
				currentPage,
			};
		}
		case PLANETS_FETCH_FAIL: {
			return {
				...state,
				fetching: false,
				fetchSuccess: false
			};
		}
		case SET_CURRENT_PLANET: {
			return {
				...state,
				fetching: false,
				fetchSuccess: true,
				currentPlanet: action.planet
			};
		}
		default: {
			return state;
		}
	}
};

reducers.reducer = 'planets';

export default reducers;