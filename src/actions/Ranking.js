import fetchJsonp from 'fetch-jsonp'
import qs from 'qs'
import { replace } from 'react-router-redux'
import { api } from '../yahoo-api.json'

const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking'
const APP_ID = api

// このアクションの時にstate情報をリセットする
const startRequest = (category) => ({
  type: 'START_REQUEST',
  payload: { category },
})
// APIからのレスポンスを適用させる
const receiveData = (category, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: { category, error, response },
})
const finishRequest = (category) => ({
  type: 'FINISH_REQUEST',
  payload: { category },
})

// redux-thunk
export const fetchRanking = (categoryId) => {
  return async (dispatch, getState) => {
    // カテゴリIDに紐づくstate.shopping.categoriesにアクセス
    // 存在しないcategoryIdでHTTPアクセスしない(存在しないIDだった場合は'/'にリダイレクト)
    const categories = getState().shopping.categories
    const category = categories.find((category) => (category.id === categoryId))
    if (typeof category === 'undefined') {
      dispatch(replace('/'))
      return;
    }

    // 当てはまるcategoryIdが存在したので正常にHTTPアクセスを行なう
    dispatch(startRequest(categoryId))

    const queryString = qs.stringify({
      appid: APP_ID,
      category_id: categoryId,
    })

    try {
      const response = await fetchJsonp(`${API_URL}?${queryString}`)
      const data = await response.json()
      console.log('RECEIVE_DATA')
      dispatch(receiveData(category, null, data))
    } catch (err) {
      dispatch(receiveData(category, err))
    }
    console.log('FINISHED')
    dispatch(finishRequest(category))
  }
}
