import React from 'react';
import { connect } from 'react-redux';

import { fetchArtist } from '../actions';
import CaseStudiesList from './CaseStudiesList';
import BioCard from './Bio';
import NavBar from './NavBar';
import styled from 'styled-components';

const ProfilePageContainer = styled.div`
	background-image: url('../images/Profile-background.jpg');
	background: #f2f2f2;
	display: flex;
	flex-direction: row;
	width: 100vw;
`;

const CaseStudiesContainer = styled.div`
	width: 100%;
`;

const ProfilePage = (props) => {



	return (
		<>
			<NavBar />
			<ProfilePageContainer>
				<BioCard />
				<CaseStudiesContainer>
					<CaseStudiesList data={props.artist} />
				</CaseStudiesContainer>

			</ProfilePageContainer>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		artist: state.artist,
		isFetching: state.isFetching,
		isPosting: state.isPosting,
		error: state.error
	};
};

export default connect(
	mapStateToProps, 
	{ fetchArtist })(ProfilePage);
