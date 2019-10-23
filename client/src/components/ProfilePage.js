import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAxios } from '../hooks/useAxios.js';
import { connect } from 'react-redux';

import { fetchArtist } from '../actions';
import CaseStudiesList from './CaseStudiesList';
import BioCard from './Bio';
import NavBar from './NavBar';


const ProfilePage = (props) => {
	return (
    <>
		<NavBar />
		<BioCard />
		{<CaseStudiesList data={props.artist} />}
		
   </>
	);
};

const mapStateToProps = (state) => {
	return({
		artist: state.artist,
		isFetching: state.isFetching,
		isPosting: state.isPosting,
		error: state.error
	})
}


export default connect(
	mapStateToProps,
	{ fetchArtist }
 )(ProfilePage);
