import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const UPDATE_CASE = 'UPDATE_CASE';
export const ADD_CASE = 'ADD_CASE';

// action creator that fetches Artist object from API
export const fetchArtist = () => (dispatch) => {
	// action objects
	dispatch({ type: START_FETCHING });
	// async fetch action and dispatch success or error action
	// res.data should return an array of Case Studies
	/********THIS NEEDS TO BE UPDATED********/
	axios
		.get('http://localhost:3333/case-studies')
		.then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: FETCH_FAIL, payload: err }));
};

// action that passes updated case and id to UPDATE_CASE
// reducer case
export const updateCaseStudy = (caseStudy, id) => (dispatch) => {
	dispatch({
		type: UPDATE_CASE,
		payload: {
			caseStudy: caseStudy,
			id: id
		}
	});
};

export const addCaseStudy = (caseStudy, id) => (dispatch) => {
	dispatch({ type: ADD_CASE, payload: caseStudy });
};
