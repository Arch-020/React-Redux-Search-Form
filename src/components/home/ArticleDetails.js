
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/searchActions';
import { useParams } from "react-router-dom";

export class ArticleDetails extends Component {

  componentDidMount() {
    this.props.fetchArticle(this.props.params.slug)
  }

  render() {
    const { article } = this.props;
    return (

      <React.Fragment>

        <div className='container'>
          <div className='pt-50 mb-lg-5'>
            <div className='row mt-5'>
              <div className='col-lg-8 col-12 card card-body mx-2'>
              <h6>Article Details</h6>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col-lg-8 col-12 mb-4 card card-body mx-2'>
              <img className="w-100 mb-4" src={article.cover_image} alt="Article Cover" height={500} />
                 <h2 className='mb-4'>{article.title}</h2>
                 <h5 className="text-dark text-opacity-50 text-start mb-4">
                     {article.source}
                 </h5>
                 <p className="text-dark text-opacity-75 mb-4">
                     {article.blurb}
                 </p>
              </div>
              <div className='col-lg-3 col-12 mb-4 card card-body mx-2'>
                <div className='heading'>
                  <h3 className='text-center'>More News</h3>
                  <hr/>
                </div>
              </div>
            </div>
            <div className='col-lg-8 col-12 '>
            <Link to='/' className='btn btn-primary'> Back to Home</Link>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  article: state.articles.article
})

const withRouter = WrappedComponent => props => {
  const params = useParams();

  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  )
}

export default withRouter(connect(mapStateToProps, { fetchArticle })(ArticleDetails));



