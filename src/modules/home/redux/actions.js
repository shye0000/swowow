export const ROOT_FETCHING = 'ROOT_FETCHING';
export const ROOT_FETCH_SUCCESS = 'ROOT_FETCH_SUCCESS';
export const ROOT_FETCH_FAIL = 'ROOT_FETCH_FAIL';

export const fetchRoot = () => {
	return (dispatch) => {
		dispatch(rootFetching());
		return fetch('https://swapi.co/api/')
			.then(resp => resp.json())
			.then((root) => dispatch(rootFetchSuccess(root)))
			.catch(error => {
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

const rootFetchSuccess = (root) => {
	return {
		type: ROOT_FETCH_SUCCESS,
		root
	};
};

const rootFetchFail = () => {
	return {
		type: ROOT_FETCH_FAIL
	};
};