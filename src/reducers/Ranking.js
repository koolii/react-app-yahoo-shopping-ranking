// 何もしないReducer
// exportしてるnoopが
// １つのstateを特定するためのkeyとして動作する
// export const noop = (state = {}) => state;

const getRanking = (response) => {
  console.log('GET RANKING GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG')
  const ranking = []
  const itemLength = response.ResultSet.totalResultsReturned

  for (let index = 0; index < itemLength; index += 1) {
    // const item = response.ResultSet['0'].Result[`${index}`]
    const item = response.ResultSet['0'].Result['0']
    ranking.push({
      code: item.Code,
      name: item.Name,
      url: item.Url,
      imageUrl: item.Image.Medium,
    })
  }
}

const initialState = {
  category: undefined,
  ranking: undefined,
  error: false,
}
const log = (action) => {
  console.log(`NOW ACTION TYPE IS ${JSON.stringify(action)}`)
}

export default (state = initialState, action) => {
  log(action)
  switch (action.type) {
    // このアクションの時にstate情報をリセットする
    case 'START_REQUEST':
      console.log('REDUCER START_REQUEST')
      return {
        category: action.payload.category,
        ranking: undefined,
        error: false,
      }
    case 'RECEIVE_DATA':
      console.log('(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((')
      console.log(JSON.stringify(action.playload.response))
      console.log('(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((')
      return action.error ? { ...state, error: true } : { ...state, ranking: getRanking(action.payload.response) }
    default:
      console.log('OH MY GOSH')
      console.log('OH MY GOSH')
      console.log('OH MY GOSH')
      console.log('OH MY GOSH')
      return state
  }
}