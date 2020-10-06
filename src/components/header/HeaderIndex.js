import React from 'react';
import styled from 'styled-components';

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
`;

export const NameDiv = styled.div`
    padding-left: 32px;
    width: 75px;
    height: 25px;
    font-family: 'Montserrat';
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #8d1c31;
    cursor: pointer;
`;

export const MenuDiv = styled.div`
    padding-right: 32px;
    display: flex;
    height: 25px;
    font-family: 'Montserrat';
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #063447;
`;

export const ItemDiv = styled.div`
    padding-left: 32px;
    cursor: pointer;
`;

export const header = () => {
    return(
    <HeaderDiv>
        <NameDiv>
            Artur
        </NameDiv>
        <MenuDiv>
            <ItemDiv style={{color:'#8d1c31'}}>quem sou</ItemDiv>
            <ItemDiv>projetos</ItemDiv>
            <ItemDiv>contato</ItemDiv>
        </MenuDiv>
    </HeaderDiv>)
}

export default header;