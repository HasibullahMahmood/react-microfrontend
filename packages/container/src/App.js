import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Progress from './components/Progress';
const LazyMarketing = lazy(() => import('./components/MarketingApp'));
const LazyAuth = lazy(() => import('./components/AuthApp'));
const LazyDashboard = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
	productionPrefix: 'ct',
});

const history = createBrowserHistory();

export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		if (isSignedIn) {
			history.push('/dashboard');
		}
	}, [isSignedIn]);
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
				<Header isSignedIn={isSignedIn} onSignOut={setIsSignedIn.bind(null, false)} />
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path="/auth">
							<LazyAuth onSignIn={setIsSignedIn.bind(null, true)} />
						</Route>
						<Route path="/dashboard">
							{!isSignedIn && <Redirect to={'/'} />}
							<LazyDashboard />
						</Route>
						<Route path="/">
							<LazyMarketing />
						</Route>
					</Switch>
				</Suspense>
			</Router>
		</StylesProvider>
	);
};
