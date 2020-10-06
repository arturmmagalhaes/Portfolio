import React from 'react';
import styled from 'styled-components';

export const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 418px;
    background-color: #33a6a6;
    font-family: 'Montserrat';
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #ffffff;
`;

export const Title = styled.div`
    padding: 46px 0 42px 0;
    display: flex;
    justify-content: center;
`;

export const Skill = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    width: 60%;
    justify-content: center;
    align-items: center;
`;

export const SkillTitle = styled.div`
    display: flex;
    justify-content: center;
    height: 67px;
    font-family: 'Montserrat';
    font-size: 55px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #ffffff;
`;

export const SkillText = styled.div`
    display: flex;
    margin: auto;
    height: 100px;
    width: 260px;
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    color: #ffffff;
`;

const skill = () => {
    return(<ContainerDiv>
        <Title>Meus conhecimentos</Title>
        <Skill>
            <div>
                <SkillTitle>Front End</SkillTitle>
                <SkillText>Desenvolvimento de aplicações web utilizando HTML, CSS e Javascript</SkillText>
            </div>
            <div>
                <SkillTitle>Back End</SkillTitle>
                <SkillText>Desenvolvimento de aplicações utilizando NodeJS, typescript e MySQL. Criação de Api para comunicar com front-end</SkillText>
            </div>
        </Skill>
    </ContainerDiv>)
}

export default skill;
