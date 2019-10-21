import React, { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// todo may need to come back and refactor the state of this component and add some routes.

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
		<div>
			<nav className="case-nav">
				<div className="case-btn-container">
					<button className="case-btn-1">Upload</button>
					<button className="case-btn-2">Message</button>
				</div>

				<span className="middle-link">
					<a className="case-a" href="#">
						Case Studies
					</a>
					<a className="case-a" href="#">
						Illustrations
					</a>
					<a className="case-a" href="#">
						Photography
					</a>
				</span>

				<span className="case-view-btn">
					<a href="#">View All </a>
				</span>
			</nav>
			<Card.Group itemsPerRow={5}>
				{data.caseStudies.map((img) => {
					console.log(img);
					return (
						<Card>
							<Image src={img.imgURL} wrapped ui={false} />
							<Card.Content>
								<Card.Header>{img.title}</Card.Header>
								<Card.Meta>
									<span className="date">{img.author}</span>
								</Card.Meta>
							</Card.Content>

							<Card.Content extra>
								<span className="heart-icon">
									<Icon name="heart" />
									{img.likes}
								</span>

								<span className="eye-icon">
									<Icon name="eye" />
									{img.views}
								</span>

								<button>Edit</button>
							</Card.Content>
						</Card>
					);
				})}
			</Card.Group>
		</div>
	);
};

export default CaseStudiesList;
