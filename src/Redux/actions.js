
import fetch from 'cross-fetch'
import store from './store'


// 0ccd53f391fc447b96cc29b12934255e
// https://newsapi.org/v2/top-headlines?country=br&pageSize=5&page=1&apiKey=0ccd53f391fc447b96cc29b12934255e


export const REQUEST_NEWS = 'REQUEST_NEWS'
function requestNews () {
  return {
    type: REQUEST_NEWS
  }
}

export const RECEIVE_NEWS = 'RECEIVE_NEWS'
function receiveNews (json) {
  return {
    type: RECEIVE_NEWS,
    news: json.articles.map(article => ({
      'font': article.source.name,
      'title': article.title,
      'link': article.url,
      'date': formattedDate(new Date(article.publishedAt))
    }))
  }
}

export function fetchNews () {
  
  return function (dispatch) {
    
    dispatch(requestNews())

    const page = parseInt(store.getState().items.legth/5) + 1

    return fetch(`https://newsapi.org/v2/top-headlines?country=br&pageSize=5&page=${page}&apiKey=0ccd53f391fc447b96cc29b12934255e`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      ).then(json => dispatch(receiveNews(json)))
  }

}

const formattedDate = date => `${date.getDate().toString().padStart(2, '0')}/` +
  `${(date.getMonth()+1).toString().padStart(2, '0')}/` +
  `${date.getFullYear()}`

