import React from 'react';

class Sphere extends React.Component {

	componentDidMount = () => {

	}

	render() {
		const {id, diameter, rotation_period, surface_water} = this.props;
		return <div>
			<canvas id={id} />
		</div>;
	}
}

export default Sphere;
