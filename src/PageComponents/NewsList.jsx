import React from 'react';
import {
  Subtitle,
  Text,
  Label,
  Divider,
  Row,
} from '../Components/baseComponents';

const List = (newsItems, selectedNews) => {
  let newsList;

  if (selectedNews === '') newsList = newsItems;
  else newsList = newsItems.filter((item) => item.source === selectedNews);

  return newsList.map((newsItem) => (
    <div key={newsItem.title}>
      <a
        href={newsItem.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <Subtitle>{newsItem.title}</Subtitle>
      </a>

      <Row>
        <Text>{newsItem.date}</Text>
        <Label>{newsItem.source}</Label>
      </Row>

      <Divider />
    </div>
  ));
};

export default List;
