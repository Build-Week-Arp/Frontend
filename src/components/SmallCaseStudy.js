import React, { useState } from 'react';

import { CaseCard, CaseImage, CardBody, CardTitle, Subtitle, CardFooter } from '../styling/SmallCaseStudyStyling';

const SmallCaseStudy = ({ casestudy, artist, editStudy }) => {
	return (
		<CaseCard>
			<CaseImage src={casestudy.imgURL} />
			<CardBody>
				<CardTitle>{casestudy.title}</CardTitle>
				<Subtitle>by {artist}</Subtitle>
			</CardBody>
			<CardFooter>
				<h2>Likes: {casestudy.likes}</h2>
				<h2>Views: {casestudy.views}</h2>
				<button onClick={() => editStudy(casestudy.id)}>Edit</button>
			</CardFooter>
		</CaseCard>
	);
};

export default SmallCaseStudy;
