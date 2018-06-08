import React from 'react';
import Sphere from './Sphere';
import { shallow } from 'enzyme';

describe('PlanetDetails', () => {

	it('render correctly with diameter === 0', () => {
		const props = {diameter: 0};
		const wrapper = shallow(<Sphere {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('render correctly with diameter "unknown"', () => {
		const props = {diameter: 'unknown'};
		const wrapper = shallow(<Sphere {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('render correctly with diameter with non zero number value', () => {
		const props = {diameter: 15000};
		const wrapper = shallow(<Sphere {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

});