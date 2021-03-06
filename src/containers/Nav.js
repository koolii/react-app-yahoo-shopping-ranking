import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Nav from '../components/Nav'

const mapStateToProps = (state) => ({
  // state.shopping.categoriesをpropsに紐付ける
  categories: state.shopping.categories
})

const mapDispatchToProps = (dispatch) => ({
  onClick(path) {
    dispatch(push(path))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
