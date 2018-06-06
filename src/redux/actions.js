export const PROCESSING = 'PROCESSING';
export const STOP = 'STOP';

export const processing = () => {
	return {
		type: PROCESSING
	};
};
export const stop = () => {
	return {
		type: STOP
	};
};