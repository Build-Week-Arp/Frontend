import {
    START_FETCHING,
    FETCH_SUCCESS,
    FETCH_FAIL
} from '../actions';

import caseStudyImg1 from '../images/caseStudyImg1.jpg';
import caseStudyImg2 from '../images/caseStudyImg2.png';

const initialState = {
    isFetching: false,
    isPosting: false,
    error: '',
    artist: {
        username: "Jan Patrick Eliares",
        email: "jpe@gmail.com",
        firstName: "Jan Patrick",
        lastName: "Eliares",
        password: "password",
        bio: "lorem ipsum",
        followers: 268,
        following: 8,
        title: "UX/UI Designer",
        caseStudies: 
            [
                {
                    title: "Abstract",
                    description: "description",
                    imgURL: caseStudyImg1,
                    likes: 94,
                    views: 1784
                },
                {
                    title: "Woman",
                    description: "description",
                    imgURL: caseStudyImg2,
                    likes: 94,
                    views: 1784
                },
                {
                    title: "Abstract",
                    description: "description",
                    imgURL: caseStudyImg1,
                    likes: 94,
                    views: 1784
                },
                {
                    title: "Woman",
                    description: "description",
                    imgURL: caseStudyImg2,
                    likes: 94,
                    views: 1784
                } 
            ]
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                artist: action.payload,
                isFetching: false,
                error: '',
            }
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;