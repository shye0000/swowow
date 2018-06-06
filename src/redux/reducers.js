import {routerReducer} from 'react-router-redux';
import {PROCESSING, STOP} from './actions';

const globalReducers = (state = [], action) => {
	switch (action.type) {
		case PROCESSING: {
			return {
				processing: true
			};
		}
		case STOP: {
			return {
				processing: false
			};
		}
		default: {
			return state;
		}
	}
};

const appReducers = {
	router: routerReducer,
	global: globalReducers
};

export default appReducers;