import {ROOT_FETCHING, ROOT_FETCH_SUCCESS, ROOT_FETCH_FAIL} from './actions';

const initialState = {
	fetching: false,
	fetchSuccess: false,
	root: null
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case ROOT_FETCHING: {
			return {
				...state,
				fetching: true
			};
		}
		case ROOT_FETCH_SUCCESS: {
			return {
				...state,
				fetching: false,
				fetchSuccess: true,
				root: action.root
			};
		}
		case ROOT_FETCH_FAIL: {
			return {
				...state,
				fetching: false,
				fetchSuccess: false
			};
		}

		default: {
			return state;
		}
	}
};

reducers.reducer = 'root';

export default reducers;