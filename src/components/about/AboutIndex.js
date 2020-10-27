import React from 'react';
import styled from 'styled-components';

export const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 438px;
    background-color: #063447;
`;

export const AboutMeDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    color: white;
`;

export const Title = styled.h3`
    position: static;
    left: 0;
    width: 238px;
    height: 52px;
    font-family: Montserrat;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #ffffff;
`;

export const Text = styled.div`
    width: 368px;
    height: 122px;
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #ffffff;
`;

export const StacksDiv = styled.div`
    height: 18px;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.2px;
    color: #ffffff;
`;

export const Button = styled.button`
    margin-top: 32px;
    width: 140px;
    height: 30px;
    border-radius: 8px;
    border: 1px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #bf213e;
    color: #ffffff;
    :hover{
        background-color: #d97824;
    }
`;

const about = () => {
    return(<ContainerDiv>
        <AboutMeDiv>
            <Title>Sobre mim</Title>
            <Text>Moro em Fortaleza e fiz a graduação em ciência da computação na Universidade Estadual do Ceará. Utilizei bastante C e Java para os trabalhos acadêmicos. Porém, mais para o final do curso, comecei a conhecer Python. Meu primeiro contato com Python foi em um trabalho de programação paralela e concorrente e após este trabalho continuei programando em Python, usando no trabalho de conclusão de curso e, posteriormente, chegando até a auxiliar nos estudos de análise de dados. No começo de 2020, quis me aprofundar em programação Web e concluir um curso de Full-Stack developer.</Text>
            <StacksDiv>| Javascript | Typescript | React | HTML | CSS | MySQL | </StacksDiv>
            <Button>CV em PDF</Button>
        </AboutMeDiv>
    </ContainerDiv>);
}

export default about