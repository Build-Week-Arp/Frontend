import {
    START_FETCHING,
    FETCH_SUCCESS,
    FETCH_FAIL
} from '../actions';

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
                    imgURL: "http://url",
                    likes: 94,
                    views: 1784
                },
                {
                    title: "Woman",
                    description: "description",
                    imgURL: "http://url",
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
    }
}

export default reducer;