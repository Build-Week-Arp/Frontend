import React from 'react';
import styled from 'styled-components';

import DropDownMenu from './Menu';

const PRIMARY_RED = '#d12554';

const NavBarContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	background-color: black;
`;

export const Logo = styled.div`
	width: 33px;
	text-align: center;
	padding: 5px 5px;
	background-color: ${PRIMARY_RED};
	border: 1px solid white;
	color: white;
	font-size: 1.2rem;
	margin: 12px 15px;
`;

const NavBar = () => {
	return (
		<NavBarContainer>
			<Logo>
				AR<br />P .
			</Logo>
			<form>
				<input type="search" placeholder="search..." />
			</form>
			<DropDownMenu />
		</NavBarContainer>
	);
};

export default NavBar;
