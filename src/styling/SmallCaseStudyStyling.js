import styled from 'styled-components';

export const CaseCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: white;
    border-radius: 8px;
    margin: 25px;
`;

export const CaseImage = styled.img`
    width: 250px;
    border-radius: 8px;
`;

export const CardBody = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
`;

export const CardTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin: 6px 12px;
`;

export const Subtitle = styled.div`
    font-size: 14px;
    color: gray;
    margin: 0 12px 5px;
`;

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 2px 5px;
`;