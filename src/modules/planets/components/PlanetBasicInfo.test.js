import React from 'react';
import PlanetBasicInfo from './PlanetBasicInfo';
import { shallow } from 'enzyme';

describe('PlanetBasicInfo', () => {
	it('render correctly', () => {
		const props = {
			planet: {
				rotation_period: 100,
				orbital_period: 100,
				diameter: 100,
				surface_water: 100,
				population: 1000000,
				gravity: 'gravity',
				climate: 'climate',
				terrain: 'terrain'
			}
		};
		const wrapper = shallow(<PlanetBasicInfo {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('when planet is null, rendered nothing (render method return false || null || undefined)', () => {
		const props = {};
		const wrapper = shallow(<PlanetBasicInfo {...props} />);
		expect(wrapper.get(0)).toBeFalsy();
	});
});