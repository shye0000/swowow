import React from 'react';
import {fetchRoot} from './redux/actions';
import {connect} from 'react-redux';
import {processing, stop} from '../../redux/actions';
import './Home.scss';

const Msg = ({fetching, fetchSuccess, counter}) => {
	if (counter) {
		return null;
	}
	if (fetching) {
		return <div>Here we go!</div>;
	}
	if (fetchSuccess) {
		return <div>OK</div>;
	}
	return <div>Bad luck, something went wrong...</div>;
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
		const {fetching, fetchSuccess} = this.props;
		return (
			<div className="home">
				{counter ? <div className="home-counter">{counter}</div> : null}
				<div className="home-msg">
					<Msg fetching={fetching} fetchSuccess={fetchSuccess} counter={counter} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fetching: state.root.fetching,
		fetchSuccess: state.root.fetchSuccess
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchRoot: () => {
			dispatch(processing());
			dispatch(fetchRoot()).then(
				() => {
					dispatch(stop());
				},
				() => {
					dispatch(stop());
				}
			);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
