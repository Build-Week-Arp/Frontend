import React, { useState } from 'react';

const CaseStudiesList = () => {
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
			}
		]
	});

	return (
		<div>
			<nav className="case-nav">
				<div className="case-btn-container">
					<button className="case-btn">Upload</button>
					<button className="case-btn">Message</button>
				</div>
				<a className="case-a" href="#">
					Case Studies
				</a>
				<a className="case-a" href="#">
					Illustrations
				</a>
				<a className="case-a" href="#">
					Photography
				</a>
				<span className="case-view-btn">
					<a href="#">View All </a>
				</span>
			</nav>

			{data.caseStudies.map((img) => {
				console.log(img);
				return (
					<div>
						<img src={img.imgURL} alt="" width="600px" height="300px" />
						<h3>{img.title}</h3>
						<p>{img.author}</p>
						<p>likes: {img.likes}</p>
						<p> views: {img.views}</p>
						<button>Edit</button>
					</div>
				);
			})}
		</div>
	);
};

export default CaseStudiesList;
