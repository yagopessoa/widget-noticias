import {
  REQUEST_NEWS,
  RECEIVE_NEWS
} from './actions'

function news (
  state = {
    isFetching: false,
    hasMoreToFetch: true,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_NEWS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_NEWS:

      let news = [
        ...state.items,
        ...action.news
      ]

      return Object.assign({}, state, {
        isFetching: false,
        hasMoreToFetch: 
          (news.length % 5 !== 0 ? false : true)
          && action.news.length !== 0,
        items: news
      })
    default:
      return state
  }
}

export default news
