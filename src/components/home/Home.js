import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchForm from './SearchForm'
import ArticlesContainer from './ArticlesContainer'

export class Home extends Component {
  render() {
    const {loading} = this.props;
    return (
      <div className="container">
          <SearchForm/>
          <br/>
          {/* <ArticlesContainer /> */}
          {loading ? <Spinner /> : <ArticlesContainer />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.articles.loading
})

export default connect(mapStateToProps)(Home);