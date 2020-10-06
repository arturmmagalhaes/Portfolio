import React from 'react';
import styled from 'styled-components';
import profile from '../../assets/profile.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export const ContainerDiv = styled.div`
    display: flex;
    height: 520px;
    background-color: #8d1c31;
`;

export const ImgProfile = styled.img`
    width: 435px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 782px;
    height: 520px;
`;

export const NameDiv = styled.div`
    height: 122px;
    font-family: 'Montserrat';
    font-size: 50px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #d97824;
`;

export const TitleDiv = styled.div`
    height: 29px;
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2.2px;
    color: #ffffff;
`;

export const SocialNetwork = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    width: 20px;
`;

export const introduction = () => {
    return(<ContainerDiv>
        <ImgProfile alt='image' src={profile}/>
        <Description>
            <NameDiv>Eu sou<br />Artur Magalhães</NameDiv>
            <TitleDiv>Desenvolvedor Web Full Stack</TitleDiv>
        </Description>
        <SocialNetwork>
            <a href="https://www.linkedin.com/in/artur-marques-magalhaes/" target="blank"><LinkedInIcon style={{ color: "white", paddingBottom: "10px" }}/></a>
            <a href="https://github.com/arturmmagalhaes" target="blank"><GitHubIcon style={{ color: "white", padding:"2px" }} fontSize="small"/></a>
        </SocialNetwork>
    </ContainerDiv>);
}

export default introduction;