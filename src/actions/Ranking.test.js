import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './Ranking'
import reducer from '../reducers/Ranking'

// make a function to create mocked redux store
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

const everyActionDo = (store, cb) => {
  const actions = store.getActions()
  actions.forEach(action => {
    cb(action)
  })
}

describe('Action(Ranking)', () => {
  test('fetchRanking', () => {
    // // fetch関数をモック化
    // // (jest-fetch-mockのmockResponse()を利用してレスポンスを差し替えている)
    // 今回はjsonpを使っているから正常に動作していない
    fetch.mockResponse(JSON.stringify('dummy'))

    // 初期化はここで出来る
    const store = mockStore({
      shopping: {
        categories: [{ id: 1, name: 'dummy' }]
      }
    })
    const expected = [
      { type: 'START_REQUEST' },
      { type: 'RECEIVE_DATA' },
      { type: 'FINISH_REQUEST' },
    ]

    return store.dispatch(actions.fetchRanking(1))
      .then(() => {
        // everyActionDo(store, (action) => { console.log(action.type) })
        const types = store.getActions().map(action => ({ type: action.type }))
        expect(expected).toEqual(types)
      })
  })
})