import React from 'react';
import {Link} from 'react-router-dom';
import './NotFoundPage.scss';

export class NotFoundPage extends React.Component {
	render() {
		return (
			<div className="not-found">
				<h1>404</h1>
				<h2>Nothing here!</h2>
				<p>
					<Link to="/">Back to home</Link>
				</p>
			</div>
		);
	}
}

export default NotFoundPage;
