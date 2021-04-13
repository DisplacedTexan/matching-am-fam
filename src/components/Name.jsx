import React, { useState } from "react";
import styled from "styled-components";

const Name = () => {
  const [shouldShowInput, setShouldShowInput] = useState(true);
  const [name, setName] = useState(null);

  return shouldShowInput ? (
    <StyledInputWrapper>
      <h2>What's your name?</h2>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={() => setShouldShowInput(false)}>Submit</button>
    </StyledInputWrapper>
  ) : (
    <StyledName>
      <h2>Hi, {name}!</h2>
    </StyledName>
  );
};

export default Name;

const StyledName = styled.div``;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 10px;
    margin-bottom: 10px;
  }
  button {
    padding: 5px;
  }
`;
