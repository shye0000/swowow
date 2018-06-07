import parseObjToQueryString from '../../../utils/parseObjToQueryString';

export const PLANETS_FETCHING = 'PLANETS_FETCHING';
export const PLANETS_FETCH_SUCCESS = 'PLANETS_FETCH_SUCCESS';
export const PLANETS_FETCH_FAIL = 'PLANETS_FETCH_FAIL';

export const PLANET_BASE_URL = 'https://swapi.co/api/planets';

export const fetchPlanets = (page = 1) => {
	return (dispatch) => {
		dispatch(planetsFetching());
		const queryString = parseObjToQueryString({page});
		const url = queryString ? `${PLANET_BASE_URL}?${queryString}` : queryString;
		return fetch(url)
			.then(resp => resp.json())
			.then(planetsCollection => dispatch(planetsFetchSuccess(planetsCollection)))
			.catch(error => {
				dispatch(planetsFetchFail());
				throw(error);
			});
	};
};

const planetsFetching = () => {
	return {
		type: PLANETS_FETCHING
	};
};
const planetsFetchSuccess = (planetsCollection) => {
	return {
		type: PLANETS_FETCH_SUCCESS,
		planetsCollection
	};
};
const planetsFetchFail = () => {
	return {
		type: PLANETS_FETCH_FAIL
	};
};