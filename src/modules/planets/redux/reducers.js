import {
	PLANETS_FETCHING,
	PLANETS_FETCH_SUCCESS,
	PLANETS_FETCH_FAIL
} from './actions';

const reducers = (state = [], action) => {
	switch (action.type) {
		case PLANETS_FETCHING: {
			return {
				fetching: true,
				planetsCollection: state.planetsCollection
			};
		}
		case PLANETS_FETCH_SUCCESS: {
			return {
				fetching: false,
				fetchSuccess: true,
				planetsCollection: action.planetsCollection
			};
		}
		case PLANETS_FETCH_FAIL: {
			return {
				fetching: false,
				fetchSuccess: false
			};
		}

		default: {
			return state;
		}
	}
};

reducers.reducer = 'planets';

export default reducers;