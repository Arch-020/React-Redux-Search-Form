import {SEARCH_ARTICLE, FETCH_ARTICLES, FETCH_ARTICLE} from './types';
import axios from 'axios';


export const searchArticle = text => dispatch => {
    dispatch({
        type: SEARCH_ARTICLE,
        payload: text
    });
};

export const fetchArticles = text => dispatch => {
    axios.get(`http://www.newscout.in/api/v1/article/search/?domain=newscout&q=${text}`)
        .then(response => dispatch({
            type: FETCH_ARTICLES,
            payload: response.data.body.results
        }))
        .catch(err => console.log(err))
}

export const fetchArticle = slug => dispatch => {
    axios.get(`http://www.newscout.in/api/v1/articles/${slug}/?domain=newscout`)
        .then(response => dispatch({
            type: FETCH_ARTICLE,
            payload: response.data
        }))
        .catch(err => console.log(err))
}