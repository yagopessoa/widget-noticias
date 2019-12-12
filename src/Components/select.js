import styled, { css } from 'styled-components';

const Select = styled.select`
  font: 400 20px/24px Roboto;
  color: #A4A4A4;
  width: fit-content;
  margin: 8px 2px;
  background-color: white;
  border: none;
  cursor: pointer;

  :focus {
    outline: 0;
  }

  :after {
    color: #009DFF;
    width: 0; 
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #f00; 

    ${(props) => props.up
      && css`
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid black;
      `};
  }
`;

export default Select;
