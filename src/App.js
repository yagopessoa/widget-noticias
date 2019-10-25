import React from 'react';
import './App.css';

import { Title, Subtitle, Text, Button, Label, Card, Divider } from './Components/baseComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Card>
          <Title>Notícias</Title>

          <Subtitle>Manchete 1</Subtitle>

          <Text>16/10/2018</Text>

          <Button>Mostrar mais</Button>

          <Divider />

          <Label>Fonte A</Label>
        </Card>

      </header>
    </div>
  );
}

export default App;
