import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

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
    const { category, ranking, error } = this.props

    // categoryIdからAPIへアクセスして情報を取得する
    return (
      <div>
        {/* ランキングのタイトル */}
        <h2>{
          typeof category !== 'undefined' && category.name
          ? `${category.name}'s Ranking`
          : ''
        }</h2>

        {(() => {
          if (error) {
            // show error
            return <p>occured error, please reload this page.</p>
          } else if (typeof ranking === 'undefined') {
            return <p>Now loading...</p>
          } else {
            return (
              <ol>
                {
                  // warning: immediately returns html element
                  ranking.map((item, i) => (
                    <Card
                      key={`ranking-item-${item.code}`}
                      style={{ maxWidth: '500px', margin: '32px auto' }}
                    >
                      <CardMedia
                        image={item.imageUrl}
                        title={`${i + 1}位 ${item.name}`}
                        style={{ height: '200px' }}
                      />
                      <CardContent>
                        <Typography type="title">
                          {`${i + 1}位 ${item.name}`}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          raised
                          color="secondary"
                          fullWidth
                          href={item.url}
                        >Go to product page</Button>
                      </CardActions>
                    </Card>
                  ))
                }
              </ol>
            )
          }
        })()}
      </div>
    )
  }
}

Ranking.propTYpes = {
  categoryId: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,

  // category, ranking, errorを追加
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),

  ranking: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),

  error: PropTypes.bool.isRequired,
}
Ranking.defaultProps = {
  // categoryId=1 is all kinds
  categoryId: '1',
}
