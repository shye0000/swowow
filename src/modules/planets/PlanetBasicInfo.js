import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const InfoRow = ({label, value}) => {
	return <Row gutter={24} type="flex">
		<Col xs={24} md={12}>{label}</Col>
		<Col xs={24} md={12}>{value}</Col>
	</Row>;
};

const PlanetBasicInfo = ({planet}) => {
	if (!planet) {
		return null;
	}
	const {
		climate,
		diameter,
		gravity,
		orbital_period,
		population,
		rotation_period,
		surface_water,
		terrain
	} = planet;
	const basicInfo = {
		'Rotation period':    rotation_period,
		'Orbital period':     orbital_period,
		'Diameter':           diameter,
		'Surface water':      surface_water,
		'Population':         population,
		'Gravity':            gravity,
		'Climate':            climate,
		'terrain':            terrain
	};
	return <div className="planet-basic-info">
		{Object.keys(basicInfo).map(label => <InfoRow key={label} label={label} value={basicInfo[label]} />)}
	</div>;
};

export default PlanetBasicInfo;