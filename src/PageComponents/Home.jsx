import React from 'react';
import '../App.css';
import { Provider } from 'react-redux';
import { Text } from '../Components/baseComponents';
import Card from './Card';
import store from '../Redux/store';

const Home = () => (
  <div>
    <header className="App">
      <Provider store={store}>
        <Card title="Notícias" />
      </Provider>
      <Text caption>
        {`Powered by`}
        {` `}
        <a href="http://newsapi.org" target="_blank" rel="noopener noreferrer">
          News API
        </a>
        .
      </Text>
    </header>
  </div>
);

export default Home;
