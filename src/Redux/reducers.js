import { REQUEST_NEWS, RECEIVE_NEWS } from './actions';

function news(
  state = {
    isFetching: false,
    hasMoreToFetch: true,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_NEWS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_NEWS: {
      const incNews = action.news ? action.news : [];

      const newsItems = [...state.items, ...incNews];

      return {
        ...state,
        isFetching: false,
        hasMoreToFetch: news.length % 5 === 0 && incNews.length !== 0,
        items: newsItems
      };
    }
    default:
      return state;
  }
}

export default news;
