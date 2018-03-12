import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Nav({ categories }) {
  console.log(`categories: ${JSON.stringify(categories)}`)
  // 遷移先
  const to = (category) => (
    category.id === '1' ? '/all' : `/category/${category.id}`
  )

  return (
    <ul>
      {/* ここではliタグ要素を作成しそのままHTMLとして返している */}
      {categories.map((category) => (
        <li key={`nav-item-${category.id}`}>
          <Link to={to(category)}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

Nav.propTypes = {
  // state.shopping.categoriesの構造を作成する
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}
