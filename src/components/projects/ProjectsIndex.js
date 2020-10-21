import React, { useState } from 'react';
import styled from 'styled-components';
import ComponentProject from './ComponentProject';

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

export const ProjectsContent = styled.div`
    display: grid;
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
    cursor: pointer;
    :hover{
        background-color: #d97824;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    place-content: center;
    padding-top: 48px;
`;

const Projects = () => {
    const [project] = useState([
        {
            name: 'Labephoto',
            type: 'FullStack',
            linkBack: 'https://github.com/arturmmagalhaes/LabePhotos_backend',
            linkFront: 'https://github.com/arturmmagalhaes/LabePhotos_frontend',
            color: '#8d1c31'
        },{
            name: 'Task',
            type: 'FullStack',
            linkBack: 'https://github.com/arturmmagalhaes/Task/tree/main/taskBackend',
            linkFront: 'https://github.com/arturmmagalhaes/Task/tree/main/taskFrontend',
            color: '#33a6a6'
        }
    ]);

    return(<ContainerDiv>
        <Title>Meus projetos</Title>
        <ProjectsContent>
            {project.map(item =>  {
                return (<ComponentProject project={item}/>)
            })}
        </ProjectsContent>
        <ButtonDiv>
            <ButtonMorePj>Mais projetos</ButtonMorePj>
        </ButtonDiv>
    </ContainerDiv>);
}

export default Projects;