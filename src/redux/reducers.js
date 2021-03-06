import {routerReducer} from 'react-router-redux';
import {SPEED_UP, SLOW_DOWN} from './actions';

const initialState = { speedUp: false };

const globalReducers = (state = initialState, action) => {
	switch (action.type) {
		case SPEED_UP: {
			return {
				speedUp: true
			};
		}
		case SLOW_DOWN: {
			return {
				speedUp: false
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