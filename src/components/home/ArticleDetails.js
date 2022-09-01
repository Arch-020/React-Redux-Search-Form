import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchArticle } from '../../actions/searchActions'

export class ArticleDetails extends Component {

  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.slug)
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">

          <h2>Article Title</h2>

        </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => ({
  article: state.articles.article
})

export default connect(mapStateToProps, { fetchArticle })(ArticleDetails);