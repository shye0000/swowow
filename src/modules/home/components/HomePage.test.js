import React from 'react';
import { HomePage } from './HomePage';
import { shallow } from 'enzyme';

describe('HomePage', () => {

	it.skip('render correctly', () => {
		const props = {
			fetching: false,
			fetchSuccess: false,
			root: null
		};
		const wrapper = shallow(<HomePage {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it.skip('when fetchSuccess "false" or has no root resources in props, call method "countDownToFetchRoot" ', () => {
		const props = {
			fetching: false,
			fetchSuccess: true,
			root: null
		};
		const wrapper = shallow(<HomePage {...props} />);
		const componentDidMountSpy = jest.spyOn(wrapper.instance(), 'componentDidMount');
		const countDownToFetchRootSpy = jest.spyOn(wrapper.instance(), 'countDownToFetchRoot');
		componentDidMountSpy();
		expect(countDownToFetchRootSpy).toBeCalled();
	});

});