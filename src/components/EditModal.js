import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateCaseStudy } from '../actions';
import caseStudyImg1 from '../images/caseStudyImg1.jpg';

const EditModal = (props) => {
    const [ newCase, setNewCase ] = useState(props.artist.caseStudies.filter(item => item.id === props.editId)[0]);

    const handleChange = (e) => {
        setNewCase({
            ...newCase,
            title: e.target.value
        })
    }

    const updateIt = (e) => {
        e.preventDefault();
        props.updateCaseStudy(newCase, props.editId);
        props.setEditing(0);

    }
    return (
        <form>
            <input 
                name="title" 
                type="text" 
                value={newCase.title}
                onChange={handleChange}
            />
            <button onClick={updateIt}>Submit Changes</button>
        </form>
 
    )
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
    { updateCaseStudy })(EditModal);
