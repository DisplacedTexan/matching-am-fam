import React from "react";
import styled from "styled-components";
import Name from "./components/Name";

function App() {
  return (
    <Wrapper>
      <Name />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
