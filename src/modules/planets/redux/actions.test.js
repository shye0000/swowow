import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {fetchPlanets, fetchPlanet} from './actions';
import {
	PLANETS_FETCH_SUCCESS,
	PLANETS_FETCHING,
	PLANET_BASE_URL,
	SET_CURRENT_PLANET
} from './actions';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch root action', () => {
	afterEach(() => {
		fetchMock.reset();
		fetchMock.restore();
	});

	it('creates PLANETS_FETCH_SUCCESS when fetching planets has been done', () => {

		const expectedCurrentPage = 1;

		const expectedPlanetsCollection = {
			count: 61,
			next: 'https://www.swapi.tech/api/planets/?page=2',
			previous: null,
			results:[]
		};

		const expectedActions = [
			{ type: PLANETS_FETCHING },
			{
				type: PLANETS_FETCH_SUCCESS,
				planetsCollection: expectedPlanetsCollection,
				currentPage: expectedCurrentPage,
			}
		];
		const store = mockStore({ planets: [] });

		fetchMock.getOnce(`${PLANET_BASE_URL}?page=${expectedCurrentPage}`, {
			body: expectedPlanetsCollection,
			headers: { 'content-type': 'application/json' }
		});
		return store.dispatch(fetchPlanets()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});

	});

	it('Make sure that the page number is the same of the page parameter passed in fetchPlanets', () => {

		const expectedPlanetsCollection = {
			count: 61,
			next: 'https://www.swapi.tech/api/planets/?page=2',
			previous: null,
			results:[]
		};

		const expectedActions = [
			{ type: PLANETS_FETCHING },
			{ type: PLANETS_FETCH_SUCCESS, planetsCollection: expectedPlanetsCollection }
		];
		const store = mockStore({ planets: [] });

		fetchMock.getOnce(`${PLANET_BASE_URL}?page=2`, {
			body: expectedPlanetsCollection,
			headers: { 'content-type': 'application/json' }
		});
		store.dispatch(fetchPlanets(2)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});

	});

	it('creates SET_CURRENT_PLANET when fetching planets has been done', () => {

		const expectedPlanet = {
			name: 'planet name'
		};

		const expectedActions = [
			{ type: PLANETS_FETCHING },
			{ type: SET_CURRENT_PLANET, planet: expectedPlanet }
		];
		const store = mockStore({ planets: [] });

		fetchMock.getOnce(`${PLANET_BASE_URL}/1`, {
			body: expectedPlanet,
			headers: { 'content-type': 'application/json' }
		});
		return store.dispatch(fetchPlanet(`${PLANET_BASE_URL}/1`)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});

	});

});