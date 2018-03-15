import actions from './Task'

describe('Action(Task)', () => {
  test('addTask', () => {
    const task = 'dummy task'
    const result = actions.addTask(task)
    const expected = {
      type: 'ADD_TASK',
      payload: { task },
    }
    expect(result).toEqual(expected)
  })
})