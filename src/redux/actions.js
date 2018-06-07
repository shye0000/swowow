export const SPEED_UP = 'SPEED_UP';
export const SLOW_DOWN = 'SLOW_DOWN';

export const speedUp = () => {
	return {
		type: SPEED_UP
	};
};

export const slowDown = () => {
	return {
		type: SLOW_DOWN
	};
};