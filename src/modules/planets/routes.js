import asyncRoute from '../../utils/CodeSplitting/asyncRoute/asyncRoute';

const PlanetsTable = asyncRoute(
	() => import(
		/* webpackChunkName: "planetsTable" */
		'./PlanetsTable'),
	() => import(
		/* webpackChunkName: "planetsReducers" */
		'./redux/reducers')
);

const routes = [{
	path: '/planets',
	exact: true,
	component: PlanetsTable
}];

export default routes;