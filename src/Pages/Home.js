import React from 'react'
import '../App.css'

import { Select } from '../Components/select'
import { 
  Title, Subtitle, Text,
  Button, Label, Card,
  Divider, Row 
} from '../Components/baseComponents'

import store from '../Redux/store'
import { fetchNews } from '../Redux/actions'

class Home extends React.Component {

  state = {
    news: [],
    hasMoreToFetch: false,
    loading: true
  }

  componentDidMount () {
    
    store.subscribe(() => {
      
      const { items, isFetching, hasMoreToFetch} = store.getState()

      this.setState({
        news: items,
        hasMoreToFetch: hasMoreToFetch,
        loading: isFetching
      })
      
    })

    store.dispatch(fetchNews())

  }

  renderList = (news) => news.map((newsItem, index) => 
    <div key={index}>
      <a href={newsItem.link} target='_blank' style={{textDecoration: 'none'}}>
        <Subtitle>{ newsItem.title }</Subtitle>
      </a>
  
      <Row>
        <Text>{ newsItem.date }</Text>
        <Label>{ newsItem.font }</Label>
      </Row>
  
      <Divider />
    </div>
  )

  render () {

    const { news, hasMoreToFetch, loading } = this.state

    return (
      <div>
        <header className='App'>
          
          <Card>
  
            <Row 
              fluid 
              style={{ marginBottom: 48 }}
            >
              <Title>Notícias</Title>
  
              <Select name='fontFilter'>
                <option value=''>Filtrar por fonte</option>
                {[...new Set(news.map(item => item.font))]
                    .map((font, index) => 
                      <option key={index} value=''>
                        { font }
                      </option>)
                }
              </Select>
            </Row>
  
            { 
              news.length > 0 ? this.renderList(news) :

              <Row><Text style={{width: '100%', textAlign: 'center'}}>
                {loading ? 'Carregando...' : 'Não existem notícias para serem exibidas.'}
              </Text></Row>
            }
  
            <Button
              style={{ marginTop: 48 }}
              disabled={ !hasMoreToFetch || loading }
              onClick={ () => store.dispatch(fetchNews()) }
            >
              Mostrar mais
            </Button>
            
          </Card>

          <Text caption>Powered by <a href='http://newsapi.org' target='_blank'>News API</a>.</Text>
  
        </header>
      </div>
    )
  }
}

export default Home
