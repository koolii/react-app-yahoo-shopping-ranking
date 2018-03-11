import React from 'react'
import PropTypes from 'prop-types'

export default class Ranking extends React.Component {
  componentWillMount() {
    this.props.onMount(this.props.categoryId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categoryId !== nextProps.categoryId) {
      this.props.onUpdate(nextProps.categoryId)
    }
  }

  render() {
    // categoryIdからAPIへアクセスして情報を取得する
    return (
      <div>
        <h2>Ranking Component</h2>
        <p>CategoryId: {this.props.categoryId}</p>
      </div>
    )
  }
}

Ranking.propTYpes = {
  categoryId: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
}
Ranking.defaultProps = {
  // categoryId=1 is all kinds
  categoryId: '1',
}
