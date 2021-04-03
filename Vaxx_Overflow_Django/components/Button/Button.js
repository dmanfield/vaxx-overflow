const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 20px;
  cursor: pointer;
  width: 336px;
  height: 40px;
  top: 4px;
  left: 4px;
  radius: 4;
  blend: pass through;
  border-radius: 4px;
  top: calc(50% - 40px/2);
  position: absolute;
`;
// Usage
<Button onClick={sayHello}>
  Sign In
</Button>