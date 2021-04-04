import styled from 'styled-components'

const StyledButton = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

width: 336px;
height: 48px;
border-radius: 6px;

/* Auto Layout */
// display: inline-block;
// align-items: center;
// display: inline-flex;
// align-items: center; 
vertical-align: middle;
horizontal-align: middle;

/* success/default */
border: none;

/* button/secondary */
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 28px;
background: none;
text-transform: uppercase;

/* secondary/default */
color: #F26121;

&:hover {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
}
`;


function SecondaryButton(x) {
  return <StyledButton onClick={x.clickAction} >{x.text}<svg style={{verticalAlign: 'middle'}}width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path  d="M18.51 13H6.5V15H18.51V18L22.5 14L18.51 10V13Z" fill="#F26121"/>
  </svg></StyledButton>
}

export default SecondaryButton;