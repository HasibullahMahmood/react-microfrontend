import React, { lazy, Suspense, useState } from 'react';
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
	const [isSignedIn, setIsSignedIn] = useState(false);
	return (
		<StylesProvider generateClassName={generateClassName}>
			<BrowserRouter>
				<Header isSignedIn={isSignedIn} onSignOut={setIsSignedIn.bind(null, false)} />
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path="/auth">
							<LazyAuth onSignIn={setIsSignedIn.bind(null, true)} />
						</Route>
						<Route path="/">
							<LazyMarketing />
						</Route>
					</Switch>
				</Suspense>
			</BrowserRouter>
		</StylesProvider>
	);
};
