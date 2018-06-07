import React from 'react';
import Button from 'antd/lib/button';
import './ResourcesButtons.scss';

const supportedResources = ['planets'];

const getResourceHref = (resource) => {
	switch (resource) {
		case 'planets': {
			return '#/planets';
		}
		default: {
			return '#/';
		}
	}
};

const ResourcesButtons = ({root}) => {
	return <div className="resources-buttons">
		{Object.keys(root).map((resource) => {
			return <Button
				disabled={!supportedResources.includes(resource)}
				key={resource} type="dashed" ghost
				href={getResourceHref(resource)}
			>{resource}</Button>;
		})}
	</div>;
};

export default ResourcesButtons;