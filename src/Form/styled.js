import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border: 3px solid #797979;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  background-color: #ccc;
`;

export const Legend = styled.legend`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  color: rgb(0, 0, 0);
  background-color: rgb(217, 177, 255);
  font-weight: 600;
`;

export const LabelText = styled.span`
  width: 100%;
  max-width: 150px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Field = styled.input`
  border: 1px solid #1f1f1f;
  padding: 10px;
  max-width: 450px;
  width: 100%;
  border-radius: 10px;
`;

export const Button = styled.button`
  background-color: rgb(217, 177, 255);
  padding: 10px;
  margin: 5 auto;
  border: 2px solid black;
  border-radius: 10px;
  width: 100%;

  &:hover {
    filter: brightness(120%);
  }
  &:active {
    filter: brightness(140%);
  }
`;

export const Loading = styled.p`
  color: teal;
`;
