import React from 'react';
import styled from 'styled-components';

const Card = ({isVisible, handleClick, emoji}) => {

    const content = isVisible ? emoji : '';
    console.log(emoji)
    
    

    return <CardWrapper isVisible={isVisible} onClick={() => handleClick()}>{content}</CardWrapper>
}
 
export default Card;

const CardWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 200px;
    height: 200px;
    background: ${({isVisible}) => isVisible ? 'white' : 'green'};
    border: 1px solid black;
`

