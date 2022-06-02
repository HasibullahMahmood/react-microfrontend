import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default () => {
	const devRef = useRef();
	const history = useHistory();
	useEffect(() => {
		const { onParentNavigate } = mount(devRef.current, {
			onNavigate: ({ pathname: nextPathname }) => {
				if (history.location.pathname !== nextPathname) {
					history.push(nextPathname);
				}
			},
		});

		history.listen(onParentNavigate);
	}, []);
	return <div ref={devRef} />;
};
