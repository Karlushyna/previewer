// MarkdownInput.js
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

function MarkdownInput({ value, onChange }) {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
}

export default MarkdownInput;
