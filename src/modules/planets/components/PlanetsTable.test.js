import React from 'react';
import { PlanetsTable } from './PlanetsTable';
import { shallow } from 'enzyme';

describe('PlanetsTable', () => {

	it.skip('render correctly', () => {
		const props = {
			fetching: false,
			fetchSuccess: true,
			planetsCollection: {},
			fetchPlanets: jest.fn(() => {})
		};
		const wrapper = shallow(<PlanetsTable {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it.skip('fetchPlanets get te be called after first rendering', () => {
		const props = {
			fetching: false,
			fetchSuccess: true,
			planetsCollection: {},
			fetchPlanets: jest.fn(() => {})
		};
		const wrapper = shallow(<PlanetsTable {...props} />);
		const componentDidMountSpy = jest.spyOn(wrapper.instance(), 'componentDidMount');
		componentDidMountSpy();
		expect(props.fetchPlanets).toBeCalled();
	});

	it.skip('fetchPlanets get te be called when table change', () => {
		const props = {
			fetching: false,
			fetchSuccess: true,
			planetsCollection: {},
			fetchPlanets: jest.fn(() => {})
		};
		const wrapper = shallow(<PlanetsTable {...props} />);
		const handleTableOnChangeSpy = jest.spyOn(wrapper.instance(), 'handleTableOnChange');
		wrapper.instance().pagination.current = 1;
		handleTableOnChangeSpy({current: 3});
		expect(props.fetchPlanets).toBeCalled();
	});

	// todo
	// it('fetchPlanets should not be called when table change but with the same pagination', () => {
	// 	const props = {
	// 		fetching: false,
	// 		fetchSuccess: true,
	// 		planetsCollection: {},
	// 		fetchPlanets: jest.fn(() => {})
	// 	};
	// 	const wrapper = shallow(<PlanetsTable {...props} />);
	// 	const handleTableOnChangeSpy = jest.spyOn(wrapper.instance(), 'handleTableOnChange');
	// 	wrapper.instance().pagination.current = 3;
	// 	handleTableOnChangeSpy({current: 3});
	// 	expect(props.fetchPlanets).not.toBeCalled();
	// });

	it.skip('addKeyToDataSource get to be called with results of planetCollection only when render with planetCollection in props', () => {
		const props = {
			fetching: false,
			fetchSuccess: false,
			fetchPlanets: jest.fn(() => {})
		};
		const wrapper = shallow(<PlanetsTable {...props} />);
		const addKeyToDataSourceSpy = jest.spyOn(wrapper.instance(), 'addKeyToDataSource');
		wrapper.setProps({
			fetching: false,
			fetchSuccess: false,
			fetchPlanets: jest.fn(() => {})
		});
		expect(addKeyToDataSourceSpy).not.toBeCalled();
		wrapper.setProps({
			fetching: false,
			fetchSuccess: true,
			planetsCollection: {results: []},
			fetchPlanets: jest.fn(() => {})
		});
		expect(addKeyToDataSourceSpy).toBeCalledWith([]);
	});

	it.skip('getTablePaginationByCount get to be called only when render with planetCollection in props', () => {
		const props = {
			fetching: false,
			fetchSuccess: false,
			fetchPlanets: jest.fn(() => {})
		};
		const wrapper = shallow(<PlanetsTable {...props} />);
		const getTablePaginationByCountSpy = jest.spyOn(wrapper.instance(), 'getTablePaginationByCount');
		wrapper.setProps({
			fetching: false,
			fetchSuccess: false,
			fetchPlanets: jest.fn(() => {})
		});
		expect(getTablePaginationByCountSpy).not.toBeCalled();
		wrapper.setProps({
			fetching: false,
			fetchSuccess: true,
			planetsCollection: {},
			fetchPlanets: jest.fn(() => {})
		});
		expect(getTablePaginationByCountSpy).toBeCalled();
	});

});