import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';

export default () => {
	const devRef = useRef();

	useEffect(() => {
		mount(devRef.current);
	}, []);
	return <div ref={devRef} />;
};
