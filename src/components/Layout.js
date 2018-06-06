import React from 'react';
import {renderRoutes} from 'react-router-config';
// import StarFieldCanvas from './StarFieldCanvas';
// import ReactResizeDetector from 'react-resize-detector';
import './Layout.scss';

class Layout extends React.Component {

	render() {
		return (
			<div className="layout">
				{/*<StarFieldCanvas ref={node => this.field = node}/>*/}
				{/*<ReactResizeDetector handleWidth handleHeight onResize={() => this.field.resize()} />*/}
				{renderRoutes(this.props.route.routes)}
			</div>
		);
	}
}

export default Layout;
