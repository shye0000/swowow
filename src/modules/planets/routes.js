import asyncRoute from '../../utils/CodeSplitting/asyncRoute/asyncRoute';

const PlanetsTable = asyncRoute(
	() => import(
		/* webpackChunkName: "planetsTable" */
		'./PlanetsTable'),
	() => import(
		/* webpackChunkName: "planetsReducers" */
		'./redux/reducers')
);

const PlanetDetails = asyncRoute(
	() => import(
		/* webpackChunkName: "planetDetails" */
		'./PlanetDetails'),
	() => import(
		/* webpackChunkName: "planetsReducers" */
		'./redux/reducers')
);

const routes = [{
	path: '/planets',
	exact: true,
	component: PlanetsTable
}, {
	path: '/planets/:planetUrl',
	exact: true,
	component: PlanetDetails
}];

export default routes;