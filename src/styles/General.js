import styled from "styled-components";

export const CardsContainer = styled.section`
  margin: 50px;
`;

export const InputContent =  styled.form`
margin: 0 auto;
max-width: 600px;
padding: 20px;
display:flex;
`;

export const Input = styled.input`
  background-image: linear-gradient(#20aee3, #20aee3), linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: #bfbfbf;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #525252;
    }
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 auto;
  padding: 0.25em 1em;
`