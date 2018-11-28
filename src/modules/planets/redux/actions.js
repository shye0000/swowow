import parseObjToQueryString from '../../../utils/parseObjToQueryString';

export const PLANETS_FETCHING = 'PLANETS_FETCHING';
export const PLANETS_FETCH_SUCCESS = 'PLANETS_FETCH_SUCCESS';
export const PLANETS_FETCH_FAIL = 'PLANETS_FETCH_FAIL';
export const SET_CURRENT_PLANET = 'SET_CURRENT_PLANET';

export const PLANET_BASE_URL = 'https://swapi.co/api/planets';

export const fetchPlanets = (page = 1) => {
	return (dispatch) => {
		dispatch(planetsFetching());
		const queryString = parseObjToQueryString({page});
		const url = queryString ? `${PLANET_BASE_URL}?${queryString}` : queryString;
		return fetch(url)
			.then(resp => resp.json())
			.then(planetsCollection => dispatch(
				planetsFetchSuccess(planetsCollection, page)
			))
			.catch(error => {
				dispatch(planetsFetchFail());
				throw(error);
			});
	};
};

export const fetchPlanet = (url) => {
	return (dispatch) => {
		if (url) {
			dispatch(planetsFetching());
			return fetch(url)
				.then(resp => resp.json())
				.then(planet => dispatch(setCurrentPlanet(planet)))
				.catch(error => {
					dispatch(planetsFetchFail());
					throw(error);
				});
		}
	};
};

export const setCurrentPlanet = (planet) => {
	return {
		type: SET_CURRENT_PLANET,
		planet
	};
};

const planetsFetching = () => {
	return {
		type: PLANETS_FETCHING
	};
};

const planetsFetchSuccess = (planetsCollection, currentPage) => {
	return {
		type: PLANETS_FETCH_SUCCESS,
		planetsCollection,
		currentPage,
	};
};

const planetsFetchFail = () => {
	return {
		type: PLANETS_FETCH_FAIL
	};
};