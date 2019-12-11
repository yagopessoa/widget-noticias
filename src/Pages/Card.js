import React, { useState, useEffect } from "react";
import Select from "../Components/select";
import {
  Title,
  Subtitle,
  Text,
  Button,
  Label,
  Card,
  Divider,
  Row
} from "../Components/baseComponents";
import store from "../Redux/store";
import { fetchNews } from "../Redux/actions";

const CardComponent = props => {
  const [selected, setSelected] = useState("");
  const [news, setNews] = useState([]);
  const [hasMoreToFetch, setHasMoreToFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    store.subscribe(() => {
      const { items, isFetching, hasMoreToFetch } = store.getState();

      setNews(items);
      setHasMoreToFetch(hasMoreToFetch);
      setLoading(isFetching);
    });

    store.dispatch(fetchNews());
  }, []);

  const renderList = (news, selected) => {
    
    let newsList
    
    if (selected === '') newsList = news
    else newsList = news.filter(item => item.source === selected)
    
    return newsList.map((newsItem, index) => 
      <div key={index}>
        <a href={newsItem.link} target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
          <Subtitle>{ newsItem.title }</Subtitle>
        </a>
    
        <Row>
          <Text>{ newsItem.date }</Text>
          <Label>{ newsItem.source }</Label>
        </Row>
    
        <Divider />
      </div>)
  }

  const sourcesList = (news) => [...new Set(news.map(item => item.source))]

  const handleFilterOption = (e) => { if (e.detail === 0) setSelected(e.target.value) }

  return (
    <Card>
      <Row fluid style={{ marginBottom: 48 }}>
        <Title>{ props.title }</Title>

        <Select name="sourceFilter" onClick={handleFilterOption}>
          <option value="">Filtrar por fonte</option>
          {sourcesList(news).map((source, index) => (
            <option key={index} value={source}>
              {source}
            </option>
          ))}
        </Select>
      </Row>

      {news.length > 0 ? (
        renderList(news, selected)
      ) : (
        <Row>
          <Text style={{ width: "100%", textAlign: "center" }}>
            {loading
              ? "Carregando..."
              : "Não existem notícias para serem exibidas."}
          </Text>
        </Row>
      )}

      <Button
        style={{ marginTop: 48 }}
        disabled={!hasMoreToFetch || loading}
        onClick={() => store.dispatch(fetchNews())}
      >
        Mostrar mais
      </Button>
    </Card>
  );
};

export default CardComponent;
