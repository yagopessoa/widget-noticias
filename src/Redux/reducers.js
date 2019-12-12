import { REQUEST_NEWS, RECEIVE_NEWS, SET_NO_MORE_TO_FETCH } from './actions';

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
        items: newsItems
      };
    }
    case SET_NO_MORE_TO_FETCH:
      return {
        ...state,
        hasMoreToFetch: false
      };
    default:
      return state;
  }
}

export default news;
