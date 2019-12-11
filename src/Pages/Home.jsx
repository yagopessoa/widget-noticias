import React from 'react';
import '../App.css';
import { Text } from '../Components/baseComponents';
import Card from './Card';

const Home = () => (
  <div>
    <header className="App">
      <Card title="Notícias" />

      <Text caption>
        Powered by
        {' '}
        <a
          href="http://newsapi.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          News API
        </a>
        .
      </Text>
    </header>
  </div>
);

export default Home;
