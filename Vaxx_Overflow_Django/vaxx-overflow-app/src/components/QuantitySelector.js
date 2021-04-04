import React, { useState } from 'react';
import styled from 'styled-components'

const StyledSelector = styled.input`
appearance: none;
height: 33px;
Width: 80px;
border-radius: 4px;
background: #fefefe;

border: 2px solid #3F7F82;
border-radius: 4px;
&:hover {

  }

`;

const StyledLabel = styled.label`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;

color: #333333;
`;

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 80px;
height: 85px;
margin: auto;
`;

function Selector(x) {
   return <StyledDiv> 
    <StyledLabel>{x.label}</StyledLabel>
    <StyledSelector type="number" min="1"></StyledSelector>

   </StyledDiv>
   
   
}

export default Selector;