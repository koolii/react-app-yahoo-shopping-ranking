import React from 'react'
import PropTypes from 'prop-types'

export default function Ranking({ categoryId }) {
  // categoryIdからAPIへアクセスして情報を取得する
  return (
    <div>
      <h2>Ranking Component</h2>
      <p>CategoryId: {categoryId}</p>
    </div>
  )
}

Ranking.propTYpes = {
  categoryId: PropTypes.string,
}
Ranking.defaultProps = {
  // categoryId=1 is all kinds
  categoryId: '1',
}
