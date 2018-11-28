import React, { useState, useEffect } from 'react';
import {fetchRoot} from '../redux/actions';
import {connect} from 'react-redux';
import {speedUp} from '../../../redux/actions';
import ResourcesButtons from './ResourcesButtons';
import Animate from 'rc-animate';
import Msg from './Msg';
import './HomePage.scss';



const HomePage = props => {
	const [counter, setCounter] = useState(5);
	const {fetching, fetchSuccess, root, fetchRoot} = props;

	const countDownToFetchRoot = () => {
		if (counter === 0) {
			fetchRoot();
		}
		else {
			setTimeout(() => setCounter(counter - 1), 1000);
		}
	};

	useEffect(() => {
		if (!root || !fetchSuccess) {
			countDownToFetchRoot();
		}
	});

	return (
		<div className="home">
			{!fetchSuccess && counter ? <div className="home-counter">{counter}</div> : null}
			<div className="home-msg">
				<Msg fetching={fetching} fetchSuccess={fetchSuccess} counter={counter} />
				<Animate
					transitionName="fade"
					transitionAppear
				>
					{fetchSuccess ? <ResourcesButtons root={root} /> : null}
				</Animate>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		fetching: state.root.fetching,
		fetchSuccess: state.root.fetchSuccess,
		root: state.root.root
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchRoot: () => {
			dispatch(speedUp());
			dispatch(fetchRoot());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
