import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
	const devRef = useRef();
	useEffect(() => {
		mount(devRef.current);
	}, []);
	return <div ref={devRef} />;
};
