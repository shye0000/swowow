import Animate from 'rc-animate';
import React from 'react';

const Msg = ({fetching, fetchSuccess, counter}) => {

	if (fetching) {
		return <Animate
			transitionName="fade"
			transitionAppear
		>
			<div>Here we go!</div>
		</Animate>;
	}
	if (fetchSuccess) {
		return <Animate
			transitionName="fade"
			transitionAppear
		>
			<div>STAR WARS</div>
		</Animate>;
	}
	if (counter) {
		return null;
	}
	return <Animate
		transitionName="fade"
		transitionAppear
	>
		<div>Bad luck, something went wrong...</div>
	</Animate>;
};

export default Msg;