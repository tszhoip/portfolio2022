import React from 'react';
import styled from 'styled-components';

const Textstyle = styled.div`
    padding: 32px 16px 64px;
`

const TextContainer = styled.div`
    width: 50%;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
            @media (min-width: 600px) and (max-width: 1023px) {
            width: 80%;
        }
        @media (min-width: 200px) and (max-width: 599px) {
            width: 100%;
        }
`

const Text1 = (props) => {

    return (
        
        <TextContainer>
            <Textstyle>
            <h1>{props.title}</h1>
            <p>{props.type}</p>
            </Textstyle>
        </TextContainer>
        
    )
}

export default Text1;