import asyncRoute from '../../utils/CodeSplitting/asyncRoute/asyncRoute';

const Home = asyncRoute(
	() => import(
		/* webpackChunkName: "home" */
		'./Home'),
	() => import(
		/* webpackChunkName: "rootReducers" */
		'./redux/reducers')
);

const routes = [{
	path: '/',
	exact: true,
	component: Home
}];

export default routes;