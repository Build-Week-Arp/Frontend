import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateCaseStudy } from '../actions';
import caseStudyImg1 from '../images/caseStudyImg1.jpg';
import styled from 'styled-components';

const LargeForm = styled.form`
    border: 1px solid black;
    display: block;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    border-radius: 25px;
`;

const ArtImage = styled.img`
display: block;
margin-top: 1%;
margin-left: auto;
margin-right: auto;
width: 98%;
border-radius: 25px;
`;

const InputForm = styled.input`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: 2%;
    margin-top: 1%;
    width: 50%;
    height: 50px;
    border: none;
    border-bottom: 2px solid gray;
    resize: vertical;
    border-radius: 5px;
    padding-left: 2%;
`;

const SubmitButton = styled.button`
    display: flex;
    flex-direction: column;  
    color: white;  
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
    margin-bottom: 2%;
    background: #d12554;
    border: 2px solid #d12554;
    border-radius: 15px;
    
	
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
        <LargeForm>
            <ArtImage src={newCase.imgURL} />
            <InputForm
                name="title" 
                type="text" 
                placeholder='Enter new title'
                onChange={handleChange}
            />
            <InputForm 
                name="description" 
                type="text" 
                placeholder='Enter new Description'
                onChange={handleChange}/>
            <SubmitButton onClick={updateIt}>Update Post</SubmitButton>
        </LargeForm>
 
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

  
    