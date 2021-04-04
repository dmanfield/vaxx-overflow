import styled from 'styled-components'

const StyledButton = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

width: 336px;
height: 48px;
border-radius: 6px;

/* success/lighter */
background: #F0F7F8;

/* success/default */
border: 2px solid #3F7F82;
border-radius: 4px;

/* button/primary */

font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 20px;
text-align: center;
text-transform: uppercase;

/* success/default */
color: #3F7F82;

&:hover {
  background: #BBDCDE;
  border: 2px solid #414141;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
}
`;
// Usage

function PrimaryButton(x) {
  return <StyledButton>{x.text}</StyledButton>
}

export default PrimaryButton;