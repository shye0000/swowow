import React, {useEffect} from 'react';
import './PlanetDetails.scss';
import {slowDown, speedUp} from '../../../redux/actions';
import {fetchPlanet} from '../redux/actions';
import HomeLink from '../../../components/HomeLink';
import PlanetsTableLink from './PlanetsTableLink';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Sphere from './Sphere';
import PlanetBasicInfo from './PlanetBasicInfo';
import {connect} from 'react-redux';
import Animate from 'rc-animate';

const PlanetDetails = props => {
	const {
		currentPlanet,
		fetching,
		fetchSuccess,
		match,
		fetchPlanet,
	} = props;

	useEffect(() => {
		const {planetUrl} = match.params;
		const url = decodeURIComponent(planetUrl);
		let currentPlanetUrl;
		if (currentPlanet) {
			currentPlanetUrl = currentPlanet.url;
		}
		if (currentPlanetUrl !== url) {
			fetchPlanet(url);
		}
	});

	let content;
	if (fetching) {
		content = null;
	} else if (!fetchSuccess){
		content = <div className="error" >Bad luck, something went wrong...</div>;
	} else if (currentPlanet){
		const {diameter, name} = currentPlanet;
		content = <Animate
			transitionName="fade"
			transitionAppear
		>
			<div className="details-body">
				<div className="sphere-wrapper">
					<Sphere className="planet-sphere" diameter={diameter} />
				</div>
				<div className="planet-name">{name}</div>
				<Row gutter={24} type="flex">
					<Col xs={24} md={8}>
						<Card className="info-card" title="Information">
							<PlanetBasicInfo planet={currentPlanet}/>
						</Card>
					</Col>
					<Col xs={24} md={8}>
						<Card loading={true} className="info-card" title="Residents" />
					</Col>
					<Col xs={24} md={8}>
						<Card loading={true} className="info-card" title="Films" />
					</Col>
				</Row>
			</div>
		</Animate>;
	}
	return <div className="planet-details">
		<div><HomeLink /></div>
		<div><PlanetsTableLink /></div>
		{content}
	</div>;
};

const mapStateToProps = (state) => {
	return {
		fetching: state.planets.fetching,
		fetchSuccess: state.planets.fetchSuccess,
		currentPlanet: state.planets.currentPlanet
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPlanet: (planetUrl) => {
			dispatch(speedUp());
			dispatch(fetchPlanet(planetUrl)).then(() => dispatch(slowDown())).catch(() => dispatch(slowDown()));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetails);