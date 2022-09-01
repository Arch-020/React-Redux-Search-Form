import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchForm from './SearchForm'
import ArticlesContainer from './ArticlesContainer'

export class Home extends Component {
  render() {
  
    return (
      <div className="container">
          <SearchForm/>
          <br></br>
          <ArticlesContainer />
         
      </div>
    )
  }
}

export default Home;