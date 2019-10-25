import React from 'react';
import styled from 'styled-components';
import bgImg from '../images/Profile-background.jpg';
import { FaFacebookSquare, FaLinkedinIn, FaTwitterSquare, FaEnvelopeSquare } from 'react-icons/fa';

const CardContainer = styled.div`
	width: 300px;
	height: 760px;
	-moz-box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
	-webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, .2);
	box-shadow: 1px 2px 4px rgba(0, 0, 0, .2);
`;

const TopPart = styled.div`
	background-image: url(${bgImg});
	width: 300px;
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 80px 0 10px;
`;

const CardImage = styled.img`
	border-radius: 100px;
	width: 64px;
	height: 64px;
	margin: 0 auto;
`;

const MiddleDiv = styled.div`
	height: 546px;
	display: flex;
	flex-direction: column;
`;

const FollowButton = styled.button`
	margin: 10% auto;
	border-radius: 15px;
	border: 2px solid #d12554;
	width: 113px;
	height: 32px;
	color: white;
	background: #d12554;
`;

const MiddleParagraphs = styled.div`
	width: 252px;
	margin: 0 auto;
	line-height: 15px;
	font-size: 15px;
`;

const ImageBio = styled.div`
	width: 252px;
	margin: 0 auto;
	line-height: 15px;
	font-size: 15px;
`;

const MiddleParagraphH2 = styled.h2`font-weight: 900;`;

const BottomIcons = styled.div`margin: 20% auto;`;

export default function BioCard() {
	return (
		<CardContainer className="card-container">
			<TopPart className="top-part">
				<CardImage
					className="card-avatar"
					src="https://media.licdn.com/dms/image/C4D03AQGEyqn3rIlCRw/profile-displayphoto-shrink_200_200/0?e=1577318400&v=beta&t=zxpYoLRTOpEFal2OLx1lVshjXP5Tc2txps2DVGOXmFg"
				/>
				<br />
				<ImageBio>
					<MiddleParagraphH2>Leighton Fritze</MiddleParagraphH2>
					<br />

					<p>Full Stack Developer</p>
					<br />

					<small>
						<span>Followers: 300</span>
						<span> Following: 8</span>
					</small>
				</ImageBio>
			</TopPart>
			<MiddleDiv>
				<FollowButton>Follow</FollowButton>

				<MiddleParagraphs className="middle-part">
					<MiddleParagraphH2>About Me</MiddleParagraphH2>
					<br />
					<p>
						It is a long established fact that a reader will be distracted by the readable content of a page
						when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using{' '}
					</p>
					<br />
					<p>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered
						alteration in some form, by injected humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem
					</p>
				</MiddleParagraphs>
				<BottomIcons className="bottom-part">
					<FaFacebookSquare />
					<FaLinkedinIn />
					<FaTwitterSquare />
					<FaEnvelopeSquare />
				</BottomIcons>
			</MiddleDiv>
		</CardContainer>
	);
}
