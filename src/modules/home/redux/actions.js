export const ROOT_FETCHING = 'ROOT_FETCHING';
export const ROOT_FETCH_SUCCESS = 'ROOT_FETCH_SUCCESS';
export const ROOT_FETCH_FAIL = 'ROOT_FETCH_FAIL';

export const fetchRoot = () => {
	return (dispatch) => {
		dispatch(rootFetching());
		return fetch('https://swapi.co/api/').then(root => {
			dispatch(rootFetchSuccess());
		}).catch(error => {
			dispatch(rootFetchFail());
			throw(error);
		});
	};
};

const rootFetching = () => {
	return {
		type: ROOT_FETCHING
	};
};
const rootFetchSuccess = () => {
	return {
		type: ROOT_FETCH_SUCCESS
	};
};
const rootFetchFail = () => {
	return {
		type: ROOT_FETCH_FAIL
	};
};