import React from 'react';
import {Link} from 'react-router-dom';

const PlanetsTableLink = () => {
	return <Link style={{fontWeight: 'bold'}} to="/planets" >Back to planets</Link>;;
};

export default PlanetsTableLink;