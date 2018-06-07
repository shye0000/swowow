import reducers from './reducers';
import {SPEED_UP, SLOW_DOWN} from './actions';

const globalReducers = reducers.global;

describe('global reducers', () => {
	it('should return the initial state', () => {
		expect(globalReducers(undefined, {})).toEqual({speedUp: false});
	});
	it('should return the state with speedUp as true', () => {
		expect(globalReducers(undefined, {type: SPEED_UP})).toEqual({speedUp: true});
	});
	it('should return the state with speedUp as false', () => {
		expect(globalReducers(undefined, {type: SLOW_DOWN})).toEqual({speedUp: false});
	});
});