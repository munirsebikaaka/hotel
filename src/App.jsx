import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: blue;
  text-transform: capitalize;
  background-color: #f0f0f0;
`;
const Button = styled.button`
  display: inline-block;
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 0.4rem;
  background-color: #f0f0f0;
  color: #333;
  box-shadow: 0 0 10px black;
`;
const Input = styled.input`
  padding: 1.2rem 1.6rem;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  color: #333;
  box-shadow: 0 0 10px black;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>the wild oasis</H1>
        <Button>click me</Button>
        <Input type="text" placeholder="type here" />
      </div>
    </>
  );
}
export default App;
