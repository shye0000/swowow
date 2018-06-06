import React from 'react';
import {fetchRoot} from './redux/actions';
import {connect} from 'react-redux';
import {speedUp, slowDown} from '../../redux/actions';
import ResourcesButtons from './components/ResourcesButtons';
import Animate from 'rc-animate';
import './Home.scss';

const Msg = ({fetching, fetchSuccess, counter}) => {
	if (counter) {
		return null;
	}
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
			<div>Star Wars</div>
		</Animate>;
	}
	return <Animate
		transitionName="fade"
		transitionAppear
	>
		<div>Bad luck, something went wrong...</div>
	</Animate>;
};

class HomePage extends React.Component {

	state = {
		counter: 5
	}

	componentDidMount = () => {
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

	render() {
		const {counter} = this.state;
		const {fetching, fetchSuccess, root} = this.props;
		return (
			<div className="home">
				{counter ? <div className="home-counter">{counter}</div> : null}
				<div className="home-msg">
					<Msg fetching={fetching} fetchSuccess={fetchSuccess} counter={counter} />
					{fetchSuccess ? <ResourcesButtons root={root} /> : null}
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
			dispatch(fetchRoot()).then(
				() => {
					// setTimeout(() => dispatch(stop()), 3000);
				},
				() => {
					// setTimeout(() => dispatch(stop()), 3000);
				}
			);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
