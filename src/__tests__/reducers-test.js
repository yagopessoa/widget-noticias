import { REQUEST_NEWS } from '../Redux/actions'
import news from '../Redux/reducers'

describe('news reducer', () => {
  it('should return the initial state', () => {
    expect(news(undefined, {})).toEqual(
      {
        isFetching: false,
        hasMoreToFetch: true,
        items: []
      }
    )
  })

  it('should handle REQUEST_NEWS', () => {
    expect(
      news({
        isFetching: false,
        hasMoreToFetch: true,
        items: []
      }, {
        type: REQUEST_NEWS
      })
    ).toEqual(
      {
        isFetching: true,
        hasMoreToFetch: true,
        items: []
      }
    )
  })
})
