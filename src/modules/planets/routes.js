import asyncRoute from '../../utils/CodeSplitting/asyncRoute/asyncRoute';

const PlanetsTable = asyncRoute(
	() => import(
		/* webpackChunkName: "home" */
		'./PlanetsTable'),
	() => import(
		/* webpackChunkName: "rootReducers" */
		'./redux/reducers')
);

const routes = [{
	path: '/planets',
	exact: true,
	component: PlanetsTable
}];

export default routes;