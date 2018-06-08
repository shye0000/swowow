import React from 'react';
import ResourcesButtons from './ResourcesButtons';
import { shallow } from 'enzyme';

const setup = () => {
	// simulate props
	const props = {
		root: {
			planets: 'url_planets',
			people: 'url_people',
		}
	};
	const wrapper = shallow(<ResourcesButtons {...props} />);
	return {
		props,
		wrapper
	};
};

describe('ResourcesButtons', () => {

	const { wrapper } = setup();

	it('render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('render with 2 buttons', () => {
		expect(wrapper.find('Button')).toHaveLength(2);
	});

});