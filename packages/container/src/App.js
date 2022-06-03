import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Header from './components/Header';
import Progress from './components/Progress';
const LazyMarketing = lazy(() => import('./components/MarketingApp'));
const LazyAuth = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
	productionPrefix: 'ct',
});

export default () => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<BrowserRouter>
				<Header />
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path="/auth" component={LazyAuth} />
						<Route path="/" component={LazyMarketing} />
					</Switch>
				</Suspense>
			</BrowserRouter>
		</StylesProvider>
	);
};
