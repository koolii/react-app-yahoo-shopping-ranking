import reducer from './Ranking'

describe('Reducer(Ranking)', () => {
  test('state', () => {
    const initial = reducer(undefined, { type: 'INITIAL' })
    expect(false).toEqual(initial.error)

    const category = { id: 1, name: 'dummy' }
    const startAction = {
      type: 'START_REQUEST',
      payload: {
        category: [category],
      },
    }
    const start = reducer(initial, startAction)
    expect(false).toEqual(start.error)
    expect(1).toEqual(start.category.length)
    expect(category).toEqual(start.category[0])

    const secondErrAction = {
      type: 'RECEIVE_DATA',
      error: true,
    }
    const secondErr = reducer(start, secondErrAction)
    expect(true).toEqual(secondErr.error)
    expect(1).toEqual(secondErr.category.length)
    expect(category).toEqual(secondErr.category[0])

    const secondAction = {
      type: 'RECEIVE_DATA',
      payload: {
        category: [],
        ranking: [],
      }
    }
    const second = reducer(start, secondAction)
    expect(false).toEqual(second.error)
    expect(0).toEqual(second.category.length)
    expect(0).toEqual(second.ranking.length)
  })
})