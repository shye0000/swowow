import React from 'react';
import {renderRoutes} from 'react-router-config';
import {connect} from 'react-redux';
import StarFieldCanvas from './StarFieldCanvas';
import ReactResizeDetector from 'react-resize-detector';
import './Layout.scss';

class Layout extends React.Component {

	UNSAFE_componentWillReceiveProps (nextProps) {
		const {processing} = nextProps;
		if (processing) {
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
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		processing: state.global.processing,
	};
};

export default connect(mapStateToProps, null)(Layout);
