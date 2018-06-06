import asyncRoute from '../../utils/CodeSplitting/asyncRoute/asyncRoute';

const Home = asyncRoute(
	() => import(
		/* webpackChunkName: "home" */
		'./Home')
);

export const routes = [{
	path: '/',
	exact: true,
	component: Home
}];
