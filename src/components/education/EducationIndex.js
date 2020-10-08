import React from 'react';
import styled from 'styled-components';

export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 441px;
    background-color: #d97824;
    font-family: 'Montserrat';
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    color: #ffffff;
`;

export const Title = styled.div`
    padding-top: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EducationDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: auto;
`;

export const EducationTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EducationText = styled.div`
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #ffffff;
`;

const education = () => {
    return(<ContainerDiv>
        <Title>Educação</Title>
        <EducationDiv>
            <div>
                <EducationTitle>Universidade Estadual do Ceará</EducationTitle>
                <EducationText>Curso de Ciência da Computação</EducationText>
            </div>
            <div>
                <EducationTitle>Labenu</EducationTitle>
                <EducationText>Curso de Web Full Stack</EducationText>
            </div>
        </EducationDiv>
    </ContainerDiv>)
}

export default education;