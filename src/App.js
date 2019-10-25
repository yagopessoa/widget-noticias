import React from 'react';
import './App.css';
import { Select } from './Components/select';
import { 
  Title, Subtitle, Text,
  Button, Label, Card,
  Divider, Row 
} from './Components/baseComponents';

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
    'font': 'Fonte A',
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
    return news.map((newsItem, index) => <div key={index}>
      <a href={newsItem.link} style={{textDecoration: 'none'}}>
        <Subtitle>{ newsItem.name }</Subtitle>
      </a>
  
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

            <Select name="fontFilter">
              <option value="">Filtrar por fonte</option>
              {[...new Set(news.map(item => item.font))]
                  .map((font, index) => 
                    <option key={index} value="">
                      { font }
                    </option>)
              }
            </Select>
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
