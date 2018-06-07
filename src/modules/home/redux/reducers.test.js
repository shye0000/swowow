import reducers from './reducers';
import {
	ROOT_FETCHING,
	ROOT_FETCH_SUCCESS,
	ROOT_FETCH_FAIL
} from './actions';


describe('planets reducers', () => {
	it('ROOT_FETCHING : new state should has fetching "true"', () => {
		const oldState = {
			fetching: false,
			fetchSuccess: true,
			planetsCollection: {},
			currentPlanet: null
		};
		expect(reducers(oldState, {type: ROOT_FETCHING})).toEqual({
			...oldState,
			fetching: true
		});
	});
	it('ROOT_FETCH_SUCCESS : new state should has fetching "false", fetchSuccess "true" and new root', () => {
		const oldState = {
			fetching: true,
			fetchSuccess: false,
			root: null
		};
		expect(reducers(oldState, {
			type: ROOT_FETCH_SUCCESS,
			root: {}
		})).toEqual({
			...oldState,
			fetching: false,
			fetchSuccess: true,
			root: {}
		});
	});
	it('ROOT_FETCH_FAIL : new state should has fetching "false", fetchSuccess "false"', () => {
		const oldState = {
			fetching: true,
			fetchSuccess: true,
			root: {}
		};
		expect(reducers(oldState, {
			type: ROOT_FETCH_FAIL,
			root: {}
		})).toEqual({
			...oldState,
			fetching: false,
			fetchSuccess: false,
		});
	});
});