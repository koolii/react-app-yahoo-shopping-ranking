import { connect } from 'react-redux'
import Nav from '../components/Nav'

const mapStateToProps = (state) => ({
  // state.shopping.categoriesをpropsに紐付ける
  categories: state.shopping.categories
})

export default connect(mapStateToProps)(Nav)
