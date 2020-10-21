import React from 'react';
import ComputerIcon from '@material-ui/icons/Computer';
import styled from 'styled-components';

export const ContainerDiv = styled.div`
    display: flex;
`;

export const ContentDiv = styled.div`
    padding-left: 20px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.25px;
    :hover{

    }
`;

export const Title = styled.div`
    width: 172px;
    height: 48px;
    padding-top: 10px;
    font-family: 'Montserrat';
    font-size: 38px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.25px;
`;

export const Links = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8px;
    padding-top: 8px;
`;

export const ButtonMorePj = styled.button`
    width: 140px;
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
    margin-bottom: 8px;
    cursor: pointer;
    :hover{
        background-color: #d97824;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    :visited{
        color: white;
        text-decoration: none;
    }
`;

const ComponentProject = (props) => {
    return(<ContainerDiv>
        <ComputerIcon style={{fontSize: '160px'}}/>
        <ContentDiv  style={{color: `${props.project.color}`}}>
            <Title>{props.project.name}</Title>
            <div>Aplicação {props.project.type}</div>
            {props.project.type === 'FullStack' && <>
                <Links>
                    <div style={{textAlign: 'center'}}>Backend</div>              
                    <div style={{textAlign: 'center'}}>Frontend</div>          
                    <ButtonMorePj><Link href={props.project.linkBack} >Ver no GitHub</Link></ButtonMorePj>
                    <ButtonMorePj><Link href={props.project.linkBack} >Ver no GitHub</Link></ButtonMorePj>
                </Links>
            </>}
            
        </ContentDiv>
    </ContainerDiv>)
}

export default ComponentProject;