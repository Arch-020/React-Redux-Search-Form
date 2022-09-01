import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleCard from './ArticleCard'

export class ArticlesContainer extends Component {
  render() {
      const {searchArticles} = this.props;
      let content = '';

      content = searchArticles.length > 0 ? searchArticles.map((article,index) => <ArticleCard key= {index} article={article} />) : null ;
    return (
      <div className='row'>
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    searchArticles: state.articles.searchArticles
})

export default connect(mapStateToProps)(ArticlesContainer);