import {ROOT_FETCHING, ROOT_FETCH_SUCCESS, ROOT_FETCH_FAIL} from './actions';

const reducers = (state = [], action) => {
	switch (action.type) {
		case ROOT_FETCHING: {
			return {
				fetching: true
			};
		}
		case ROOT_FETCH_SUCCESS: {
			return {
				fetching: false,
				fetchSuccess: true,
				root: action.root
			};
		}
		case ROOT_FETCH_FAIL: {
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

reducers.reducer = 'root';

export default reducers;