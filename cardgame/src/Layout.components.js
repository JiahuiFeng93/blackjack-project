import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.header`
    width: 100%;
    text-align: center;
    background-color: green;
    font-size: 24px;
    font-weight: bold;
    color: whitesmoke;
    padding: 16px 0;
`;

export const CardLayout = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
`;

export const Button = styled.button`
    color: ${ props => props.type === "lower" ? "black" : "white" };
    background-color: ${ props => props.type === "lower" ? "red" : "blue" };
    padding: 16px 8px;
    border: 3px solid black;
    border-radius: 4px;
    min-width: 110px;
`;