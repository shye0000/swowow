import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';
import routes from './routes';
import App from './components/App';
import appStore from './redux/store';

// create the redux router middleware
const history = createBrowserHistory();

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component store={appStore} routes={routes} history={history}/>
		</AppContainer>,
		document.getElementById('main')
	);
};

render(App);

if (module.hot) {
	module.hot.accept('./components/App', () => {
		const nextApp = require('./components/App').default;
		render(nextApp) ;
	});
}
