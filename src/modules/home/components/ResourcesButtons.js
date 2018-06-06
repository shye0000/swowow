import React from 'react';
import Button from 'antd/lib/button';
import Animate from 'rc-animate';

const supportedResources = ['planets'];

const ResourcesButtons = ({root}) => {
	return <div className="resources-buttons">
		<Animate
			transitionName="fade"
			transitionAppear
		>
			{Object.keys(root).map((resource) => {
				return <Button
					disabled={!supportedResources.includes(resource)}
					key={resource}
				>{resource}</Button>;
			})}
		</Animate>

	</div>;
};

export default ResourcesButtons;