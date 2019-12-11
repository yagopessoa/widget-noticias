import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Select from '../Components/select';
import { Title, Text, Button, Card, Row } from '../Components/baseComponents';
import NewsList from './NewsList';
import store from '../Redux/store';
import { fetchNews } from '../Redux/actions';

const CardComponent = props => {
  const [selected, setSelected] = useState('');
  const [news, setNews] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    store.subscribe(() => {
      const { items, isFetching, hasMoreToFetch } = store.getState();

      setNews(items);
      setHasMore(hasMoreToFetch);
      setLoading(isFetching);
    });

    store.dispatch(fetchNews());
  }, []);

  const sourcesList = newsItems => [
    ...new Set(newsItems.map(item => item.source))
  ];

  const handleFilterOption = e => {
    if (e.detail === 0) setSelected(e.target.value);
  };

  const { title } = props;

  return (
    <Card>
      <Row fluid style={{ marginBottom: 48 }}>
        <Title>{title}</Title>

        <Select name="sourceFilter" onClick={handleFilterOption}>
          <option value="">Filtrar por fonte</option>
          {sourcesList(news).map(source => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </Select>
      </Row>

      {news.length > 0 ? (
        NewsList(news, selected)
      ) : (
        <Row>
          <Text style={{ width: '100%', textAlign: 'center' }}>
            {loading
              ? 'Carregando...'
              : 'Não existem notícias para serem exibidas.'}
          </Text>
        </Row>
      )}

      <Button
        style={{ marginTop: 48 }}
        disabled={!hasMore || loading}
        onClick={() => store.dispatch(fetchNews())}
      >
        Mostrar mais
      </Button>
    </Card>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default CardComponent;
