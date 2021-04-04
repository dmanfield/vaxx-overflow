import styled from 'styled-components'

const StyledDropForm = styled.select`
font-size: 20px;
text-align-last: center;
margin: auto;
align-items: flex-start;
padding: 0px;
background-color: white;
width: 336px;
height: 40px;
radius: 4;
border-radius: 4px;
position: absolute;
blend: pass through;
top: calc(25% - 40px/2);
`;

function DropForm () {
  return <StyledDropForm>
    <label> Number of Doses available </label>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </StyledDropForm>
}

export default DropForm;