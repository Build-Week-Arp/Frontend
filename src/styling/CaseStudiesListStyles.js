import styled from 'styled-components';

const DARK_GRAY = '#404040';
const BLUE_ACCENT = '#2D6CFF';

export const CaseStudiesWrapper = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 50px;
`;

export const CaseStudiesNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
`;

export const NavButtonBox = styled.div`
	display: flex;
	width: 20%;
	justify-content: space-around;
`;

export const NavCategoryBox = styled.div`
	display: flex;
	width: 50%;
	justify-content: space-around;
`;

export const CardListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	border: solid gray 1px;
	background: #eaeaea;
`;

export const SelectedNavItem = styled.a`
	font-size: 24px;
	text-decoration: underline;
	color: ${BLUE_ACCENT};
`;

export const UnselectedNavItem = styled.a`
	font-size: 24px;
	text-decoration: none;
	color: ${DARK_GRAY};
	:hover {
		text-decoration: underline;
	}
`;
