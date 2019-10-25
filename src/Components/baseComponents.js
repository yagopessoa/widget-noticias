import styled from 'styled-components'

const Title = styled.p`
  font: 600 32px/38px Roboto;
  color: #009DFF;
  padding: 8px 2px;
  border-bottom: 5px solid #009DFF;
  border-radius: 4px;
  width: fit-content;
  margin: 8px 2px;
`

const Subtitle = styled.div`
  font: 600 24px/29px Roboto;
  color: #4E4E4E;
  width: fit-content;
  margin: 16px 2px;
`

const Text = styled.div`
  font: 400 20px/24px Roboto;
  color: #A4A4A4;
  width: fit-content;
  margin: 8px 2px;
`

const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  padding: 55px 70px;
  width: 80%;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
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
`

const Label = styled.div`
  padding: 2px 38px;
  margin: 8px 2px;
  background: #D8D8E4;
  border-radius: 4px;
  color: #FFF;
  width: fit-content;
`

const Divider = styled.div`
  height: 0px;
  width: 100%;
  background: #D8D8D8;
  border: 1px solid #A4A4A4;
  border-radius: 4px;
  margin: 16px 0px;
`

export { Button, Title, Subtitle, Text, Label, Card, Divider };
