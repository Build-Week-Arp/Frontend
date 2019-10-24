import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateCaseStudy } from '../actions';
import caseStudyImg1 from '../images/caseStudyImg1.jpg';
import styled from 'styled-components';

const ArtImage = styled.img`
display: block;
margin-top: 5%;
margin-left: auto;
margin-right: auto;
width: 50%;
`;

const InputForm = styled.input`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1%;
    width: 50%;
    height: 100px;
    border: none;
    border-bottom: 2px solid gray;
    resize: vertical;
`;

const SubmitButton = styled.button`
    display: flex;
    flex-direction: column;    
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
    margin-bottom: 2%;
`;

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
            <ArtImage src={newCase.imgURL} />
            <InputForm
                name="title" 
                type="text" 
                value={newCase.title}
                onChange={handleChange}
            />
            <SubmitButton onClick={updateIt}>Submit Changes</SubmitButton>
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


    // "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80"