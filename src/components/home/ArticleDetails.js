import React from 'react'
import { Link } from 'react-router-dom';

const ArticleDetails = () => {
  return (
    <div className="container text-center mt-5">
    <h2>Article Details</h2>
    <Link to='/' className='btn btn-primary'> Back to Home</Link>
    </div>
  )
}


export default ArticleDetails;
