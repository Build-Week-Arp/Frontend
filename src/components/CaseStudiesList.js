import React, { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import UploadModal from './UploadModal';
import SmallCaseStudy from './SmallCaseStudy';
// import LargeCaseStudy from './LargeCaseStudy';
import EditModal from './EditModal';

import {
	CaseStudiesWrapper,
	CaseStudiesNav,
	CardListContainer,
	NavButtonBox,
	NavCategoryBox,
	SelectedNavItem,
	UnselectedNavItem
} from '../styling/CaseStudiesListStyles';
 
const CaseStudiesList = ({ data }) => {
	const [ isUploading, setIsUploading ] = useState(false);
	const [ editId, setEditing ] = useState(0);

    // todo add in some dummy data to stand in for components that we are going to integrate
    const handleClick = () => {
        setIsUploading(!isUploading);
	};
	
	// function that takes in id of case study and displays a modal
	// of that case study for user to edit.
	// after user finishes edits and submits, this function will update state
	const editStudy = (id) => {
		setEditing(id);
	}
 
    if (isUploading) {
        // todo going to make a modal component will will go here.
        return <UploadModal />;
    } else {
		if (editId) {
			// if edit id != 0, display modal that allows you to 
			// edit case study
			return <EditModal 
				setEditing={setEditing}
				editId={editId}/>
		} else {
			return (
				<CaseStudiesWrapper>
					<CaseStudiesNav>
						<NavButtonBox>
							<button onClick={handleClick} className="case-btn-1">
								Upload
							</button>
							<button className="case-btn-2">Message</button>
						</NavButtonBox>
	 
						<NavCategoryBox>
							<SelectedNavItem href="#">
								Case Studies
							</SelectedNavItem>
							<UnselectedNavItem href="#">
								Illustrations
							</UnselectedNavItem>
							<UnselectedNavItem href="#">
								Photography
							</UnselectedNavItem>
						</NavCategoryBox>
						<UnselectedNavItem href="#">View All </UnselectedNavItem>
					</CaseStudiesNav>
	 
					<CardListContainer>
						{data.caseStudies.map((casestudy) => {
							return (
								<SmallCaseStudy
									key={casestudy.id}
									casestudy={casestudy} 
									artist={data.username} 
									editStudy={editStudy}
								/>
								// <LargeCaseStudy casestudy={casestudy} />
							)
						})}
					</CardListContainer>
				</CaseStudiesWrapper>
			);
		}
    }
};
 
export default CaseStudiesList;
 
