import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';

const generateClassName = createGenerateClassName({
	productionPrefix: 'ct',
});

export default () => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/auth" component={AuthApp} />
					<Route path="/" component={MarketingApp} />
				</Switch>
			</BrowserRouter>
		</StylesProvider>
	);
};
