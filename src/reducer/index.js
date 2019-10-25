import { START_FETCHING, FETCH_SUCCESS, FETCH_FAIL, UPDATE_CASE, ADD_CASE, DELETE_CASE } from '../actions';

import caseStudyImg1 from '../images/caseStudyImg1.jpg';
import caseStudyImg2 from '../images/caseStudyImg2.png';

const initialState = {
	isFetching: false,
	isPosting: false,
	error: '',
	artist: {
		username: 'JP Eliares',
		email: 'jpe@gmail.com',
		firstName: 'Jan Patrick',
		lastName: 'Eliares',
		password: 'password',
		bio: 'lorem ipsum',
		followers: 268,
		following: 8,
		title: 'UX/UI Designer',
		caseStudies: [
			{
				id: 1,
				title: 'Abstract',
				description: 'description',
				imgURL: caseStudyImg1,
				likes: 94,
				views: 1784
			},
			{
				id: 2,
				title: 'Woman',
				description: 'description',
				imgURL: caseStudyImg2,
				likes: 94,
				views: 1784
			},
			{
				id: 3,
				title: 'Abstract',
				description: 'description',
				imgURL: caseStudyImg1,
				likes: 94,
				views: 1784
			},
			{
				id: 4,
				title: 'Woman',
				description: 'description',
				imgURL: caseStudyImg2,
				likes: 94,
				views: 1784
			},
			{
				id: 5,
				title: 'Abstract',
				description: 'description',
				imgURL: caseStudyImg1,
				likes: 94,
				views: 1784
			},
			{
				id: 6,
				title: 'Woman',
				description: 'description',
				imgURL: caseStudyImg2,
				likes: 94,
				views: 1784
			},
			{
				id: 7,
				title: 'Abstract',
				description: 'description',
				imgURL: caseStudyImg1,
				likes: 94,
				views: 1784
			},
			{
				id: 8,
				title: 'Woman',
				description: 'description',
				imgURL: caseStudyImg2,
				likes: 94,
				views: 1784
			}
		]
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case FETCH_SUCCESS:
			return {
				...state,
				artist: action.payload,
				isFetching: false,
				error: ''
			};
		case FETCH_FAIL:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		case UPDATE_CASE:
			// create new array of case studies w/o case study being updated
			const newCaseArr = state.artist.caseStudies.map((caseStudy) => {
				if (caseStudy.id === action.payload.id) {
					return action.payload.caseStudy;
				} else {
					return caseStudy;
				}
			});

			return {
				...state,
				artist: {
					...state.artist,
					caseStudies: newCaseArr
				}
			};

		case ADD_CASE:
			return {
				...state,
				artist: {
					...state.artist,
					caseStudies: [ ...state.artist.caseStudies, action.payload ]
				}
			};

		case DELETE_CASE:
			return {
				...state,
				artist: {
					...state.artist,
					// filtering the casestudies and looking at the id then comparing it to the payload id and if they match it removes that casestudy from the array.
					caseStudies: state.artist.caseStudies.filter((caseStudy) => caseStudy.id !== action.payload.id)
				}
			};

		default:
			return state;
	}
};

export default reducer;
