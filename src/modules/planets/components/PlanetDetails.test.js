import React from 'react';
import { PlanetDetails } from './PlanetDetails';
import { shallow } from 'enzyme';

describe('PlanetDetails', () => {

	it('render correctly', () => {
		const props = {
			fetching: false,
			fetchSuccess: true,
			currentPlanet: {url: 'planet_url'},
			match: {
				params: {planetUrl: 'planet_url'}
			}
		};
		const wrapper = shallow(<PlanetDetails {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('when props.fetching "true", no error and no details-body rendered', () => {
		const props = {
			fetching: true,
			fetchSuccess: true,
			currentPlanet: {url: 'planet_url'},
			match: {
				params: {planetUrl: 'planet_url'}
			}
		};
		const wrapper = shallow(<PlanetDetails {...props} />);
		expect(wrapper.find('.error')).toHaveLength(0);
		expect(wrapper.find('.details-body')).toHaveLength(0);
	});

	it('when props.currentPlanet has value and match with the url encoded in route params, details-body rendered', () => {
		const props = {
			fetching: false,
			fetchSuccess: true,
			currentPlanet: {url: 'planet_url'},
			match: {
				params: {planetUrl: 'planet_url'}
			}
		};
		const wrapper = shallow(<PlanetDetails {...props} />);
		expect(wrapper.find('.details-body')).toHaveLength(1);
	});

	it('when props.fetchSuccess "false" and props.fetching "false", render error', () => {
		const props = {
			fetching: false,
			fetchSuccess: false,
			currentPlanet: {url: 'planet_url'},
			match: {
				params: {planetUrl: 'planet_url'}
			}
		};
		const wrapper = shallow(<PlanetDetails {...props} />);
		expect(wrapper.find('.error')).toHaveLength(1);
	});

	it('when props.currentPlanet has value but not match with route param, call fetchPlanet', () => {
		const props = {
			fetching: false,
			fetchSuccess: true,
			currentPlanet: {url: 'planet_url_not_same'},
			match: {
				params: {planetUrl: 'planet_url'}
			},
			fetchPlanet: jest.fn(() => {})
		};
		const wrapper = shallow(<PlanetDetails {...props} />);
		const componentDidMountSpy = jest.spyOn(wrapper.instance(), 'componentDidMount');
		componentDidMountSpy();
		expect(props.fetchPlanet).toBeCalled();
	});

	it('when props.currentPlanet no value, call fetchPlanet', () => {
		const props = {
			fetching: false,
			fetchSuccess: true,
			currentPlanet: null,
			match: {
				params: {planetUrl: 'planet_url'}
			},
			fetchPlanet: jest.fn(() => {})
		};
		const wrapper = shallow(<PlanetDetails {...props} />);
		const componentDidMountSpy = jest.spyOn(wrapper.instance(), 'componentDidMount');
		componentDidMountSpy();
		expect(props.fetchPlanet).toBeCalled();
	});

});