import React from 'react';

import styled from 'styled-components';

// styled components
const ModalDiv = styled.div`
	height: 500px;
	width: 900px;
	background: lightYellow;
	margin: 125px auto 0;
	border-radius: 5px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const ModalChild = styled.div`
	height: 390px;
	width: 380px;
	border-radius: 10px;

	${(props) =>
		props.className === 'child2'
			? 'background: #404040; 	display: flex; justify-content: center; align-items: center; color: #fff; font-size: 15px; font-weight: 800;'
			: null};
`;

const ModalH2 = styled.h2`
	letter-spacing: 2px;
	margin: 50px;
`;

const ModalButtonDiv = styled.div`text-align: right;`;

const ModalButton = styled.button`
	padding: 8px 30px;
	border-radius: 25px;
	background: #fff;
	font-weight: 600;

	&:focus {
		outline: none;
	}

	&:nth-of-type(2) {
		margin-left: 20px;
	}

	${(props) => (props.className === 'btn-secondary' ? 'background: #404040;' : null)};
	${(props) => (props.className === 'btn-secondary' ? 'color: #fff;' : 'color:#404040;')};
	${(props) => (props.className === 'btn-secondary' ? 'border: none;' : 'border: 1px solid #404040;')};
`;

const ModalForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 50px 0 70px;
	text-align: left;
`;

const ModalFormLabel = styled.label`color: #404040;`;

const ModalFormInput = styled.input`
	&:focus {
		outline: none;
	}

	margin-bottom: 20px;
	border: solid #404040;
	border-width: 0 0 1px;
	background: transparent;
`;

const UploadModal = () => {
	return (
		<div id="modal" className="upload-modal">
			<ModalDiv>
				<ModalChild className="child1">
					<ModalH2>Upload</ModalH2>
					<ModalButton className="btn-primary">Browse</ModalButton>

					<ModalForm>
						<label>Title</label>
						<ModalFormInput />
						<label>Description</label>

						<ModalFormInput />
					</ModalForm>

					<ModalButtonDiv>
						<ModalButton className="btn-primary">Cancel</ModalButton>
						<ModalButton className="btn-secondary">Create Post</ModalButton>
					</ModalButtonDiv>
				</ModalChild>

				<ModalChild className="child2">No Photo Selected..</ModalChild>
			</ModalDiv>
		</div>
	);
};

export default UploadModal;
