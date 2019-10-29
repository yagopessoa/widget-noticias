
import store from './store'

export const REQUEST_NEWS = 'REQUEST_NEWS'
export function requestNews () {
  return {
    type: REQUEST_NEWS
  }
}

export const RECEIVE_NEWS = 'RECEIVE_NEWS'
export function receiveNews (json) {
  return {
    type: RECEIVE_NEWS,
    news: json.articles && json.articles.map(article => ({
      'source': article.source.name,
      'title': article.title,
      'link': article.url,
      'date': formattedDate(new Date(article.publishedAt))
    }))
  }
}

export function fetchNews () {

  if (store.getState().hasMoreToFetch) return function (dispatch, state) {
    
    dispatch(requestNews())

    let page = parseInt(state().items.length/5) + 1

    return fetch(`https://newsapi.org/v2/top-headlines?country=br&pageSize=5&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      ).then(json => dispatch(receiveNews(json)))
  }

}

export const formattedDate = date => `${date.getDate().toString().padStart(2, '0')}/` +
  `${(date.getMonth()+1).toString().padStart(2, '0')}/` +
  `${date.getFullYear()}`

