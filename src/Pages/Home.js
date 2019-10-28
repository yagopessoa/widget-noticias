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
    news: []
  }

  componentDidMount () {
    
    store.subscribe(() => this.setState({ news: store.getState().items }))

    store.dispatch(fetchNews())

  }

  renderList = (news) => news.map((newsItem, index) => 
    <div key={index}>
      <a href={newsItem.link} style={{textDecoration: 'none'}}>
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

    const { news } = this.state

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
  
            { this.renderList(news) }
  
            <Button
              style={{ marginTop: 48 }}
            >
              Mostrar mais
            </Button>
            
          </Card>
  
        </header>
      </div>
    )
  }
}

export default Home
