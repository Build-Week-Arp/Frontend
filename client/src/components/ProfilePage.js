import React, { useState, useEffect } from 'react';
import CaseStudiesList from './CaseStudiesList';
import axios from 'axios';
import { useAxios } from '../hooks/useAxios.js';

const ProfilePage = () => {
	// ? future custom api call
	// const [ data, setData ] = useAxios({});

	const [ data, setData ] = useState({
		caseStudies: [
			{
				title: 'Abstract',
				author: 'by JP Eliares',
				imgURL:
					'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				likes: 5,
				views: 8
			},
			{
				title: 'Mountains',
				author: 'by JP Eliares',
				imgURL:
					'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				likes: 4,
				views: 2
			},
			{
				title: 'Hills',
				author: 'by JP Eliares',
				imgURL:
					'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
				likes: 9,
				views: 20
			},
			{
				title: 'Hills',
				author: 'by JP Eliares',
				imgURL:
					'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
				likes: 9,
				views: 20
			},
			{
				title: 'Hills',
				author: 'by JP Eliares',
				imgURL:
					'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
				likes: 9,
				views: 20
			}
		]
	});

	return (
		<nav>
			<form className="profile-form">
				<input type="search" placeholder="search..." />
			</form>
			<CaseStudiesList data={data} />
		</nav>
	);
};

export default ProfilePage;
