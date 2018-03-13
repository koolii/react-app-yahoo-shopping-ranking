import { connect } from 'react-redux'
import Ranking from '../components/Ranking'
import * as actions from '../actions/Ranking'

// Reducerを定義後に実装を行うこと
const mapStateToProps = (state, ownProps) => {
  console.log(JSON.stringify(state))
  return {
    categoryId: ownProps.categoryId,
    // カテゴリ、ランキング情報をRankingコンポーネントに渡す
    category: state.Ranking.category,
    ranking: state.Ranking.ranking,
    error: state.Ranking.error,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onMount(categoryId) {
    dispatch(actions.fetchRanking(categoryId))
  },
  onUpdate(categoryId) {
    dispatch(actions.fetchRanking(categoryId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)
