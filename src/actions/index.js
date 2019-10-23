import axios from 'axios';

// action types
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

// action creator that fetches Artist object from API
export const fetchArtist = () => dispatch => {
    // action objects
    dispatch({ type: START_FETCHING })
    // async fetch action and dispatch success or error action
    // res.data should return an array of Case Studies
    /********THIS NEEDS TO BE UPDATED********/
    axios
        .get('http://localhost:3333/case-studies')
        .then( res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
        .catch( err => dispatch({ type: FETCH_FAIL, payload: err}))
}