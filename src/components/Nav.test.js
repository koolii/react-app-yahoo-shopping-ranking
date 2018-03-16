import React from 'react'
import enzyme from 'enzyme'
import Nav from './Nav'

test('Component(Nav)', () => {
  const categories = [
    { id: '1', name: 'nav' }
  ]

  // jest.fnが勝手にmock用の関数を定義してくれる
  const mockFunc = jest.fn()

  // shallowだとそれよりも深い階層はレンダリングしてくれないので今回だとテストが失敗してしまう
  // const wrapper = enzyme.shallow(<Nav categories={categories} onClick={onClick} />)
  // mountは全ての要素を展開レンダリングしてくれるので今回のテストだと有効
  // onClickのpropsにmockFuncを渡して、clickイベントのテストを行なうことが出来る
  const wrapper = enzyme.mount(<Nav categories={categories} onClick={mockFunc} />)

  // debug()はwrapperがレンダリングしている中身を見ることができる
  // console.log(wrapper.debug())

  // wrapper.find('li').simulate('click')
  wrapper.find('ListItemText').simulate('click')

  // wrapper.find()と言う関数もあり、特定のDOMを検索することも出来る
  expect(wrapper.contains('nav')).toEqual(true)
  expect(mockFunc).toHaveBeenCalled()
})
