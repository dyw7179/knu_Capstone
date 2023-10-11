import styled from 'styled-components';

export const IndexContainer = styled.div`
    width: 1440px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 60px;
    background-color: black;
    justify-content: center;

`;

export const BasicButton = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        border: 2px solid #4CAF50;
    }
`;
