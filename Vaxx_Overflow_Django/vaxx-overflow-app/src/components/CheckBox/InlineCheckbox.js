import React, { useState } from 'react';
import styled from 'styled-components'

const StyledCheck = styled.input`
appearance: none;
width: 20px;
height: 20px;
border: solid 2px #7AA68F;
border-radius: 6px;
background: none;

&:hover {
    background: #BBDCDE;
    border: 2px solid #414141;
  }

&:checked {
    background: #BBDCDE;
    border: 2px solid #414141;
}
`;

const StyledLabel = styled.label `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 20px;

/* Primary/Black */
color: #545454;
`;

const StyledTextDiv = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
width: 312px;
height: 40px;
`;

const TextWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

position: static;
width: 284px;
height: 40px;
left: 28px;
top: 0px;
order: 1;
flex-grow: 0;
margin: 0px 8px;
`;

// const Box =()=> {
//     const [ checked, setChecked ] = React.useState(false)

//     const toggle = () => {
//         setChecked(true)
//     }

//     return <StyledCheck type="button" state="default" checked={checked}></StyledCheck>
// }

function CheckBox(x) {
   return <StyledTextDiv> 
      <StyledCheck type="checkbox"></StyledCheck>
      <TextWrapper><StyledLabel>{x.label}</StyledLabel></TextWrapper>
   </StyledTextDiv>
   
   
}

export default CheckBox;