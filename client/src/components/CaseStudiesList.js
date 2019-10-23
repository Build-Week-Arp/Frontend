import React, { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import UploadModal from './UploadModal';

const CaseStudiesList = ({ data }) => {
	const [ isUploading, setIsUploading ] = useState(false);

	// todo add in some dummy data to stand in for components that we are going to integrate

	const handleClick = () => {
		setIsUploading(!isUploading);
	};

	if (isUploading) {
		// todo going to make a modal component will will go here.
		return <UploadModal />;
	} else {
		return (
			<div>
				<nav className="case-nav">
					<div className="case-btn-container">
						<button onClick={handleClick} className="case-btn-1">
							Upload
						</button>
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
	}
};

export default CaseStudiesList;
