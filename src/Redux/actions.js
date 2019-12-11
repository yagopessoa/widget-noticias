import store from './store';

export const REQUEST_NEWS = 'REQUEST_NEWS';
export function requestNews() {
  return {
    type: REQUEST_NEWS
  };
}

export const formattedDate = date =>
  `${date
    .getDate()
    .toString()
    .padStart(2, '0')}/` +
  `${(date.getMonth() + 1).toString().padStart(2, '0')}/` +
  `${date.getFullYear()}`;

export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export function receiveNews(json) {
  return {
    type: RECEIVE_NEWS,
    news:
      json.articles &&
      json.articles.map(article => ({
        source: article.source.name,
        title: article.title,
        link: article.url,
        date: formattedDate(new Date(article.publishedAt))
      }))
  };
}

export function fetchNews() {
  if (store.getState().hasMoreToFetch) {
    return async (dispatch, state) => {
      dispatch(requestNews());

      const page = parseInt(state().items.length / 5, 10) + 1;
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=br&pageSize=5&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`
      ).then(resp => resp.json());

      return dispatch(receiveNews(response));
    };
  }
  return null;
}
