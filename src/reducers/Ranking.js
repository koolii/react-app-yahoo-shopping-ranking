// 何もしないReducer
// exportしてるnoopが
// １つのstateを特定するためのkeyとして動作する
// export const noop = (state = {}) => state;

const getRanking = (response) => {
  const ranking = []
  const itemLength = response.ResultSet.totalResultsReturned

  for (let index = 0; index < itemLength; index += 1) {
    const item = response.ResultSet['0'].Result[`${index}`]
    ranking.push({
      code: item.Code,
      name: item.Name,
      url: item.Url,
      imageUrl: item.Image.Medium,
    })
  }
}

const initialState = {
  categoryId: undefined,
  ranking: undefined,
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    // このアクションの時にstate情報をリセットする
    case 'START_REQUEST':
      return {
        categoryId: action.payload.categoryId,
        ranking: undefined,
        error: false,
      }
    case 'RECEIVE_DATA':
      return action.error ? { ...state, error: true } : { ...state, ranking: getRanking(action.payload.response) }
    default:
      return state
  }
}