import React from 'react';
import {renderRoutes} from 'react-router-config';
import {connect} from 'react-redux';
import StarFieldCanvas from './StarFieldCanvas';
import ReactResizeDetector from 'react-resize-detector';
import './Layout.scss';

class Layout extends React.Component {

	componentDidUpdate () {
		const {speedUp} = this.props;
		if (speedUp) {
			this.field.speedUp();
		} else {
			this.field.slowDown();
		}
	}

	render() {
		return (
			<div className="layout">
				<StarFieldCanvas ref={node => this.field = node}/>
				<ReactResizeDetector handleWidth handleHeight onResize={() => this.field.resize()} />
				{renderRoutes(this.props.route.routes)}
				<div className="swapi-link-wrapper">
					{'Powered by '}
					<a href="https://swapi.co/" target="_blank" rel="noopener noreferrer" >SWAPI</a>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		speedUp: state.global.speedUp,
	};
};

export default connect(mapStateToProps, null)(Layout);
