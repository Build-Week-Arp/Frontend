import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = () => {
	const [ data, setData ] = useState({});

	useEffect(() => {
		axios
			.get('future end point')
			.then((res) => {
				setData(res);
			})
			.catch((err) => console.log(err));
	}, []);

	return [ data, setData ];
};
