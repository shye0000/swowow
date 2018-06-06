import asyncRoute from '../../utils/CodeSplitting/asyncRoute/asyncRoute';

const Home = asyncRoute(
	() => import(
		/* webpackChunkName: "home" */
		'./Home'),
	() => import(
		/* webpackChunkName: "rootReducers" */
		'./redux/reducers')
);

export const routes = [{
	path: '/',
	exact: true,
	component: Home
}];
