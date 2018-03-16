import reducer from './shopping'

describe('Reducer(Ranking)', () => {
  test('state', () => {
    const expected = {
      categories: [
        {
          id: '1',
          name: 'all categories',
        },
        {
          id: '2502',
          name: 'computers',
        },
        {
          id: '10002',
          name: 'books',
        },
      ]
    }

    expect(expected).toEqual(reducer())
  })
})
