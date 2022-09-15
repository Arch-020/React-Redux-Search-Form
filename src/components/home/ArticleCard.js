import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class ArticleCard extends Component {
  render() {
    const { article } = this.props;
    return (
        <div className="col-md-4 mb-5">
            <div className="card card-body bg-light text-center h-100 ">
                <img className="w-100 mb-2" src={article.cover_image} alt="Article Cover" />
                <h5 className="text-dark text-xl-start card-title ">
                    {article.title}
                </h5>
                <p className="text-dark text-opacity-75 text-start ">
                    {article.source}
                </p>
                <p className="text-dark text-truncate">
                    {article.blurb}
                </p>
                <Link className=' text-sm-end text-decoration-none ' to={'/articles/' + article.slug}>
                    Read More
                    <i className="fa fa-chevron-right mx-sm-1" />
                </Link> 
            </div>
        </div>

    )
  }
}

export default ArticleCard