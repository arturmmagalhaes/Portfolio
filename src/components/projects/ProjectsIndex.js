import React from 'react';
import styled from 'styled-components';

export const ContainerDiv = styled.div`
    background-color: #f2f2f2;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    padding: 42px 0;
    height: 30px;
    font-family: 'Montserrat';
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    color: #45525b;
`;

export const Projects = styled.div`
    display: flex;
    place-content: center;
`;

export const ButtonMorePj = styled.button`
    width: 150px;
    height: 30px;
    border-radius: 8px;
    border: 1px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #8d1c31;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 42px;
    :hover{
        background-color: #d97824;
    }
`;

const projects = () => {
    return(<ContainerDiv>
        <Title>Meus projetos</Title>
        <Projects>
            <ButtonMorePj>Mais projetos</ButtonMorePj>
        </Projects>
    </ContainerDiv>);
}

export default projects;