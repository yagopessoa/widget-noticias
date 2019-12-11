import styled, { css } from 'styled-components';

export const Title = styled.p`
  font: 600 32px/38px Roboto;
  color: #009DFF;
  padding: 8px 2px;
  border-bottom: 5px solid #009DFF;
  border-radius: 4px;
  width: fit-content;
  margin: 8px 2px;
`;

export const Subtitle = styled.div`
  font: 600 24px/29px Roboto;
  color: #4E4E4E;
  width: fit-content;
  margin: 16px 2px;
`;

export const Text = styled.div`
  font: 400 20px/24px Roboto;
  color: #A4A4A4;
  width: fit-content;
  margin: 8px 2px;

  ${(props) => props.caption
    && css`
      font-size: 12px;
    `};
`;

export const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  margin: 48px 0px;
  padding: 55px 70px;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media(max-width: 1144px) {
    width: 75%;
  }

  @media(max-width: 768px) {
    width: calc(100% - 174px);
    margin: 16px;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  width: fit-content;
  margin: 8px 2px;
  background: #009DFF;
  border-radius: 4px;
  text-align: center;
  font: Bold 18px/22px Roboto;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  :active{
    background: #4FBBFF;
  }

  ${(props) => props.disabled
    && css`
      cursor: auto;
      background-color: #D8D8E4;
    `};
`;

export const Label = styled.div`
  font: 400 20px/24px Roboto;
  padding: 0px 38px;
  margin: 0px 16px;
  background: #D8D8E4;
  border-radius: 4px;
  color: #FFF;
  width: fit-content;
`;

export const Divider = styled.div`
  height: 0px;
  width: 100%;
  background: #D8D8D8;
  border: 1px solid #A4A4A4;
  border-radius: 4px;
  margin: 16px 0px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;
  }

  ${(props) => props.fluid
    && css`
      width: 100%;
      justify-content: space-between;
    `};
`;
