import reducers from './reducers';
import {
	PLANETS_FETCHING,
	PLANETS_FETCH_SUCCESS,
	PLANETS_FETCH_FAIL,
	SET_CURRENT_PLANET
} from './actions';


describe('planets reducers', () => {
	it('PLANET_FETCHING : new state should has fetching "true"', () => {
		const oldState = {
			fetching: false,
			fetchSuccess: true,
			planetsCollection: {},
			currentPlanet: null
		};
		expect(reducers(oldState, {type: PLANETS_FETCHING})).toEqual({
			...oldState,
			fetching: true
		});
	});
	it('PLANETS_FETCH_SUCCESS : new state should has fetching "false", fetchSuccess "true" and planetsCollection', () => {
		const oldState = {
			fetching: true,
			fetchSuccess: false,
			planetsCollection: null,
			currentPlanet: null
		};
		expect(reducers(oldState, {
			type: PLANETS_FETCH_SUCCESS,
			planetsCollection: {}
		})).toEqual({
			...oldState,
			fetching: false,
			fetchSuccess: true,
			planetsCollection: {}
		});
	});
	it('PLANETS_FETCH_FAIL : new state should has fetching "false", fetchSuccess "false" and planetsCollection', () => {
		const oldState = {
			fetching: true,
			fetchSuccess: true,
			planetsCollection: null,
			currentPlanet: null
		};
		expect(reducers(oldState, {
			type: PLANETS_FETCH_FAIL,
			planetsCollection: {}
		})).toEqual({
			...oldState,
			fetching: false,
			fetchSuccess: false,
		});
	});
	it('SET_CURRENT_PLANET : new state should has fetching "false", fetchSuccess "true" and currentPlanet', () => {
		const oldState = {
			fetching: true,
			fetchSuccess: false,
			planetsCollection: null,
			currentPlanet: null
		};
		expect(reducers(oldState, {
			type: SET_CURRENT_PLANET,
			planet: {}
		})).toEqual({
			...oldState,
			fetching: false,
			fetchSuccess: true,
			currentPlanet: {}
		});
	});
});