import React, { Component } from 'react'
import { searchArticle, fetchArticles } from '../../actions/searchActions'
import { connect } from 'react-redux';


export class SearchForm extends Component {

  onChange = e => {
    this.props.searchArticle(e.target.value);
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchArticles(this.props.text)
  }


  render() {
    return (
      <div className="jumbotron jumbotron-fluid nt-5 text-center">
          <div className="container">
              <h1 className="display-4 mb-3">
                Search for a news article ..
              </h1>
              <form id="searchForm" onSubmit={this.onSubmit}>
                  <input
                  type="text"
                  class="form-control"
                  name="searchText"
                  placeholder="Search Here .."
                  onChange={this.onChange}
                  />
                  <button type="submit" className="btn btn-primary btn-bg mt-3"> <i className="fa fa-search" /> Search </button>
              </form>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    text: state.articles.text
})

export default connect(mapStateToProps, {searchArticle, fetchArticles})(SearchForm);