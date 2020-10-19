import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export const ContainerDiv = styled.div`
    height: 397px;
    background-color: #8d1c31;
`;

export const Title = styled.div`
    padding-top: 54px;
    display: flex;
    place-content: center;
    height: 52px;
    font-family: 'Montserrat';
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.25px;
    color: #ffffff;
`;

export const ContentDiv = styled.div`
    display: grid;
    place-content: center;
    height: 180px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.24px;
    text-align: center;
    color: #ffffff;
`;

export const SocialNetwork = styled.div`
    display: flex;
    place-content: center;
`;

const Contact = () => {
    return(<ContainerDiv>
        <Title>Contato</Title>
        <ContentDiv>
            <div>Email: artur.marques.95@hotmail.com</div>
            <div>Celular: 85 998404009</div>
        </ContentDiv>
        <SocialNetwork>
        <a href="https://www.linkedin.com/in/artur-marques-magalhaes/" target="blank"><LinkedInIcon style={{color: 'white'}} /></a>
            <a href="https://github.com/arturmmagalhaes" target="blank"><GitHubIcon style={{color: 'white',  padding:"2px" }} fontSize="small" /></a>
        </SocialNetwork>
    </ContainerDiv>);
}

export default Contact;