import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './Ranking'
import reducer from '../reducers/Ranking'

// make a function to create mocked redux store
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('Action(Ranking)', () => {
  test('fetchRanking', () => {
    // // fetch関数をモック化
    // // (jest-fetch-mockのmockResponse()を利用してレスポンスを差し替えている)
    fetch.mockResponse(JSON.stringify('dummy'))

    // 初期化はここで出来る
    const store = mockStore({
      shopping: {
        categories: [{ id: 1, name: 'dummy' }]
      }
    })

    expect(1).toEqual(1)

    return store.dispatch(actions.fetchRanking(1))
      .then(() => {
        // fetch.mockResponse()をしているつもりだが、通常のHTTPリクエストを送っているレスポンス
        console.log(`actions: ${JSON.stringify(store.getActions())}`)
        console.log(`state: ${JSON.stringify(store.getState())}`)
      })
  })
})