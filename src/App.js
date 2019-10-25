import React from 'react';
import './App.css';

import { Title, Subtitle, Text, Button, Label, Card, Divider, Row } from './Components/baseComponents';

const news = [
  {
    'name': 'Manchete 1',
    'date': '01/01/2019',
    'font': 'Fonte A',
    'link': '#'
  },
  {
    'name': 'Manchete 2',
    'date': '01/01/2019',
    'font': 'Fonte B',
    'link': '#'
  },
  {
    'name': 'Manchete 3',
    'date': '01/01/2019',
    'font': 'Fonte C',
    'link': '#'
  },
  {
    'name': 'Manchete 4',
    'date': '01/01/2019',
    'font': 'Fonte D',
    'link': '#'
  },
  {
    'name': 'Manchete 5',
    'date': '01/01/2019',
    'font': 'Fonte E',
    'link': '#'
  }
]

function App() {

  const renderList = () => {
    return news.map(newsItem => <div>
      <Subtitle>{ newsItem.name }</Subtitle>
  
      <Row>
        <Text>{ newsItem.date }</Text>
        <Label>{ newsItem.font }</Label>
      </Row>
  
      <Divider />
    </div>)
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <Card>

          <Row 
            fluid 
            style={{ marginBottom: 48 }}
          >
            <Title>Notícias</Title>
            <Text>Filtrar por fonte</Text>
          </Row>

          { renderList() }

          <Button
            style={{ marginTop: 48 }}
          >
            Mostrar mais
          </Button>
          
        </Card>

      </header>
    </div>
  );
}

export default App;
