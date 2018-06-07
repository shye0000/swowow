import {speedUp, slowDown, SLOW_DOWN, SPEED_UP} from './actions';

describe('actions', () => {
	it('speedUp : should create an action SPEED_UP', () => {
		const expectedAction = {
			type: SPEED_UP
		};
		expect(speedUp()).toEqual(expectedAction);
	});
	it('slowDown : should create an action SLOW_DOWN', () => {
		const expectedAction = {
			type: SLOW_DOWN
		};
		expect(slowDown()).toEqual(expectedAction);
	});
});