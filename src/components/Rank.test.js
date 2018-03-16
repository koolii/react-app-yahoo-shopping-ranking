// ここでは記述量が多くて辛いからスナップショットによるテストだけを行なう
// 雑

import React from 'react'
import renderer from 'react-test-renderer'
import Ranking from './Ranking'

// この順番に実行コールバックが実行される
beforeAll(() => {
  console.log('beforeAll')
})
beforeEach(() => {
  console.log('beforeEach')
})
afterEach(() => {
  console.log('afterEach')
})
afterAll(() => {
  console.log('afterAll')
})

// super rough
test('Component(Ranking)Snapshot', () => {
  const props = {
    category: undefined,
    ranking: [],
    error: false,
    onMount: () => {},
    onUpdate: () => {},
  }
  const result = renderer.create(<Ranking {...props} />).toJSON()

  expect(result).toMatchSnapshot()
})
