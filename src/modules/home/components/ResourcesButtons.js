import React from 'react';
import Button from 'antd/lib/button';
import Animate from 'rc-animate';
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
		<Animate
			transitionName="fade"
			transitionAppear
		>
			{Object.keys(root).map((resource) => {
				return <Button
					disabled={!supportedResources.includes(resource)}
					key={resource} type="dashed" ghost
					href={getResourceHref(resource)}
				>{resource}</Button>;
			})}
		</Animate>
	</div>;
};

export default ResourcesButtons;