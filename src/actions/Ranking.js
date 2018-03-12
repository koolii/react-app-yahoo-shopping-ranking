import fetchJsonp from 'fetch-jsonp'
import qs from 'qs'
import { api } from '../yahoo-api.json'

const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking'
const APP_ID = api

const startRequest = (categoryId) => ({
  type: 'START_REQUEST',
  payload: { categoryId },
})
const receiveData = (categoryId, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: { categoryId, error, response },
})
const finishRequest = (categoryId) => ({
  type: 'FINISH_REQUEST',
  payload: { categoryId },
})

// redux-thunk
export const fetchRanking = (categoryId) => {
  return async (dispatch) => {
    dispatch(startRequest(categoryId))

    const queryString = qs.stringify({
      appid: APP_ID,
      category_id: categoryId,
    })

    try {
      const url = API_URL + '?' + queryString
      const response = await fetchJsonp(url)
      const data = await response.json()
      dispatch(receiveData(categoryId, null, data))
    } catch (err) {
      dispatch(receiveData(categoryId, err))
    }
    dispatch(finishRequest(categoryId))
  }
}
