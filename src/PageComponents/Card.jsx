import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Select from '../Components/select';
import { Title, Text, Button, Card, Row } from '../Components/baseComponents';
import NewsList from './NewsList';
import { fetchNews } from '../Redux/actions';

export const CardComponent = props => {
  const [selected, setSelected] = useState('');

  const { title, isFetching, hasMoreToFetch, items, fetchMoreNews } = props;

  useEffect(() => {
    fetchMoreNews();
  }, [fetchMoreNews]);

  const sourcesList = newsItems => [
    ...new Set(newsItems.map(item => item.source))
  ];

  const handleFilterOption = e => {
    if (e.detail === 0) setSelected(e.target.value);
  };

  return (
    <Card>
      <Row fluid style={{ marginBottom: 48 }}>
        <Title>{title}</Title>

        <Select name="sourceFilter" onClick={handleFilterOption}>
          <option value="">Filtrar por fonte</option>
          {sourcesList(items).map(source => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </Select>
      </Row>

      {items.length > 0 ? (
        NewsList(items, selected)
      ) : (
        <Row>
          <Text style={{ width: '100%', textAlign: 'center' }}>
            {isFetching
              ? 'Carregando...'
              : 'Não existem notícias para serem exibidas.'}
          </Text>
        </Row>
      )}

      <Button
        style={{ marginTop: 48 }}
        disabled={!hasMoreToFetch || isFetching}
        onClick={() => fetchMoreNews()}
      >
        Mostrar mais
      </Button>
    </Card>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  hasMoreToFetch: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchMoreNews: PropTypes.func.isRequired
};

const mapStateToProps = news => ({
  isFetching: news.isFetching,
  hasMoreToFetch: news.hasMoreToFetch,
  items: news.items
});

const mapDispatchToProps = {
  fetchMoreNews: fetchNews
};

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);
