import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {fetchRoot} from './actions';
import {ROOT_FETCH_SUCCESS, ROOT_FETCHING} from './actions';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch root action', () => {
	afterEach(() => {
		fetchMock.reset();
		fetchMock.restore();
	});

	it('creates ROOT_FETCH_SUCCESS when fetching root has been done', () => {
		fetchMock.getOnce('https://www.swapi.tech/api/', {
			body: {
				'resource_1': 'url_1',
				'resource_2': 'url_2',
			},
			headers: { 'content-type': 'application/json' }
		});

		const expectedActions = [
			{ type: ROOT_FETCHING },
			{ type: ROOT_FETCH_SUCCESS,
				root: {
					'resource_1': 'url_1',
					'resource_2': 'url_2',
				}
			}
		];
		const store = mockStore({ root: [] });
		return store.dispatch(fetchRoot()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});