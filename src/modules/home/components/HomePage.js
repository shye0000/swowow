import React from 'react';
import {fetchRoot} from '../redux/actions';
import {connect} from 'react-redux';
import {speedUp} from '../../../redux/actions';
import ResourcesButtons from './ResourcesButtons';
import Animate from 'rc-animate';
import './HomePage.scss';

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

export class HomePage extends React.Component {

	state = {
		counter: 5
	}

	countDownToFetchRoot = () => {
		const count = setInterval(() => {
			this.setState((oldState) => {
				const {counter} = oldState;
				return {counter: counter - 1};
			}, () => {
				const {counter} = this.state;
				if (counter === 0) {
					this.props.fetchRoot();
					clearInterval(count);
				}
			});
		}, 1000);
	}

	componentDidMount = () => {
		const {root, fetchSuccess} = this.props;
		if (!root || !fetchSuccess) {
			this.countDownToFetchRoot();
		}
	}

	render() {
		const {counter} = this.state;
		const {fetching, fetchSuccess, root} = this.props;
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
	}
}

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
