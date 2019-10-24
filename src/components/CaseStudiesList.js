import React, { useState } from 'react';
import UploadModal from './UploadModal';
import SmallCaseStudy from './SmallCaseStudy';
import styled from 'styled-components';

const SmallCaseStudyContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const CaseStudiesList = ({ data }) => {
	const [ isUploading, setIsUploading ] = useState(false);

	const handleClick = () => {
		setIsUploading(!isUploading);
	};

	console.log(data);

	if (isUploading) {
		return <UploadModal handleClick={handleClick} />;
	} else {
		return (
			<>
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

				<SmallCaseStudyContainer>
					{data.caseStudies.map((data) => {
						return <SmallCaseStudy data={data} />;
					})}
				</SmallCaseStudyContainer>
			</>
		);
	}
};

export default CaseStudiesList;

// (
// 	<Card>
// 		<Image src={img.imgURL} wrapped ui={false} />
// 		<Card.Content>
// 			<Card.Header>{img.title}</Card.Header>
// 			<Card.Meta>
// 				<span className="date">{img.author}</span>
// 			</Card.Meta>
// 		</Card.Content>

// 		<Card.Content extra>
// 			<span className="heart-icon">
// 				<Icon name="heart" />
// 				{img.likes}
// 			</span>

// 			<span className="eye-icon">
// 				<Icon name="eye" />
// 				{img.views}
// 			</span>

// 			<button>Edit</button>
// 		</Card.Content>
// 	</Card>
// );
